import { EAdditionalServices } from '../../typescript/static/EAdditionalServices';
import {EAppLanguages} from '../../typescript/static/EAppLanguages';
import {EAppTabs} from '../../typescript/static/EAppScreens';
import {EStatus} from '../../typescript/static/EStatus';

export const icons = {
  logo: require('../images/logo/Logo.png'),
  languages: {
    [EAppLanguages.English]: require('../images/languages/en.png'),
    [EAppLanguages.Lithuanian]: require('../images/languages/lt.png'),
  },
  arrows: {
    back: require('../images/arrows/back.png'),
  },
  bottomTab: {
    [EAppTabs.Home]: {
      [EStatus.Inactive]: require('./bottomTab/home.png'),
      [EStatus.Active]: require('./bottomTab/home_active.png'),
    },
    [EAppTabs.Favorites]: {
      [EStatus.Inactive]: require('./bottomTab/favorites.png'),
      [EStatus.Active]: require('./bottomTab/favorites_active.png'),
    },
    [EAppTabs.Profile]: {
      [EStatus.Inactive]: require('./bottomTab/profile.png'),
      [EStatus.Active]: require('./bottomTab/profile_active.png'),
    },
  },
  location: {
    locationMarker: require('../images/location/location.png')
  },
  services: {
    [EAdditionalServices.VechileInspection]: require('../images/services/vechileInspection.png'),
    [EAdditionalServices.CarWash]: require('../images/services/carWash.png'),
    [EAdditionalServices.OffRoadAssistance]: require('../images/services/offRoad.png'),
    [EAdditionalServices.CarParts]: require('../images/services/carParts.png'),
    [EAdditionalServices.Insurance]: require('../images/services/insurance.png'),
    [EAdditionalServices.CarRent]: require('../images/services/rentCar.png')
  },
  star: require('../images/star/star.png'),
  road: require('../images/road/distance.png')
};
