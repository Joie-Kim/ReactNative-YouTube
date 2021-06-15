import React, {createContext, useEffect, useState} from 'react';
import {authService} from '~/Lib/firebase';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: null,
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
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const signUp = async (email: string, password: string) => {
    console.log('sign up!');
    setIsLoading(false);
    try {
      await authService.createUserWithEmailAndPassword(email, password);
      setIsLoading(true);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  const logIn = async (email: string, password: string) => {
    console.log('log in!');
    setIsLoading(false);
    try {
      await authService.signInWithEmailAndPassword(email, password);
      setIsLoading(true);
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    }
  };
  const logOut = () => {
    console.log('log out!');
    authService.signOut();
  };
  const getUserInfo = () => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserInfo({
          uid: user.uid,
          name: user.displayName,
        });
        setIsLoading(true);
      } else {
        setUserInfo(null);
        setIsLoading(true);
      }
    });
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
