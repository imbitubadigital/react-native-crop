import React, {useCallback, useState} from 'react';
import pt, {format} from 'date-fns';
import * as S from './styles';
import {DatePickerModal} from '../Modals/DatePickerModal';

import {IDataPickerProps} from './interfaces';

export function DatePicker({
  initialDate,
  setInitialDate,
  placeholder,
  testID,
}: IDataPickerProps) {
  const formatData = useCallback((date) => {
    const formatted = format(date, 'dd/MM/yyyy', {
      locale: pt,
    });
    return formatted;
  }, []);

  const [dateBirthFormatted, setDateBirthFormatted] = useState<
    Date | null | string
  >(() => {
    const value =
      format(initialDate, 'dd/MM/yyyy') === format(new Date(), 'dd/MM/yyyy')
        ? placeholder
        : formatData(initialDate);
    return value;
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const showDataPikerCalendar = useCallback((): void => {
    setShowCalendar(true);
  }, []);
  const closeDataPikerCalendar = useCallback((): void => {
    setShowCalendar(false);
  }, []);

  const handleChangeDateBirth = useCallback(
    (selectedDate): void => {
      setInitialDate(selectedDate);
      setDateBirthFormatted(formatData(selectedDate));
    },
    [formatData, setInitialDate],
  );

  return (
    <>
      <S.Container>
        <S.BoxCalendar
          testID={testID}
          activeOpacity={0.7}
          onPress={showDataPikerCalendar}>
          <S.TxtCalendar
            testID="text-picker-id"
            empty={dateBirthFormatted !== placeholder}>
            {dateBirthFormatted}
          </S.TxtCalendar>
        </S.BoxCalendar>
      </S.Container>
      <DatePickerModal
        show={showCalendar}
        closeModal={closeDataPikerCalendar}
        nextAction={closeDataPikerCalendar}
        txtNext="Concluír"
        title="Calendário"
        initialDate={initialDate}
        changeDate={handleChangeDateBirth}
      />
    </>
  );
}
