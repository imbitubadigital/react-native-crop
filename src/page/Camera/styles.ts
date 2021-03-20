import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image`
  width: 300px;
  height: 300px;
`;

export const Info = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const Footer = styled.View`
  height: 100px;
  background-color: #333;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const Btn = styled.TouchableOpacity`
  height: 72px;
  width: 72px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
`;
export const BtnTxt = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const BtnBack = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ViewFake = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
