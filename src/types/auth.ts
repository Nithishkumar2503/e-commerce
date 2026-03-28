export interface UserReqProps {
  username: string;
  password: string;
  expiresInMins: number;
}

export interface UserResProps {
  accessToken: string;
  refreshToken: string;
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface AuthContextProps {
  user: UserResProps | null;
  token: string | null;
  login: (cred: UserReqProps) => Promise<void>;
  logout: () => void;
}
