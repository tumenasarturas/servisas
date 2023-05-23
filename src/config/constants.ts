import { Dimensions } from "react-native";

export  const PLACES_ENDPOINT =
'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

export const PLACES_RADIUS = '5000';
export const SEARCH_TYPE = 'car_repair';

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width