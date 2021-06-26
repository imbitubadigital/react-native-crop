import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 40px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

interface PropsCheck {
  isChecked: boolean;
}

export const Box = styled.View<PropsCheck>`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border-width: 2px;
  border-color: #008000;
  margin-right: 5px;
  background: ${(props) => (props.isChecked ? '#FFF' : '#fff')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BoxCenter = styled.View<PropsCheck>`
  height: 16px;
  width: 16px;
  border-radius: 8px;

  background: ${(props) => (props.isChecked ? 'green' : '#fff')};
`;

export const Txt = styled.Text``;
