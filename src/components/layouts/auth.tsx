import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  src: string;
}

export function AuthLayout({ children, src }: AuthLayoutProps) {
  return (
    <>
      <div className="flex flex-col items-center h-[100vh] gap-[1rem] md:h-[60vh] md:flex-row justify-center">
        <Image src={src} alt="image" width={1000} height={1000} className="w-3/4 md:w-1/2 h-3/4" />
        {children}
      </div>
    </>
  )
}
