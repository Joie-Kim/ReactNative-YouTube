interface IUserInfo {
  email: string;
  name: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  getUserInfo: () => void;
}
