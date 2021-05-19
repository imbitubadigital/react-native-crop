import React from 'react';

import * as S from './styles';

import {PropsCheckBox} from './interfaces';

export function CheckBox({onChange, value = false}: PropsCheckBox) {
  return (
    <S.Container onPress={() => onChange(!value)}>
      <S.Box isChecked={value} />
      <S.Txt>Aceita os termos?</S.Txt>
    </S.Container>
  );
}
