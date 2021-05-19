import styled from 'styled-components/native';
import {StatusBar, Platform} from 'react-native';
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  background: #ffff;
  padding: 20px;
`;

export const Input = styled.TextInput`
  background: #fff;
  height: 40px;
  border-width: 2px;
  border-color: #000;
  width: 100%;
  border-radius: 6px;
`;
export const Divider = styled.View`
  height: 20px;
  width: 100%;
`;

export const Txt = styled.Text``;

export const Btn = styled.TouchableOpacity`
  background: green;
  height: 40px;
  border-width: 2px;
  border-color: #000;
  width: 100%;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnTxt = styled.Text`
  color: #fff;
  font-size: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  text-align: center;
`;

export const TxtError = styled.Text`
  color: red;
  font-size: 16px;
`;
