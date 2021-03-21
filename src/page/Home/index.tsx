import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Tour from '../../components/Tour';
import {MessagesTour} from '../../utils/messagesTour';

import {useTour} from '../../hooks/Tour';

export default function Home() {
  const {setCurrentTour} = useTour();
  const navigation = useNavigation();

  function initTour() {
    setCurrentTour(1);
  }

  function next(currentOrdem: number) {
    setCurrentTour(currentOrdem + 1);
    if (currentOrdem === 4) {
      navigation.navigate('Camera');
    }
  }
  function prev(currentOrdem: number) {
    setCurrentTour(currentOrdem - 1);
  }
  return (
    <S.Container>
      <S.Footer>
        <S.Btn>
          <Icon name="baby-changing-station" size={40} color="red" />
        </S.Btn>

        <S.Btn>
          <Icon name="anchor" size={40} color="red" />
        </S.Btn>

        <Tour
          order={2}
          position="bottom"
          next={next}
          prev={prev}
          title={MessagesTour[2]}>
          <S.Btn>
            <Icon name="alarm" size={40} color="red" />
          </S.Btn>
        </Tour>
      </S.Footer>

      <S.Content>
        <Tour
          order={3}
          position="bottom"
          next={next}
          prev={prev}
          title={MessagesTour[3]}>
          <S.Info>aaa</S.Info>
        </Tour>
      </S.Content>
      <S.Footer>
        <Tour
          order={1}
          position="top"
          next={next}
          prev={prev}
          title={MessagesTour[1]}>
          <S.Btn onPress={initTour}>
            <Icon name="mail" size={40} color="red" />
          </S.Btn>
        </Tour>

        <S.Btn>
          <Icon name="add-task" size={40} color="red" />
        </S.Btn>

        <Tour
          order={4}
          position="top"
          next={next}
          prev={prev}
          title={MessagesTour[4]}>
          <S.Btn onPress={() => navigation.navigate('Camera')}>
            <Icon name="camera-alt" size={40} color="red" />
          </S.Btn>
        </Tour>
      </S.Footer>
    </S.Container>
  );
}
