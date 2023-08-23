import {TextInput as TextInputReact} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 100%;
  gap: 20px;
  padding: 10px;
`;

export const SignInButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 50px;
  border-radius: 20px;
`;

export const TextSignInButton = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: white;
`;

export const DoesntHaveAccountButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const CreateAccountText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
`;

export const CreateAccountTextBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
