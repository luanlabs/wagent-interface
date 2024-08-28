import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import Pages from '@/constants/pages';
import validateTokenRequest from './validateTokenRequest';

type ProviderProps = { children: React.ReactNode };
export const AuthProvider = ({ children }: ProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
      validateTokenRequest(token);
    }
  }, []);

  if (!isAuthenticated) {
    return redirect(Pages.SIGNIN);
  }

  return children;
};
