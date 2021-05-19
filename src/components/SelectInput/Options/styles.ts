import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacityProps} from 'react-native';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
export const ContentModal = styled.View`
  flex: 1;
  padding: ${wp('8%')}px;
  align-items: center;
  justify-content: center;
  max-height: ${hp('100%')}px;
  background: rgba(0, 0, 0, 0.5);
`;

export const ContentOptions = styled.View`
  background: #fff;
  padding: ${wp('1%')}px;
  align-items: center;
  justify-content: center;
  max-height: ${hp('60%')}px;
  width: 100%;
  border-radius: 4px;
`;

export const CustomIcon = styled(Icon).attrs(() => ({
  color: '#cccccc',
}))``;

interface PropsOptions extends TouchableOpacityProps {
  isSelected?: boolean;
}

export const OptionItem = styled.TouchableOpacity<PropsOptions>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 3px;
  background: ${(props) => (props.isSelected ? '#f4f4f4' : '#ffffff')};
  width: 100%;
  padding: ${wp('2%')}px;
`;

export const TxtItem = styled.Text`
  font-size: 16px;
  color: #000;
  flex: 1;
`;
