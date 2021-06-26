import React from 'react';

import * as S from './styles';

import {PropsCheckBox} from './interfaces';

export function RadioBox({
  onChange,
  value = 0,
  selected,
  title,
}: PropsCheckBox) {
  return (
    <S.Container onPress={() => onChange(value)}>
      <S.Box isChecked={selected === value}>
        <S.BoxCenter isChecked={selected === value} />
      </S.Box>
      <S.Txt>{title}</S.Txt>
    </S.Container>
  );
}
