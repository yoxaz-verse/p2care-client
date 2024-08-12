"use client";
import useAuth from "@/app/isAuth";
import { AuthLayout } from "@/components/layouts/auth";
import { otp, logo } from "@/Content/assets";
import { postData } from "@/core/apiHandler";
import { authRoutes } from "@/core/apiRoutes";
import { isMobile, isTablet } from "@/Utils/screenSize";
import { Image, Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "sonner";

export default function OTP() {
  const [otpinput, setOtp] = useState<any>();
  const [phoneOtp, setPhoneOtp] = useState<any>();
  const width = isMobile() ? "20px" : isTablet() ? "40px" : "60px";
  const height = isMobile() ? "20px" : isTablet() ? "40px" : "60px";
  const router = useRouter();
  const { data } = useAuth();
  const otpMutation = useMutation({
    mutationKey: ["otp"],
    mutationFn: (data: any) => {
      return postData(authRoutes.otp, {}, data);
    },
    onSuccess: (data: any) => {
      console.log(data);
      toast.success("Otp Verified Succesfully", {
        position: "top-right",
        className: "bg-green-300 text-white",
      });
      router.push("/signin");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, {
        position: "top-right",
        className: "bg-red-300 text-white",
      });
      // try again
      toast.error("Please try again", {
        position: "top-right",
        className: "bg-red-300 text-white",
      });
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    otpMutation.mutate({ emailOtp: otpinput, phoneOtp: phoneOtp });
  };
  return (
    <AuthLayout src={otp}>
      <div className="flex flex-col h-[80%] justify-center gap-5 items-center">
        <Image src={logo} />
        <h3 className="text-center">
          We have sent Otp to your email. Please enter it here
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label htmlFor="otp" className="text-md ">
            Email Otp
          </label>
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
            numInputs={6}
            renderInput={(props) => <input {...props} />}
          />

          <label htmlFor="otp" className="text-md ">
            Phone Otp
          </label>

          <OtpInput
            value={phoneOtp}
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
            onChange={(e) => setPhoneOtp(e)}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
          />

          <Button
            color="primary"
            type="submit"
            radius="none"
            className="w-full"
          >
            Submit
          </Button>
        </form>
        <h3 className=" text-[10px] md:text-[15px] xl:text-[20px]   font-bold cursor-pointer">
          Back
        </h3>
      </div>
    </AuthLayout>
  );
}
