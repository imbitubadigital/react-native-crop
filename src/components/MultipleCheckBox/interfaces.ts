export interface PropsCheckBox {
  onChange: (value: number[]) => void;
  item: {
    name: string;
    id: number;
  };

  values: number[];
}
