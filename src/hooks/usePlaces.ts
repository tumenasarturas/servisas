import {useCallback} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import getDistance from 'geolib/es/getDistance';
import {placesSlice} from '../redux/places/placesSlice';
import {GOOGLE_API_KEY} from '../../api/api';
import {PLACES_ENDPOINT, PLACES_RADIUS, SEARCH_TYPE} from '../config/constants';
import polyline from '@mapbox/polyline';
import { AutoRepairShopItem } from '../typescript/redux/EPlacesTypes';

export const usePlaces = () => {
  const currentLocationAdress = useSelector(
    (state: RootState) => state.user.user.location,
  );


  const dispatch = useDispatch();
  const location = `${currentLocationAdress?.latitude}, ${currentLocationAdress?.longitude}`;
  const url = `${PLACES_ENDPOINT}?location=${location}&radius=${PLACES_RADIUS}&type=${SEARCH_TYPE}&key=${GOOGLE_API_KEY}`;

  const getNearByAutoRepairShops = useCallback(() => {
    axios
      .get(url)
      .then(response => {
        const results = response.data.results;


        const autoRepairShops = results.map((result: any) => {
          const distanceInMeters = getDistance(
            currentLocationAdress!,
            result.geometry.location,
          );
          const distanceInKilometers = distanceInMeters / 1000;

          return {
            name: result.name,
            address: result.vicinity,
            rating: result.rating,
            userTotalRating: result.user_ratings_total,
            distance: distanceInKilometers,
            favorite: false,
            location: result.geometry.location
          };
        });

        const sortedRepairShops = autoRepairShops.sort(
          (a: {distance: number}, b: {distance: number}) =>
            a.distance - b.distance,
        );
        dispatch(placesSlice.actions.setAutoRepairShops(sortedRepairShops));
      })
      .catch(error => {
        console.error(error);
      });
  }, [axios, getDistance, dispatch]);

  const drawPolyline = useCallback((item: AutoRepairShopItem) => {
    if (location) {


      const destination = `${item.location.lat},${item.location.lng}`;
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${currentLocationAdress?.latitude},${currentLocationAdress?.longitude}&destination=${destination}&key=${GOOGLE_API_KEY}`;

      fetch(url)
        .then(response => response.json())
        .then(json => {
          const {routes} = json;

          const {overview_polyline} = routes[0];
          const routeCoordinates = polyline
            .decode(overview_polyline.points)
            .map(point => ({
              latitude: point[0],
              longitude: point[1],
            }));

          dispatch(placesSlice.actions.setPolyline(routeCoordinates));
        })
        .catch(error => console.error(error));
    }
  }, [dispatch, polyline]);

  return {
    getNearByAutoRepairShops,
    drawPolyline,
  };
};
