export interface IUser {
    username?: string;
    email: string;
    firstName: string;
    surname: string;
    publicAddress: string;
    steamId: string;
    balance?: number;
    verified?: boolean;
}

export interface IUserContext  {
  user: IUser | null;
  setLoggedIn(user: IUser): void;
  setLoggedOut: () => void;
}