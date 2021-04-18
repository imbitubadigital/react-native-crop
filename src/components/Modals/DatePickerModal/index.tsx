import React from 'react';
import {CustomBaseModal} from '../CustomBaseModal';
import {FooterModal} from '../FooterModal';
import DatePicker from 'react-native-date-picker';
import * as S from './styles';
import {PropsModal} from './interfaces';

export function DatePickerModal({
  show,
  closeModal,
  nextAction,
  cancelAction,
  txtNext,
  txtCancel,
  title,
  xClose = false,
  initialDate,
  changeDate,
}: PropsModal) {
  return (
    <CustomBaseModal isVisible={show}>
      <S.ContentModal>
        <S.BoxInfo>
          <S.Header>
            <S.ContentTitle>
              <S.Title testID="title-modal-id">{title}</S.Title>
            </S.ContentTitle>
            {closeModal && xClose && (
              <S.BtnClose
                testID="button-close-id"
                activeOpacity={0.7}
                onPress={closeModal}>
                <S.CustomIcon name="close" size={24} />
              </S.BtnClose>
            )}
          </S.Header>
          <DatePicker
            date={initialDate}
            onDateChange={changeDate}
            mode="date"
            maximumDate={new Date()}
          />
        </S.BoxInfo>
        {cancelAction ? (
          <FooterModal
            txtCancel={txtCancel}
            txtNext={txtNext}
            actionCancel={cancelAction}
            actionNext={nextAction}
            disabled={false}
          />
        ) : (
          nextAction && (
            <FooterModal
              txtNext={txtNext}
              actionNext={nextAction}
              disabled={false}
            />
          )
        )}
      </S.ContentModal>
    </CustomBaseModal>
  );
}
