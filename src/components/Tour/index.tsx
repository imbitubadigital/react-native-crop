import React, {ReactNode, useEffect, useState} from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useTour} from '../../hooks/Tour';
import * as Animatable from 'react-native-animatable';
import * as S from './styles';

const ContentBox = Animatable.createAnimatableComponent(S.Box);

interface TourProps {
  children: ReactNode;
  order: number;
  title: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  next: (currentOrder: number) => void;
  prev: (currentOrder: number) => void;
}

export default function Tour({
  children,
  order,
  position,
  title,
  next,
  prev,
}: TourProps) {
  const [isVisible, setIsVisible] = useState(true);
  const {currentTour, setCurrentTour} = useTour();

  useEffect(() => {
    console.log('aaa', {order, currentTour});
    setIsVisible(order === currentTour);
  }, [currentTour, order]);
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
            <S.Info>{title}</S.Info>
            <S.Actions>
              <S.Btn onPress={() => setCurrentTour(0)}>
                <S.BtnTxt>Fechar</S.BtnTxt>
              </S.Btn>
              <S.Btn onPress={() => prev(order)}>
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
