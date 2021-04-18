import React from 'react';
import {useState} from 'react';
import {StatusBar} from 'react-native';

import * as S from './styles';
import {DatePicker} from '../../components/DatePicker';

//import {} from './interfaces';

export function PageForm() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <StatusBar
        backgroundColor="#318FBA"
        translucent
        barStyle="light-content"
      />
      <S.Container>
        <DatePicker
          initialDate={date}
          setInitialDate={setDate}
          placeholder="Data de nascimento"
        />
      </S.Container>
    </>
  );
}
