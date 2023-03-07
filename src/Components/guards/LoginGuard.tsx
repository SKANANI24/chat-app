import React , { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

type LoginGuardProps = {
    children: ReactNode;
};

export default function LoginGuard({ children }: LoginGuardProps) {
  const navigate = useNavigate();

  useEffect(() => {
      if (localStorage.getItem('apiToken') !== null) {
        navigate('/')
      }
  }, [])
  

  return <>{children}</>;
}
