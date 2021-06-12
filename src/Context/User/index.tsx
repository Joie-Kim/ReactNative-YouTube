import React, {createContext, useEffect, useState} from 'react';
import {authService} from '~/Lib/firebase';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  error: '',
  signUp: (_email: string, _password: string) => {},
  logIn: (_email: string, _password: string) => {},
  logOut: () => {},
  getUserInfo: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setItLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const signUp = async (email: string, password: string) => {
    console.log('sign up!');
    try {
      await authService.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  const logIn = async (email: string, password: string) => {
    console.log('log in!');
    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    }
  };
  const logOut = () => {};
  const getUserInfo = () => {
    setItLoading(true);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{isLoading, userInfo, error, signUp, logIn, logOut, getUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
