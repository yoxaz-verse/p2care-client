"use client";
import { AuthLayout } from "@/components/layouts/auth";
import { otp, logo } from "@/Content/assets";
import { isMobile, isTablet } from "@/Utils/screenSize";
import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
import OtpInput from "react-otp-input";

export default function() {
  const [otpinput, setOtp] = useState<any>();
  const width = isMobile() ? "20px" : (isTablet() ? "40px" : "60px");
  const height = isMobile() ? "20px" : (isTablet() ? "40px" : "60px");
  return (
    <AuthLayout src={otp}>
      <div className="flex flex-col h-[80%] justify-center gap-5 items-center">
        <Image src={logo} />
        <h3 className="text-center">We have sent Otp to your example@gmail.com.Please enter it here</h3>
        <OtpInput
          value={otpinput}
          inputType="text"
          inputStyle={{
            boxShadow: "2px 4px 23px 0px rgba(0, 0, 0, 0.07) inset",
            textAlign: "center",
            borderRadius: "10px",
            border: "2px solid #B3AFAF",
            width: width,
            height: height,
            margin: "0 5px 0 5px",
          }}
          onChange={(e) => setOtp(e)}
          numInputs={4}
          renderInput={(props) => <input  {...props} />}
        />
        <Button color="primary" radius="none" className="w-full">Submit</Button>
        <h3 className="font-bold text-[14px] md:text-[20px] xl:text-[24px] text-blue-400 underline decoration-blue-400 font-bold cursor-pointer">Resend Link</h3>
        <h3 className="font-bold text-[10px] md:text-[15px] xl:text-[20px]  underline font-bold cursor-pointer">Back</h3>
      </div>
    </AuthLayout>
  )
}
