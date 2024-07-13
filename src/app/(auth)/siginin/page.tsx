import { logo, signin } from "@/Content/assets";
import AuthLayout from "../layout";
import { Button, Input } from "@nextui-org/react";

async function signup() {
  "use server";
}

export default function SignIn() {
  return (
    <>

      <>
        <img src={logo} className="w-1/4" />
        <form action={signup} className="flex w-full h-full flex-col gap-4">
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
          <Button className="text-white w-full bg-primary">
            Sign in with email
          </Button>
        </form>
      </>
    </>
  );
}
