"use client";
import { AuthLayout } from "@/components/layouts/auth";
import { otp, logo, forgotpass } from "@/Content/assets";
import { postData } from "@/core/apiHandler";
import { isMobile, isTablet } from "@/Utils/screenSize";
import { Image, Button, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPass() {
  const width = isMobile() ? "20px" : isTablet() ? "40px" : "60px";
  const height = isMobile() ? "20px" : isTablet() ? "40px" : "60px";
  const [email, setEmail] = useState<any>();
  const forgotpassMutate = useMutation({
    mutationKey: ["forgotpass"],
    mutationFn: (data: any) => {
      return postData("/patient/forgot-password", {}, data)
    }
  });
  return (
    <AuthLayout src={forgotpass}>
      <div className="flex flex-col justify-center gap-[2rem] items-center">
        <Image src={logo} alt="p2Care" />
        <h3 className="text-center">
          Please enter your phone number or email address here so we can send
          you a login link.
        </h3>
        <Input
          value={email}
          onValueChange={(e) => setEmail(e)}
          radius="none"
          className="bg-inherit outline-none border border-gray-200"
          placeholder="Enter Phone no or Email"
        />
        <Button color="primary" radius="none" className="w-full">
          Submit
        </Button>
        {/* <Link href={"/forgot-password/retype"}>
          <h3 className="font-bold text-[14px] md:text-[20px] xl:text-[24px] text-blue-400 underline decoration-blue-400  cursor-pointer">
            Resend Link
          </h3>
        </Link> */}
        <Link href={"/siginin"}>
          <h3 className="font-bold text-[10px] md:text-[15px] xl:text-[20px]  underline  cursor-pointer">
            Back
          </h3>
        </Link>
      </div>
    </AuthLayout>
  );
}
