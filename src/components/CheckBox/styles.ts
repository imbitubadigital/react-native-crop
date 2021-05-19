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
  height: 40px;
  width: 40px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #008000;
  margin-right: 5px;
  background: ${(props) => (props.isChecked ? '#008000' : '#fff')};
`;

export const Txt = styled.Text``;
