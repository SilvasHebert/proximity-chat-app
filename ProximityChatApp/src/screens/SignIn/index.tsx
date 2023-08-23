import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../contexts/AuthContext';
import {AuthStackProps} from '../../routes/auth.routes';
import {TextInput} from '../../styles/components/TextInput';
import {
  Container,
  Form,
  SignInButton,
  TextSignInButton,
  DoesntHaveAccountButton,
  CreateAccountText,
  CreateAccountTextBold,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<AuthStackProps>();
  const {signIn} = useAuth();

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
        <SignInButton onPress={() => signIn(email, password)}>
          <TextSignInButton>Entrar</TextSignInButton>
        </SignInButton>

        <DoesntHaveAccountButton onPress={() => navigation.navigate('SignUp')}>
          <CreateAccountText>
            Nâo possui conta?{' '}
            <CreateAccountTextBold>Criar uma</CreateAccountTextBold>
          </CreateAccountText>
        </DoesntHaveAccountButton>
      </Form>
    </Container>
  );
}
