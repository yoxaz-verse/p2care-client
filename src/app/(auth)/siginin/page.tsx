import { logo, signin } from "@/Content/assets";
import { AuthLayout } from "@/components/layouts/auth";
import { Button, Input, Spacer } from "@nextui-org/react";
import Image from "next/image";

async function signup() {
  "use server";
}

export default function SignIn() {
  return (
    <>
      <>
        <AuthLayout src={signin}>
          <form
            action={signup}
            className="flex  w-full md:w-1/2 h-full items-center justify-center flex-col gap-4"
          >
            <Image src={logo} alt="logo" width={117} height={231} />
            <div className="flex flex-row gap-4">
              <div className="flex flex-row w-full gap-[2rem] justify-around">
                <h3 className="underline text-blue-500 font-bold decoration-blue-400 text-[24px]">
                  Login
                </h3>
                <h3 className="underline text-blue-500 font-bold decoration-blue-400 text-[24px]">
                  Signup
                </h3>
              </div>
            </div>
            <Input
              name="email"
              placeholder="Your email"
              type="email"
              className="border border-gray-200"
            />
            <Input
              name="password"
              placeholder="Your password"
              type="password"
              className="border border-gray-200"
            />
            <Input
              name="phoneno"
              placeholder="Your Phoneno"
              type="tele"
              className="border borde-gray-200"
            />
            <Button className="text-white w-full bg-primary text-md rounded-none">
              Sign in with email
            </Button>
            <p className="self-end text-md">Forgot Password</p>
            <Spacer y={2} />
            <p>
              By clicking continue, you agree to our Terms of Service and
              Privacy Policy
            </p>
          </form>
        </AuthLayout>
      </>
    </>
  );
}
