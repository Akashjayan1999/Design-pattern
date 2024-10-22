"use client";
import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AuthService from '@/services/auth-service';

export interface AuthContextType {
  isAuthenticated: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

 const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const authService = AuthService.getInstance();

  useEffect(() => {
    const token = authService.getToken();
    setIsAuthenticated(!!token);
  }, []);

  const loginWithEmail = async (email: string, password: string) => {
    await authService.loginWithEmail(email, password);
    setIsAuthenticated(!!authService.getToken());
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthData() {
  return useContext(AuthContext);
}
export { AuthContext,AuthProvider };
