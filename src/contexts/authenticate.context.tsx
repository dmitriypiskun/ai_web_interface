import { createContext, useContext, useState } from "react";
import { AuthorizationService } from "../services/authorization.service";
import { useGoogleLogin } from "@react-oauth/google";

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role?: string | null;
  createdAt: string;
}

export interface AuthenticateContextProps {
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  googleLogin: () => void;
}

export const AuthenticateContext =
  createContext<AuthenticateContextProps | null>(null);

export const AuthenticateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (response) => {
      console.log(response);
    },
    onError: (error) => {
      alert(error.error_description);
    },
  });

  const login = async (data: LoginData) => {
    try {
      if (data.email && data.password) {
        const result = await AuthorizationService.login(data);
        setUser(result);
      }
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <AuthenticateContext.Provider value={{ user, login, googleLogin }}>
      {children}
    </AuthenticateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthenticateContext = () =>
  useContext(AuthenticateContext) as AuthenticateContextProps;
