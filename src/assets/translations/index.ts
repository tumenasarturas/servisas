import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {$enum} from 'ts-enum-util';
import {EAppLanguages} from '../../typescript/static/EAppLanguages';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const translation = () => {
  const resources = {
    [EAppLanguages.English]: {translation: require('./en.json')},
    [EAppLanguages.Lithuanian]: {translation: require('./lt.json')},
  };

  const supportedLngs = $enum(EAppLanguages).getValues();

  const selectedLanguage = useSelector(
    (state: RootState) => state.general.language,
  );

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: EAppLanguages.English,
    debug: true,
    supportedLngs,
    react: {
      useSuspense: false,
    },
    lng: selectedLanguage,
  });

  return i18n;
};

export default translation;
