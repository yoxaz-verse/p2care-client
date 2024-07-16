import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  src: string;
}

export function AuthLayout({ children, src }: AuthLayoutProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full items-center justify-center h-[100vh]">
        <Image src={src} alt="image" width={1000} height={1000} className="w-full md:w-1/2 h-full md:h-1/2" />
        {children}
      </div>
    </>
  )
}
