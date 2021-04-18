import {Dispatch, SetStateAction} from 'react';
import {ViewProps} from 'react-native';

export interface IDataPickerProps extends ViewProps {
  initialDate: Date;
  setInitialDate: Dispatch<SetStateAction<Date>>;
  placeholder: string;
  testID?: string;
}
