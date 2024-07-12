import React from 'react';
import { Image } from '@nextui-org/react';


interface AuthLayoutProps {
  children: React.ReactNode;
  src: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      {children}
    </div>
  );
}

export default AuthLayout;
