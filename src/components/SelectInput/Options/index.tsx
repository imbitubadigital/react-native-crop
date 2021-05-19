import React from 'react';
import {CustomBaseModal} from '../../Modals/CustomBaseModal';

import * as S from './styles';
import {IInfoLoginModalProps} from './interfaces';

export function Options({
  show,
  data,
  onChange,
  selectedItem,
}: IInfoLoginModalProps) {
  return (
    <CustomBaseModal isVisible={show} statusTranslucent>
      <S.ContentModal testID="content-options-id">
        <S.ContentOptions>
          <S.Scroll>
            {data.map((item) => (
              <S.OptionItem
                testID="button-options-id"
                key={item.value}
                onPress={() => onChange(item)}
                activeOpacity={0.7}
                isSelected={selectedItem === item.label}>
                <S.TxtItem testID="label-options-id">{item.label}</S.TxtItem>
              </S.OptionItem>
            ))}
          </S.Scroll>
        </S.ContentOptions>
      </S.ContentModal>
    </CustomBaseModal>
  );
}
