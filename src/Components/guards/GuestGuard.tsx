import React , { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



// ----------------------------------------------------------------------

type GuestGuardProps = {
    children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('apiToken') !== null) {
      navigate('/chat')
    }
  }, [])
  

  return <>{children}</>;
}
