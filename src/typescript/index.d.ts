import { NavigationProp } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { mainTheme } from '../theme';
import { TButtonTheme } from '../theme/default/buttonTheme';
import { TInputTheme } from '../theme/default/mainInputTheme';
import { EAppScreens } from './statics/EAppScreens';

type TDefaultTheme = typeof mainTheme.light & typeof mainTheme.dark;

export interface TThemeState {
  inverted?: boolean;
  disabled?: boolean;
  inactive?: boolean;
  hasError?: boolean;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends TDefaultTheme {
    // button?: TButtonTheme;
    // input?: TInputTheme;
  }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationScreensParamList {}
  }
}

type ScreenParamList = {
  /**
   * All app screen param types goes here. Params are undefined by default for all app screens.
   * example: [EAppScreens.Home]: { step: 0 };
   */
};

type NavigationScreensParamList = Override<{ [K in EAppScreens]: undefined }, ScreenParamList>;

export type ScreenProps<K extends keyof NavigationScreensParamList> = NativeStackScreenProps<
  NavigationScreensParamList,
  K
>;

export type Navigation = NavigationProp<NavigationScreensParamList>;

type ReducerActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type ReducerActions<P extends {}> = ReducerActionMap<P>[keyof ReducerActionMap<P>];

export type AtomicParamList = Record<string, any>;

export type Override<T, R> = Omit<T, keyof R> & R;

export type Position = 'right' | 'left';

export interface TBaseContextProps {
  children: React.ReactElement;
}
