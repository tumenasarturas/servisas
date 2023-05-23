import React, {useCallback} from 'react';
import ListHeaderTitle from './ListHeaderTitle';
import {strings} from '../config/strings';
import {$enum} from 'ts-enum-util';
import {EAdditionalServices} from '../typescript/static/EAdditionalServices';
import styled from 'styled-components/native';
import {screenHeight, screenWidth} from '../config/constants';
import {defaultTheme} from '../theme/default';
import {icons} from '../assets/images';
import translation from '../assets/translations';

const AdditionalServices = () => {
  const i18n = translation();
  const renderServices = useCallback((item: EAdditionalServices) => {
    return (
      <Container>
        <Image source={icons.services[item]} />
        <ServicesTitle>{`${i18n.t(
          strings.additionalServices[item],
        )}`}</ServicesTitle>
      </Container>
    );
  }, []);
  return (
    <>
      <ListHeaderTitle>{strings.additionalServices.services}</ListHeaderTitle>
      <Wrapper>{$enum(EAdditionalServices).map(renderServices)}</Wrapper>
    </>
  );
};

export default AdditionalServices;

const Container = styled.TouchableOpacity`
  height: ${screenHeight / 7}px;
  width: ${screenWidth / 2 - defaultTheme.sizes.appPadding}px;
  background-color: ${defaultTheme.colors.inverted};
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  height: 50px;
  width: 50px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ServicesTitle = styled.Text`
  margin-top: ${defaultTheme.sizes.getSpacing(3)}px;
  font-weight: 600;
  color: ${defaultTheme.colors.primary};
`;
