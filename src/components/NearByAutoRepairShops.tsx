import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {AutoRepairShopItem} from '../typescript/redux/EPlacesTypes';
import {usePlaces} from '../hooks/usePlaces';
import styled from 'styled-components/native';
import {screenHeight, screenWidth} from '../config/constants';
import {defaultTheme} from '../theme/default';
import translation from '../assets/translations';
import {strings} from '../config/strings';
import ListHeaderTitle from './ListHeaderTitle';
import {useNavigation} from '@react-navigation/native';
import {EAppScreens} from '../typescript/static/EAppScreens';

const NearByAutoRepairShops = () => {
  const state = useSelector((state: RootState) => state.places.autoRepairShops);
  const {getNearByAutoRepairShops} = usePlaces();
  const i18n = translation();
  const navigation = useNavigation();

  useEffect(() => {
    getNearByAutoRepairShops();
  }, []);

  const renderItem = useCallback(({item}: {item: AutoRepairShopItem}) => {
    return (
      <Container
        onPress={() =>
          //@ts-ignore
          navigation.navigate(EAppScreens.InnerAutoRepair, {item: item})
        }>
        <Image />
        <InfoContainer>
          <TextAndRatingContainer>
            <Title numberOfLines={1}>{item.name}</Title>
            <Rating>{item.rating}</Rating>
          </TextAndRatingContainer>
          <Distance>{item.distance.toFixed(2)}km</Distance>
        </InfoContainer>
      </Container>
    );
  }, []);

  return (
    <>
      <Header>
        <ListHeaderTitle>
          {strings.homeScreen.nearByAutoRepairShops}
        </ListHeaderTitle>
        <ShowAllButtonContainer>
          <ShowAll>{`${i18n.t(strings.homeScreen.showAll)}`}</ShowAll>
        </ShowAllButtonContainer>
      </Header>

      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        horizontal
      />
    </>
  );
};

export default NearByAutoRepairShops;

const Container = styled.TouchableOpacity`
  height: ${screenHeight / 6.5}px;
  width: ${screenWidth / 2}px;
  margin-right: 15px;
`;

const Image = styled.Image`
  height: 65%;
  width: 100%;
`;

const TextAndRatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Distance = styled.Text``;

const InfoContainer = styled.View`
  padding-horizontal: 5px;
  padding-vertical: 3px;
`;

const Title = styled.Text`
  font-weight: bold;
  max-width: 70%;
`;

const Rating = styled.Text`
  font-weight: bold;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ShowAllButtonContainer = styled.TouchableOpacity`
  margin-top: ${defaultTheme.sizes.getSpacing(7)}px;
  margin-bottom: ${defaultTheme.sizes.getSpacing(3)}px;
  background-color: ${defaultTheme.colors.inverted};
`;

const ShowAll = styled.Text`
  color: ${defaultTheme.colors.primary};
  font-weight: 600;
`;
