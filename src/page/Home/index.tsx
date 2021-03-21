import React, {useState} from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Tour from '../../components/Tour';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigation = useNavigation();

  function initTour() {
    setCurrent(1);
  }

  function next(currentOrdem: number) {
    if (currentOrdem === 4) {
      navigation.navigate('Camera');
    }
    setCurrent(currentOrdem + 1);
  }
  return (
    <S.Container>
      <S.Footer>
        <S.Btn>
          <Icon name="mail" size={40} color="red" />
        </S.Btn>

        <S.Btn>
          <Icon name="add-task" size={40} color="red" />
        </S.Btn>

        <Tour current={current} order={2} position="bottom" next={next}>
          <S.Btn>
            <Icon name="add-ic-call" size={40} color="red" />
          </S.Btn>
        </Tour>
      </S.Footer>

      <S.Content>
        <Tour current={current} order={3} position="bottom" next={next}>
          <S.Info>aaa</S.Info>
        </Tour>
      </S.Content>
      <S.Footer>
        <Tour current={current} order={1} position="top" next={next}>
          <S.Btn onPress={initTour}>
            <Icon name="mail" size={40} color="red" />
          </S.Btn>
        </Tour>

        <S.Btn>
          <Icon name="add-task" size={40} color="red" />
        </S.Btn>

        <Tour current={current} order={4} position="top" next={next}>
          <S.Btn>
            <Icon name="add-ic-call" size={40} color="red" />
          </S.Btn>
        </Tour>
      </S.Footer>
    </S.Container>
  );
}
