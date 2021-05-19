export interface IItem {
  value: string;
  label: string;
}
export interface ISelectProps {
  data: IItem[];
  placeholder: string;
  onValueChange: (value: string) => void;
  selectedValue: string;
  testID?: string;
}
