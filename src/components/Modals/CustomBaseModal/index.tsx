import React from 'react';
import {Modal} from 'react-native';
import {PropsModal} from './interfaces';

export function CustomBaseModal({
  children,
  isVisible,
  animationType = 'slide',
  presentationStyle = 'overFullScreen',
  statusTranslucent = false,
  ...rest
}: PropsModal) {
  return (
    <Modal
      visible={isVisible}
      animationType={animationType}
      transparent
      presentationStyle={presentationStyle}
      statusBarTranslucent={statusTranslucent}
      {...rest}>
      {children}
    </Modal>
  );
}
