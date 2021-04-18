import styled from 'styled-components/native';
import {TextProps, ViewProps} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface PropsText extends TextProps {
  isDisabled: boolean;
}
interface PropsContainer extends ViewProps {
  isLoad: boolean;
}
export const Container = styled.View<PropsContainer>`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
`;

export const BtnCancel = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 ${wp('5%')}px;
  height: ${hp('5.5%')}px;
  border-radius: 8px;
  border-width: 1px;
  border-color: red;
`;

export const TxtBtnCancel = styled.Text`
  /* font-size: {(props) => props.theme.typography.h6.size}px;
  line-height: {(props) => props.theme.typography.h6.size}px;
  font-family: {(props) => props.theme.fontMedium}; */
  color: red;
  text-align: center;
  letter-spacing: 1px;
`;

export const BtnNext = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 ${wp('5%')}px;
  height: ${hp('5.5%')}px;
  border-radius: 8px;
  border-width: 1px;
  border-color: green;
`;

export const TxtBtnNext = styled.Text<PropsText>`
  /* font-size: {(props) => props.theme.typography.h6.size}px;
  line-height: {(props) => props.theme.typography.h6.size}px;
  font-family: {(props) => props.theme.fontMedium}; */
  color: green;
  text-align: center;
  letter-spacing: 1px;
`;

export const BoxLoad = styled.View`
  margin-left: 15px;
`;

export const Load = styled.ActivityIndicator.attrs(() => ({
  color: 'green',
}))``;
