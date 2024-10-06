"use client";
import { AuthLayout } from "@/components/layouts/auth";
import { otp, logo, forgotpass } from "@/Content/assets";
import { isMobile, isTablet } from "@/Utils/screenSize";
import { Image, Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function RetypePassword() {
  const [password, setPassword] = useState<any>();
  const [currpassword, setcurrPassword] = useState<any>();
  return (
    <AuthLayout src={forgotpass}>
      <div className="flex flex-col justify-center gap-[2rem] items-center">
        <Image src={logo} className="w-full" alt="p2care" />
        <h3 className="text-center">
          Please enter your phone number or email address here so we can send
          you a login link.
        </h3>
        <Input
          value={password}
          onValueChange={(e) => setPassword(e)}
          radius="none"
          type="password"
          className="bg-white outline-none border border-gray-200"
          placeholder="Enter new password"
        />
        <Input
          value={currpassword}
          onValueChange={(e) => setcurrPassword(e)}
          radius="none"
          type="password"
          className="bg-white outline-none border border-gray-200"
          placeholder="Re-Enter Enter your new password"
        />
        <Button color="primary" radius="none" className="w-full">
          Login
        </Button>
      </div>
    </AuthLayout>
  );
}
