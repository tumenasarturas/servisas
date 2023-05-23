import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

/**
 * Default sizes which are used in the app.
 */
const sizes = {
  windowWidth: width,
  windowHeight: height,
  spacing: 6,
  loader: 30,
  button: 44,
  header: 55,
  input: 44,
  tabBar: 80,
  listItemImage: 44,
  customHeader: 75,
  offerImage: 375,
};

export const defaultTheme = {
  /**
   * Default colours for the app
   */
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    primary: '#50BFA5',
    disabled: '#EAEAEA',
    inverted: '#F1FCFD',
    error: '#FF0000',
    placeholder: '#8F8F8F',
  },
  font: {
    /**
     * Font sizes for the app.
     * All common font sizes are described
     */
    size: {
      h1: 34 as 34,
      h2: 32 as 32,
      h3: 28 as 28,
      h4: 26 as 26,
      h5: 24 as 24,
      xl: 22 as 22,
      lg: 20 as 20,
      md: 18 as 18,
      rg: 16 as 16,
      sm: 14 as 14,
      xs: 12 as 12,
      xxs: 10 as 10,
      custom: (size: number) => size,
    },
    /**
     * Fonts for the app.
     * By example: @param regular: 'Poppins-Regular'
     */
    weight: {
      // thin: '' as '300',
      // regular: '' as '400',
      medium: 'Roobert-Medium' as '500',
      semiBold: 'Roobert-Bold' as '600',
      bold: 'Roobert-Bold' as '700',
    },
  },
  /**
   * Common sizes for the app.
   * By example: @param header: 50
   */
  sizes: {
    ...sizes,
    getSpacing: (multiplier: number) => multiplier * sizes.spacing,
    appPadding: 4 * sizes.spacing,
  },

  /**
   * Roundness sizes for the app.
   * By example: @param button: 20
   */
  roundness: {
    regular: 10,
    button: 15,
    tabBarButton: 8.5,
  },
};
