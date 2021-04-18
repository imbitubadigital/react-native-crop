export interface PropsModal {
  show: boolean;
  closeModal?: () => void;
  nextAction(): void;
  cancelAction?: () => void;
  txtNext: string;
  txtCancel?: string;
  title: string;
  xClose?: boolean;
  initialDate: Date;
  changeDate: (date: Date) => void;
}
