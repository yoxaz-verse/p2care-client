"use client";
import { logo, signin, register } from "@/Content/assets";
import { AuthLayout } from "@/components/layouts/auth";
import {
  Button,
  Input,
  Spacer,
  Tab,
  Tabs,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { postData } from "@/core/apiHandler";
import { authRoutes } from "@/core/apiRoutes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [isSelected, setisSelected] = useState("Signin");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const router = useRouter();
  const signinMutate = useMutation({
    mutationKey: ["signin"],
    mutationFn: (data: any) => {
      return postData(authRoutes.patient, {}, data);
    },
    onSuccess: (data: any) => {
      console.log(data);
      toast.success("Registered Succesfully", {
        position: "top-right",
        className: "bg-green-300",
      });
      setisLoading(false);
      router.push("/otp");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, {
        position: "top-right",
        className: "bg-red-300 text-white",
      });
      setisLoading(false);
    },
  });
  const testMutation = useMutation({
    mutationKey: ["test"],
    mutationFn: (data: any) => {
      return postData("/admin/login", {}, data);
    },
  });

  const loginPhone = useMutation({
    mutationKey: ["loginPhone"],
    mutationFn: (data: any) => {
      return postData(authRoutes.loginPhone, {}, data);
    },
    onSuccess: (data: any) => {
      console.log(data.data.data);
      toast.success("Logged in Succesfully", {
        position: "top-right",
        className: "bg-green-300",
      });
      setisLoading(false);
      router.push("/");
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-right",
        className: "bg-red-500 text-white",
      });
      setisLoading(false);
    },
  });

  const loginEmail = useMutation({
    mutationKey: ["loginEmail"],
    mutationFn: (data: any) => {
      return postData(authRoutes.loginEmail, {}, data);
    },
    onSuccess: (data: any) => {
      console.log(data.data.data);

      toast.success("Logged in Succesfully", {
        position: "top-right",
        className: "bg-green-500",
      });
      setisLoading(false);
      router.push("/");
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "top-right",
        className: "bg-red-500 text-white",
      });
      setisLoading(false);
    },
  });
  const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    const allInputs = document.querySelectorAll("input");

    if (isSelected === "Signin") {
      const signinData = {
        name: allInputs[0].value,
        email: allInputs[1].value,
        password: allInputs[2].value,
        phone: allInputs[3].value,
      };
      signinMutate.mutate(signinData);
    } else {
      console.log(allInputs[0].value);
      const data = {
        password: allInputs[1].value,
      };
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (emailRegex.test(allInputs[0].value)) {
        const emailData = {
          ...data,
          email: allInputs[0].value,
        };
        loginEmail.mutate(emailData);
      } else if (phoneRegex.test(allInputs[0].value)) {
        const phoneData = {
          ...data,
          phone: allInputs[0].value,
        };
        loginPhone.mutate(phoneData);
      }
    }

    setisLoading(false);
  };

  return (
    <div className="p-5">
      <AuthLayout src={isSelected === "Signin" ? signin : register}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image src={logo} />
          <Tabs
            defaultSelectedKey="Signin"
            aria-label="Options"
            onSelectionChange={(e: any) => setisSelected(e)}
          >
            <Tab
              key="Login"
              title={
                <h3
                  className={` ${isSelected === "Login"
                      ? "text-blue-500 decoration-blue-300"
                      : "text-gray-500 decoration-gray-300"
                    } font-bold text-[24px]`}
                >
                  Login
                </h3>
              }
            >
              <Card shadow="none">
                <CardBody>
                  <form
                    onSubmit={(e) => handleSignin(e)}
                    className="flex w-full h-full items-center justify-center flex-col gap-4"
                  >
                    <Input
                      name="email"
                      placeholder="Your email or phone no"
                      type="text"
                      className="border border-gray-200"
                    />
                    <Input
                      name="password"
                      placeholder="Your password"
                      type="password"
                      className="border border-gray-200"
                    />
                    <Button
                      isLoading={isLoading}
                      type="submit"
                      className="text-white w-full bg-primary text-md rounded-none"
                    >
                      Log in with email
                    </Button>
                    <p className="self-end text-md">Forgot Password</p>
                    <Spacer y={2} />
                    <p>
                      By clicking continue, you agree to our Terms of Service
                      and Privacy Policy
                    </p>
                  </form>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="Signin"
              title={
                <h3
                  className={` ${isSelected === "Signin"
                      ? "text-blue-500 decoration-blue-300"
                      : "text-gray-500 decoration-gray-300"
                    } font-bold decoration-blue-400 text-[24px]`}
                >
                  Signup
                </h3>
              }
            >
              <Card shadow="none">
                <CardBody>
                  <form
                    onSubmit={(e) => handleSignin(e)}
                    className="flex w-full h-full items-center justify-center flex-col gap-4"
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      className="border border-gray-200"
                    />
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
                      type="tel"
                      className="border border-gray-200"
                    />
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      className="text-white w-full bg-primary text-md rounded-none"
                    >
                      Signup
                    </Button>
                    <Spacer y={2} />
                    <p>
                      By clicking continue, you agree to our Terms of Service
                      and Privacy Policy
                    </p>
                  </form>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </AuthLayout>
    </div>
  );
}
