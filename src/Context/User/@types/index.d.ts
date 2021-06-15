interface IUserInfo {
  uid: string;
  name: string | null;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | null;
  error: string;
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  getUserInfo: () => void;
}
