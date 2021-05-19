import {ReactNode} from 'react';
import {ModalProps} from 'react-native';
export interface PropsModal extends ModalProps {
  children: ReactNode;
  isVisible: boolean;
  animationType?: 'slide' | 'fade' | 'none';
  statusTranslucent?: boolean;
  presentationStyle?:
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'overFullScreen';
}
