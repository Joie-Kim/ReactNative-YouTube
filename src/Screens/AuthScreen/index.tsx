import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #141414;
    align-items: center;
    justify-content: center;
`;
const FormContainer = Styled.View`
    width: 100%;
    padding: 40px;
`;
const ErrorMessage = Styled.Text`
    width: 100%;
    margin-bottom: 16px;
    font-size: 12px;
    color: #E70915;
    text-align: center;
`;

type NavigationProp = StackNavigationProp<AuthNaviParmList, 'AuthScreen'>;

interface Props {
  navigation: NavigationProp;
}

const AuthScreen = () => {
  const {error, signUp, logIn} = useContext<IUserContext>(UserContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  //const [error, setError] = useState<string>('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <Container>
      <FormContainer>
        <Input
          style={{marginBottom: 16}}
          value={email}
          placeholder="email"
          onChangeText={onChangeEmail}
        />
        <Input
          style={{marginBottom: 16}}
          value={password}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <Button
          style={{marginBottom: 24, backgroundColor: '#E70915'}}
          label={isLogin ? 'Log in' : 'Sign up'}
          onPress={
            isLogin
              ? () => {
                  logIn(email, password);
                }
              : () => {
                  signUp(email, password);
                }
          }
        />
        <Button
          style={{marginBottom: 24, backgroundColor: '#333333'}}
          label={isLogin ? 'Sign up' : 'Log in'}
          onPress={() => {
            setIsLogin(prev => !prev);
            setEmail('');
            setPassword('');
          }}
        />
      </FormContainer>
    </Container>
  );
};

export default AuthScreen;
