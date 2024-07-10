import React from 'react';
import { Image } from '@nextui-org/react';


interface AuthLayoutProps {
  children: React.ReactNode;
  src: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, src }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <Image src={src} alt="Authentication" className="h-1/4 w-full" />
      <div className="flex flex-col items-center gap-4 p-4 w-[60%]">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
