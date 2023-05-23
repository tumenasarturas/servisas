import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import CustomHeader from '../components/CustomHeader';
import AppLayout from '../components/AppLayout';
import {$enum} from 'ts-enum-util';
import {EAppLanguages} from '../typescript/static/EAppLanguages';
import {Text} from 'react-native-paper';
import translation from '../assets/translations';
import {strings} from '../config/strings';
import {RadioButton} from 'react-native-paper';
import {defaultTheme} from '../theme/default';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {generalSlice} from '../redux/general/generalSlice';

const ChooseLanguageScreen = () => {
  const selectedLanguage = useSelector(
    (state: RootState) => state.general.language,
  );
  const [checked, setChecked] = useState(selectedLanguage);
  const dispatch = useDispatch();

  const i18n = translation();

  const handleOnPress = useCallback(
    (language: EAppLanguages) => {
      dispatch(generalSlice.actions.setLanguage(language));
      setChecked(language);
    },
    [dispatch, setChecked],
  );

  const renderLanguage = useCallback(
    (language: EAppLanguages) => {
      return (
        <LanguageContainer onPress={() => handleOnPress(language)}>
          <Text>{`${i18n.t(strings.language[language])}`}</Text>
          <RadioButton
            value={
              selectedLanguage === language
                ? selectedLanguage
                : EAppLanguages.English
            }
            status={checked === language ? 'checked' : 'unchecked'}
          />
        </LanguageContainer>
      );
    },
    [i18n, strings, checked, setChecked],
  );

  return (
    <AppLayout>
      <Container>
        <CustomHeader />
        {$enum(EAppLanguages).map(renderLanguage)}
      </Container>
    </AppLayout>
  );
};

export default ChooseLanguageScreen;

const Container = styled.View``;

const LanguageContainer = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${defaultTheme.sizes.getSpacing(3)}px;
`;
