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

export const Txt = styled.Text``;
