export interface PropsModalFooter {
  txtCancel?: string;
  txtNext: string;
  actionCancel?(): void;
  actionNext(): void;
  disabled: boolean;
  load?: boolean;
}
