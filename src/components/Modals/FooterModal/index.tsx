import React from 'react';
import * as S from './styles';
import {PropsModalFooter} from './interfaces';

export function FooterModal({
  txtCancel,
  txtNext,
  actionCancel,
  actionNext,
  disabled,
  load = false,
}: PropsModalFooter) {
  return (
    <S.Container isLoad={load}>
      {!!txtCancel && !load && (
        <S.BtnCancel
          testID="button-cancel-id"
          onPress={actionCancel}
          activeOpacity={0.7}>
          <S.TxtBtnCancel testID="txt-cancel-id">{txtCancel}</S.TxtBtnCancel>
        </S.BtnCancel>
      )}
      <S.BtnNext
        testID="button-next-id"
        onPress={actionNext}
        activeOpacity={0.7}
        disabled={disabled}>
        <S.TxtBtnNext testID="txt-next-id" isDisabled={disabled}>
          {!load ? txtNext : 'Salvando...'}
        </S.TxtBtnNext>
        {load && (
          <S.BoxLoad>
            <S.Load testID="loader-id" size="small" />
          </S.BoxLoad>
        )}
      </S.BtnNext>
    </S.Container>
  );
}
