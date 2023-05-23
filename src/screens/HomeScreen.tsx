import React from 'react';
import AppLayout from '../components/AppLayout';
import styled from 'styled-components/native';
import LocationPermissionModal from '../components/LocationPermission';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import CurrentLocation from '../components/CurrentLocation';
import NearByAutoRepairShops from '../components/NearByAutoRepairShops';
import AdditionalServices from '../components/AdditionalServices';

const HomeScreen = () => {
  const locationGranted = useSelector(
    (state: RootState) => state.user.user.locationPermissionsGranted,
  );
  return (
    <AppLayout scrollEnabled>
      <Container>
        {locationGranted ? (
          <>
            <CurrentLocation />
            <NearByAutoRepairShops />
            <AdditionalServices />
          </>
        ) : (
          <LocationPermissionModal />
        )}
      </Container>
    </AppLayout>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
`;
