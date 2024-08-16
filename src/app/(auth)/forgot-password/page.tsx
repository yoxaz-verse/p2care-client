"use client";
import { AuthLayout } from "@/components/layouts/auth";
import { otp, logo, forgotpass } from "@/Content/assets";
import { isMobile, isTablet } from "@/Utils/screenSize";
import { Image, Button, Input } from "@nextui-org/react";
import { useState } from "react";


export default function ForgotPass() {
  const width = isMobile() ? "20px" : (isTablet() ? "40px" : "60px");
  const height = isMobile() ? "20px" : (isTablet() ? "40px" : "60px");
  const [email, setEmail] = useState<any>();
  return (
    <AuthLayout src={forgotpass}>
      <div className="flex flex-col justify-center gap-[2rem] items-center">
        <Image src={logo} />
        <h3 className="text-center">Please enter your phone number or email address here so we can send you a login link.</h3>
        <Input value={email} onValueChange={(e) => setEmail(e)} radius="none" className="bg-inherit outline-none border border-gray-200" placeholder="Enter Phone no or Email" />
        <Button color="primary" radius="none" className="w-full" >Submit</Button>
        <h3 className="font-bold text-[14px] md:text-[20px] xl:text-[24px] text-blue-400 underline decoration-blue-400 font-bold cursor-pointer">Resend Link</h3>
        <h3 className="font-bold text-[10px] md:text-[15px] xl:text-[20px]  underline font-bold cursor-pointer">Back</h3>
      </div>
    </AuthLayout>
  )
}
