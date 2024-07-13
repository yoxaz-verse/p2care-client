import React from 'react';
import { Image } from '@nextui-org/react';


interface AuthLayoutProps {
  children: React.ReactNode;
  src: string;
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      {children}
    </div>
  );
}


