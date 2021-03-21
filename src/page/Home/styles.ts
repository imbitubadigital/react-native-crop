import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const Footer = styled.View`
  height: 100px;
  background-color: #333;

  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const Btn = styled.TouchableOpacity`
  height: 72px;
  width: 72px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
`;

export const Link = styled.TouchableOpacity`
  height: 40px;
  width: 170px;
  background: purple;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
`;

export const BtnLink = styled.Text`
  font-size: 16px;
  color: #fff;
`;
