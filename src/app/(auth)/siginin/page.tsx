"use client";
import { logo, signin, register } from "@/Content/assets";
import { AuthLayout } from "@/components/layouts/auth";
import { Button, Input, Spacer, Tab, Tabs, Card, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";



export default function SignIn() {
  const [isSelected, setisSelected] = useState<any>("Signin");
  return (
    <>
      <>
        <AuthLayout src={isSelected === "Signin" ? register : signin}>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Image src={logo} />
            <Tabs
              defaultSelectedKey="Signin"
              aria-label="Options"
              onSelectionChange={(e: any) => setisSelected(e)}
            >
              <Tab key="Login" title={
                <h3 className={`underline ${isSelected === "Login" ? "text-blue-500  decoration-blue-300 " : "text-gray-500  decoration-gray-300 "} font-bold text-[24px]`}>
                  Login
                </h3>
              }>
                <Card shadow="none">
                  <CardBody>
                    <form
                      className="flex  w-full h-full items-center justify-center flex-col gap-4"
                    >
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
                  </CardBody>
                </Card>

              </Tab>
              <Tab key="Signin" title={
                <h3 className={`underline  ${isSelected === "Signin" ? "text-blue-500  decoration-blue-300 " : "text-gray-500  decoration-gray-300 "}  font-bold decoration-blue-400 text-[24px]`}>
                  Signin
                </h3>
              }>
                <Card shadow="none">
                  <CardBody>
                    <form
                      className="flex  w-full h-full items-center justify-center flex-col gap-4"
                    >
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
                      <Spacer y={2} />
                      <p>
                        By clicking continue, you agree to our Terms of Service and
                        Privacy Policy
                      </p>
                    </form>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </AuthLayout>
      </>
    </>
  );
}
