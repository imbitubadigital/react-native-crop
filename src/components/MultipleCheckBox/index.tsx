import React from 'react';

import * as S from './styles';

import {PropsCheckBox} from './interfaces';

export function MultipleCheckBox({onChange, item, values = []}: PropsCheckBox) {
  function CustomChange() {
    let data: number[] = [];
    if (values.length < 1) {
      data = [...values, item.id];
    } else {
      if (values.filter((i) => i === item.id).length > 0) {
        data = values.filter((i) => i !== item.id);
      } else {
        data = [...values, item.id];
      }
    }
    onChange(data);
  }
  return (
    <S.Container onPress={CustomChange}>
      <S.Box isChecked={values.includes(item.id)}>
        <S.BoxCenter isChecked={values.includes(item.id)} />
      </S.Box>
      <S.Txt>{item.name}</S.Txt>
    </S.Container>
  );
}
