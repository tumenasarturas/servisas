import React, {useRef, useState} from 'react';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';

interface IProps {
  placeholder?: string;
  onBlur?: () => void;
  value?: string;
  onChangeText: () => void;
  secureText?: boolean;
}

const MainInput = ({placeholder, onChangeText, value, secureText}: IProps) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <InputWrapper focused={isFocused}>
      <TextField
        placeholder={placeholder}
        ref={inputRef}
        onChangeText={onChangeText}
        value={value}
        onBlur={handleFocus}
        onFocus={handleFocus}
        secureTextEntry={secureText}
        autoCapitalize="none"
        placeholderTextColor={defaultTheme.colors.placeholder}
      />
    </InputWrapper>
  );
};

export default MainInput;

const TextField = styled.TextInput`
  height: ${defaultTheme.sizes.input}px;
  background-color: ${defaultTheme.colors.background};
  padding: ${defaultTheme.sizes.getSpacing(2)}px;
  font-size: ${defaultTheme.font.size.md}px;
  width: 100%;
  color: ${defaultTheme.colors.text};
  border-radius: ${defaultTheme.roundness.regular}px;
`;

const InputWrapper = styled.View<{focused?: boolean}>`
  border: 1px solid
    ${({focused}) =>
      focused ? defaultTheme.colors.primary : defaultTheme.colors.disabled};
  border-radius: ${defaultTheme.roundness.regular}px;
  margin-top: 20px;
`;
