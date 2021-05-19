import styled from 'styled-components/native';

import {TextProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const Container = styled.View`
  background: #fff;
  width: 100%;
  height: 54px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000;
  padding: 26px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonSelect = styled.TouchableOpacity`
  padding: 0 16px;
  height: 40px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface PropsText extends TextProps {
  placeholder: boolean;
}
export const TxtButtonSelect = styled.Text<PropsText>`
  font-size: 16px;

  color: ${(props) => (props.placeholder ? '#ccc' : '#000000')};
`;

export const CustomIcon = styled(Icon).attrs(() => ({
  color: '#cccccc',
}))``;
