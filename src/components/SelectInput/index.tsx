import React, {useCallback, useState} from 'react';

import * as S from './styles';

import {ISelectProps, IItem} from './interfaces';
import {Options} from './Options';

export function SelectInput({
  data,
  placeholder,
  onValueChange,
  selectedValue,
  testID,
}: ISelectProps) {
  const [open, setOpen] = useState(false);
  const [labelValue, setLabelValue] = useState(() => {
    const itemSelected = data.find((item) => item.value === selectedValue);
    if (itemSelected) {
      return itemSelected.label;
    } else {
      return '';
    }
  });

  const handleSettingValue = useCallback(
    (item: IItem) => {
      setOpen(false);
      onValueChange(item.value);
      setLabelValue(item.label);
    },
    [onValueChange],
  );

  return (
    <>
      <S.Container>
        <S.ButtonSelect
          activeOpacity={0.7}
          onPress={() => setOpen(true)}
          testID={testID}>
          <S.TxtButtonSelect placeholder={labelValue === ''} testID="label-id">
            {labelValue !== '' ? labelValue : placeholder}
          </S.TxtButtonSelect>
          <S.CustomIcon name="chevron-down" size={26} />
        </S.ButtonSelect>
      </S.Container>
      <Options
        show={open}
        onChange={handleSettingValue}
        data={data}
        selectedItem={labelValue}
      />
    </>
  );
}
