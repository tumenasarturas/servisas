import React from 'react';
import styled from 'styled-components/native';
import {icons} from '../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {generalSlice} from '../redux/general/generalSlice';
import {defaultTheme} from '../theme/default';
import {useNavigation} from '@react-navigation/native';
import {EAppScreens} from '../typescript/static/EAppScreens';

const LanguageButton = () => {
  const selectedLanguage = useSelector(
    (state: RootState) => state.general.language,
  );

  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate(EAppScreens.Language);
      }}>
      <Image source={icons.languages[selectedLanguage]} />
    </Container>
  );
};

export default LanguageButton;

const Container = styled.TouchableOpacity``;

const Image = styled.Image`
  height: 25px;
  width: 25px;
  border-radius: 12px;
  position: absolute;
  right: 0;
  margin-top: ${defaultTheme.sizes.getSpacing(2)}px;
`;
