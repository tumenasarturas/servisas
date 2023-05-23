import React from 'react';
import translation from '../assets/translations';
import styled from 'styled-components/native';
import {defaultTheme} from '../theme/default';

interface IProps {
  children: string;
}

const ListHeaderTitle = ({children}: IProps) => {
  const i18n = translation();

  return <ListHeader>{`${i18n.t(children)}`}</ListHeader>;
};

export default ListHeaderTitle;

const ListHeader = styled.Text`
  margin-top: ${defaultTheme.sizes.getSpacing(7)}px;
  margin-bottom: ${defaultTheme.sizes.getSpacing(3)}px;
  font-size: ${defaultTheme.font.size.lg}px;
  font-weight: 700;
`;
