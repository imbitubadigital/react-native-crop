import React, {ReactNode, useEffect, useState} from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import * as Animatable from 'react-native-animatable';
import * as S from './styles';

const ContentBox = Animatable.createAnimatableComponent(S.Box);

interface TourProps {
  children: ReactNode;
  order: number;
  current: number;
  position: 'top' | 'bottom' | 'left' | 'right';
  next: (currentOrder: number) => void;
  // prev: () => void;
}

export default function Tour({
  children,
  order,
  current,
  position,
  next,
}: TourProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(order === current);
  }, [current, order]);
  return (
    <S.Container>
      <Tooltip
        isVisible={isVisible}
        allowChildInteraction={false}
        content={
          <ContentBox
            animation="zoomIn"
            easing="ease-in-out"
            iterationCount={1}
            duration={1200}
            useNativeDriver={true}>
            <S.Info>Aqui um texto mais informativo {current}</S.Info>
            <S.Actions>
              <S.Btn onPress={() => setIsVisible(false)}>
                <S.BtnTxt>Fechar</S.BtnTxt>
              </S.Btn>
              <S.Btn>
                <S.BtnTxt>Ant.</S.BtnTxt>
              </S.Btn>
              <S.Btn onPress={() => next(order)}>
                <S.BtnTxt>Prox.</S.BtnTxt>
              </S.Btn>
            </S.Actions>
          </ContentBox>
        }
        onClose={() => console.log('aa')}
        placement={position}>
        {children}
      </Tooltip>
    </S.Container>
  );
}
