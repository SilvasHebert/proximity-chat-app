import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../contexts/AuthContext';
import {AuthStackProps} from '../../routes/auth.routes';
import {TextInput} from '../../styles/components/TextInput';
import {
  Container,
  Form,
  SignUpButton,
  TextSignUpButton,
  DoesHaveAccountButton,
  CreateAccountText,
  CreateAccountBoldText,
} from './styles';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation<AuthStackProps>();
  const {createAccount} = useAuth();

  return (
    <Container>
      <Form>
        <TextInput
          placeholder="E-mail"
          inputMode="email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirmar Senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <SignUpButton onPress={() => createAccount(email, password)}>
          <TextSignUpButton>Criar Conta</TextSignUpButton>
        </SignUpButton>

        <DoesHaveAccountButton onPress={() => navigation.navigate('SignIn')}>
          <CreateAccountText>
            Jà possui uma conta?{' '}
            <CreateAccountBoldText>Entrar</CreateAccountBoldText>
          </CreateAccountText>
        </DoesHaveAccountButton>
      </Form>
    </Container>
  );
}
