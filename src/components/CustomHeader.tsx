import React from 'react';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';
import {icons} from '../assets/images';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import translation from '../assets/translations';
import {strings} from '../config/strings';
import {EHeaderTitles} from '../typescript/static/EHeaderTitles';

const CustomHeader = () => {
  const navigation = useNavigation();
  const i18n = translation();
  const currentScreen = useNavigationState(
    state => state.routes[state.index].name,
  );

  const isLanguageScreen = currentScreen === EHeaderTitles.Language;

  return (
    <Container selectLanguageScreen={isLanguageScreen}>
      <ImageContainer onPress={() => navigation.goBack()}>
        <Image source={icons.arrows.back} />
      </ImageContainer>
      <HeaderTitle>
        {i18n.t(strings.header[currentScreen as EHeaderTitles])}
      </HeaderTitle>
    </Container>
  );
};

export default CustomHeader;

const Container = styled.View<{selectLanguageScreen?: boolean}>`
  height: ${defaultTheme.sizes.header}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${({selectLanguageScreen}) => (selectLanguageScreen ? '70%' : '65%')};
`;

const ImageContainer = styled.TouchableOpacity``;

const Image = styled.Image`
  height: 15px;
  width: 15px;
`;

const HeaderTitle = styled.Text`
  font-size: ${defaultTheme.font.size.md}px;
`;
