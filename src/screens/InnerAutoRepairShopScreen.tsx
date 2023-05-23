import React, {useCallback, useEffect, useRef} from 'react';
import {AutoRepairShopItem} from '../typescript/redux/EPlacesTypes';
import AppLayout from '../components/AppLayout';
import CustomHeader from '../components/CustomHeader';
import MapView, {Polyline} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {usePlaces} from '../hooks/usePlaces';
import {defaultTheme} from '../theme/default';
import styled from 'styled-components/native';
import {screenHeight} from '../config/constants';
import {icons} from '../assets/images';

interface IProps {
  route: {
    params: {
      item: AutoRepairShopItem;
    };
  };
}

const InnerAutoRepairShopScreen = ({route}: IProps) => {
  const currentLocationAdress = useSelector(
    (state: RootState) => state.user.user.location,
  );
  const polylineCoords = useSelector(
    (state: RootState) => state.places.polyline,
  );

  const {drawPolyline} = usePlaces();
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (route.params?.item) {
      drawPolyline(route.params.item);
    }
  }, [route.params.item]);

  const fitToPolyline = useCallback(() => {
    if (polylineCoords.length > 0 && mapRef.current) {
      mapRef.current.fitToCoordinates(polylineCoords, {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        animated: true,
      });
    }
  }, [polylineCoords, mapRef]);

  return (
    <AppLayout scrollEnabled>
      <CustomHeader />
      <MapView
        style={{height: 350, borderRadius: 5}}
        scrollEnabled={false}
        zoomEnabled={false}
        onMapReady={fitToPolyline}
        ref={mapRef}
        initialRegion={{
          latitude: Number(currentLocationAdress?.latitude!),
          longitude: Number(currentLocationAdress?.longitude!),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Polyline
          coordinates={polylineCoords}
          strokeWidth={5}
          strokeColor={defaultTheme.colors.primary}
        />
      </MapView>
      <InfoContainer>
        <InfoWrapper>
          <InfoText>{route.params.item.name}</InfoText>
          <RatingAndDistanceContainer>
            <RatingAndDistanceContainer>
              <Image source={icons.star} />
              <InfoText>{route.params.item.rating}</InfoText>
            </RatingAndDistanceContainer>
            <RatingAndDistanceContainer>
              <Image source={icons.road} />
              <InfoText>{route.params.item.distance} km</InfoText>
            </RatingAndDistanceContainer>
          </RatingAndDistanceContainer>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer>
        <InfoWrapper>
          <InformationRow>
            <InfoText>{route.params.item.address}</InfoText>
            <InformationButtonContainer>
              <InformationButtonText>Naviguoti</InformationButtonText>
            </InformationButtonContainer>
          </InformationRow>
          <InformationRow>
            <InfoText>Darbo laikas</InfoText>
            <InformationButtonContainer>
              <InformationButtonText>08:00 - 19:00</InformationButtonText>
            </InformationButtonContainer>
          </InformationRow>
          <InformationRow>
            <InfoText>+370 60000000</InfoText>
            <InformationButtonContainer>
              <InformationButtonText>Skambinti</InformationButtonText>
            </InformationButtonContainer>
          </InformationRow>
        </InfoWrapper>
      </InfoContainer>
    </AppLayout>
  );
};

export default InnerAutoRepairShopScreen;

const InfoContainer = styled.View`
  background-color: ${defaultTheme.colors.disabled};
  border-radius: 10px;
  margin-top: ${defaultTheme.sizes.getSpacing(3)}px;
`;

const InfoWrapper = styled.View`
  padding: ${defaultTheme.sizes.getSpacing(3)}px;
`;

const InfoText = styled.Text``;

const RatingAndDistanceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${defaultTheme.sizes.getSpacing(3)}px;
`;

const Image = styled.Image``;

const InformationRow = styled.View`
    border-bottom-width: 1px
    border-color: ${defaultTheme.colors.primary}
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 15px;
`;

const InformationButtonContainer = styled.TouchableOpacity``;

const InformationButtonText = styled.Text``;
