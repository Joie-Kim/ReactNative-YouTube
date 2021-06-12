import React, {createContext, useEffect, useState} from 'react';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  signUp: (email: string, password: string) => {},
  logIn: (email: string, password: string) => {},
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

  const signUp = (email: string, password: string) => {
    console.log('sign up!');
  };
  const logIn = (email: string, password: string) => {
    console.log('log in!');
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
      value={{isLoading, userInfo, signUp, logIn, logOut, getUserInfo}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};
