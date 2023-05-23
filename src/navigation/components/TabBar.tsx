import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {BorderlessButton} from 'react-native-gesture-handler';
import {EdgeInsets} from 'react-native-safe-area-context';
import styled, {css} from 'styled-components/native';

import {icons} from '../../assets/images';
import {strings} from '../../config/strings';
import {EAppTabs} from '../../typescript/static/EAppScreens';
import {EStatus} from '../../typescript/static/EStatus';
import {defaultTheme} from '../../theme/default';
import translation from '../../assets/translations';

export const TabBar = ({state, navigation, insets}: BottomTabBarProps) => {
  const i18n = translation();

  const handlePress = useCallback(
    (route: any) => () => {
      const currentRoute = state.routes?.[state.index];
      if (route !== currentRoute?.name) {
        navigation.navigate(route.name);
      }
    },
    [navigation, state],
  );

  const renderTab = useCallback(
    (route: any, index: number) => {
      const status = index === state.index ? EStatus.Active : EStatus.Inactive;
      return (
        <BorderlessButton onPress={handlePress(route)} key={route.name}>
          <Wrapper>
            <Icon source={icons.bottomTab[route.name as EAppTabs][status]} />
            <Caption status={status}>
              {`${i18n.t(strings.bottomTab[route.name as EAppTabs])}`}
            </Caption>
          </Wrapper>
        </BorderlessButton>
      );
    },
    [handlePress, state.index, i18n],
  );

  return <Container insets={insets}>{state.routes.map(renderTab)}</Container>;
};

const Container = styled.View<{insets: EdgeInsets}>`
  flex-direction: row;
  justify-content: space-around;
  height: ${({insets}) => 60 + insets.bottom}px;
  background-color: ${defaultTheme.colors.background}
  }
`;

const Caption = styled.Text<{status: EStatus}>`
  font-size: ${defaultTheme.font.size.xxs}px;
  line-height: 11px;
  color: ${({status}) =>
    status === EStatus.Active
      ? defaultTheme.colors.text
      : defaultTheme.colors.placeholder};
  margin-top: ${defaultTheme.sizes.getSpacing(0.75)}px;
`;

const Wrapper = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 ${defaultTheme.sizes.appPadding}px;
`;

const Icon = styled.Image``;
