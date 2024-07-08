import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Navigation/Navbar";
import { Spacer } from "@nextui-org/react";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P2Care",
  description: "Your Healthcare partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="custom text-foreground bg-background">
          <Providers>
            <Header />
            <Spacer y={5} />
            <div className="max-w-[90vw] md:max-w-[95vw] 2xl:max-w-[1440px] mx-auto">
              {children}
            </div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
