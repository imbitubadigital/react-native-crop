import {TextProps} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  border-color: blue;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoxCalendar = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

interface PropsTxtCalendar extends TextProps {
  empty?: boolean;
}

export const TxtCalendar = styled.Text<PropsTxtCalendar>`
  /* font-family: {props => props.theme.fontRegular};
  font-size: {props => props.theme.typography.body1.size}px;
  line-height: {props => props.theme.typography.body1.size}px; */
  color: #666;

  /* color: {props =>
    props.empty
      ? props.theme.colors.inputText
      : props.theme.colors.inputPlaceholder}; */
  width: 100%;
`;
