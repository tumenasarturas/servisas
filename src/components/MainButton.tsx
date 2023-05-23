import React from 'react';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';

interface IProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  inverted?: boolean;
}

const MainButton = ({label, onPress, disabled, inverted}: IProps) => {
  return (
    <ButtonContainer onPress={onPress} disabled={disabled} inverted={inverted}>
      {disabled ? (
        <Indicator size={16} color={defaultTheme.colors.primary} />
      ) : (
        <ButtonText inverted={inverted}>{label}</ButtonText>
      )}
    </ButtonContainer>
  );
};

export default MainButton;

const ButtonContainer = styled.TouchableOpacity<{
  disabled?: boolean;
  inverted?: boolean;
}>`
    width: 100%
    height: ${defaultTheme.sizes.button}px;
    border: 1px solid ${defaultTheme.colors.primary}
    border-radius: ${defaultTheme.roundness.button}px;
    align-items: center;
    background-color: ${({disabled, inverted}) => {
      if (disabled) {
        return defaultTheme.colors.disabled;
      } else if (inverted) {
        return defaultTheme.colors.inverted;
      } else {
        return defaultTheme.colors.primary;
      }
    }};
    flex-direction: row;
    justify-content: center;
`;

const Indicator = styled.ActivityIndicator``;

const ButtonText = styled.Text<{inverted?: boolean}>`
  font-size: 18px;
  color: ${({inverted}) =>
    inverted ? defaultTheme.colors.primary : defaultTheme.colors.background};
`;
