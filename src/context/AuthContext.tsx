import { createContext, useState } from "react";

import { loginUser } from "../api/index.api";
import type {
  AuthContextProps,
  UserReqProps,
  UserResProps,
} from "../types/auth";

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserResProps | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null,
  );

  const login = async (cred: UserReqProps) => {
    const data = await loginUser(cred);
    console.log("data: ", data);
    setUser(data.user);
    setToken(data.accessToken);

    // store in sessionStorage (better than localStorage)
    localStorage.setItem("token", data.accessToken);
    location.replace("/home");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
