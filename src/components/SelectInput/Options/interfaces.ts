interface IItem {
  value: string;
  label: string;
}
export interface IInfoLoginModalProps {
  show: boolean;
  data: IItem[];
  onChange: (item: IItem) => void;
  selectedItem: string;
}
