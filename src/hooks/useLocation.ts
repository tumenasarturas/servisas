import {useCallback} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import Geocoder from 'react-native-geocoding';
import {userSlice} from '../redux/user/userSlice';
import { GOOGLE_API_KEY } from '../../api/api';
import { RootState } from '../redux/store';

export const useLocation = () => {
  const dispatch = useDispatch();
  const locationPermission  = useSelector((state: RootState) => state.user.user.locationPermissionsGranted )
  const getCurrentLocation = useCallback(() => {
    Geocoder.init(GOOGLE_API_KEY);


      Geolocation.getCurrentPosition(info => {
        Geocoder.from(info.coords.latitude, info.coords.longitude)
          .then(json => {
            const houseNumber = json.results[0].address_components[0].long_name;
            const streetName = json.results[0].address_components[1].short_name;
            const city = json.results[0].address_components[2].short_name;
            const addressComponent = `${streetName} ${houseNumber}, ${city}`;
  
            dispatch(
              userSlice.actions.setUserLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                address: addressComponent,
              }),
            );
          })
          .catch(error => console.warn(error));
      });
    

  }, [Geolocation, dispatch]);

  return {
    getCurrentLocation,
  };
};
