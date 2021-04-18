import React from 'react';
import {StatusBar} from 'react-native';

import * as S from './styles';

//import {} from './interfaces';

export function DatePiker() {
  return (
    <>
      <StatusBar
        backgroundColor="#318FBA"
        translucent
        barStyle="light-content"
      />
      <S.Container>
        <S.Txt>{StatusBar.currentHeight}</S.Txt>
      </S.Container>
    </>
  );
}
