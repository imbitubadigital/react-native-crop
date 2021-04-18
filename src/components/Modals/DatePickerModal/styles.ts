import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ViewProps} from 'react-native';
interface PropsContainer extends ViewProps {
  dark?: boolean;
}
export const ContentModal = styled.View<PropsContainer>`
  background: #f4f4f4;

  margin: ${hp('30%')}px ${wp('4%')}px;
  padding: ${wp('5%')}px;
  border-radius: 10px;
  border-width: 1px;
  color: #f1f1f1;
`;

export const BoxInfo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContentTitle = styled.View`
  flex: 1;
`;

export const BtnClose = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  padding: 0 ${wp('1%')}px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const Title = styled.Text`
  /* font-size: {(props) => props.theme.typography.h6.size}px;
  line-height: {(props) => props.theme.typography.h6.size}px;
  font-family: {(props) => props.theme.fontBold}; */
  color: blue;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
`;

export const TxtInfo = styled.Text`
  /* font-size: {(props) => props.theme.typography.h6.size}px;
  line-height: {(props) => props.theme.typography.h6.size}px;
  font-family: {(props) => props.theme.fontRegular}; */
  color: blue;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;

export const CustomIcon = styled(Icon).attrs(() => ({
  color: 'blue',
}))``;
