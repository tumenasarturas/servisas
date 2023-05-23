import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {RootState} from '../redux/store';
import {Image} from 'react-native';
import {icons} from '../assets/images';
import {defaultTheme} from '../theme/default';

const CurrentLocation = () => {
  const currentLocationAdress = useSelector(
    (state: RootState) => state.user.user.location?.address,
  );

  return (
    <Container>
      <Image
        source={icons.location.locationMarker}
        style={{height: 20, width: 20}}
      />
      <CurrentLocationText>{currentLocationAdress}</CurrentLocationText>
    </Container>
  );
};

export default CurrentLocation;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CurrentLocationText = styled.Text`
  margin-left: ${defaultTheme.sizes.getSpacing(2)}px;
  font-size: 16px;
  font-weight: 300;
`;
