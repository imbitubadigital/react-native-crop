import React from 'react';
import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <S.Container>
        <S.Info>Pagina home</S.Info>
        <S.Link onPress={() => navigation.navigate('Camera')}>
          <S.BtnLink>Câmera</S.BtnLink>
        </S.Link>
      </S.Container>
    </>
  );
};

export default Home;
