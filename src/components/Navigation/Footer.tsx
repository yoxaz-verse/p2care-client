"use client";
import { logo, smallArrowIcon } from "@/Content/assets";
import { Button, Divider, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import EnquireModal from "../Enquire";
import { useEffect, useState } from "react";

export default function Footer() {
  const router = useRouter();
  const path: any = useParams();
  const [visible, setVisible] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (
      path === "/forgot-password" ||
      path === "/forgot-password/retype" ||
      path === "/otp" ||
      path === "/siginin"
    ) {
      setVisible(false);
    }
  }, [path]);
  return (
    <>
      <div
        className={` ${
          visible ? "flex" : "hidden"
        } flex-col gap-4 p-[2rem] w-full`}
      >
        <div className="flex flex-row justify-around items-center rounded-2xl h-[100px] xl:h-[310px] bg-primary">
          <h3 className="text-md xl:text-xl font-bold text-white">
            Have any enquiry
          </h3>
          <Button
            onClick={() => onOpen()}
            className="bg-white text-black p-[.3rem] md:p-[1rem] flex items-center w-1/4 xl:w-[200px] rounded-full justify-around"
          >
            <h3 className="text-sm md:text-md font-bold">Get Started</h3>
            <Image
              src={smallArrowIcon}
              alt="icon"
              width={20}
              height={20}
              className="w-2 md:w-3 h-2 md:h-3"
            />
          </Button>
        </div>
        <EnquireModal onOpenChange={onOpenChange} isOpen={isOpen} />
        <div className="flex flex-col md:flex-row justify-around gap-[1rem] w-full p-[.1rem] xl:p-[2rem]">
          <div className="flex gap-2 md:gap-4 flex-col">
            <Image
              src={logo}
              width={200}
              className="w-1/4 md:w-1/2"
              height={200}
              alt="logo"
            />
            <h3 className="text-[10px] md:text-md">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </h3>
            <div className="flex text-lg items-center w-full justify-center lg:text-[50px] flex-row gap-4">
              <FaFacebook className="fill-blue-400" />
              <CiInstagram />
              <FaGithub />
            </div>
          </div>
          <div className="flex p-[.2rem] md:p-[.8rem] text-[12px] lg:text-md flex-row w-full md:w-1/2 justify-around">
            <div className="flex gap-4 flex-col">
              <h3 className="text-primary font-bold">Company</h3>
              {/* <h3
                className="cursor-pointer"
                onClick={() => router.push("/about-us")}
              >
                About
              </h3> */}
              <h3
                className="cursor-pointer"
                onClick={() => router.push("/blog")}
              >
                Blogs
              </h3>
              <h3
                className="cursor-pointer"
                onClick={() => router.push("/doctor")}
              >
                Doctors
              </h3>
              <h3
                className="cursor-pointer"
                onClick={() => router.push("/hospital")}
              >
                Hospital
              </h3>
            </div>
            <div className="flex gap-4 flex-col">
              <h3 className="text-primary font-bold">Help</h3>
              <h3
                onClick={() => router.push("/contact-us")}
                className="cursor-pointer"
              >
                Contact
              </h3>
              <h3
                className="cursor-pointer"
                onClick={() => router.push("/department")}
              >
                Department
              </h3>
            </div>
          </div>
        </div>
        <Divider />
        <h3 className="p-[1rem] text-center w-full">
          © Copyright {new Date().getUTCFullYear()}, All Rights Reserved{" "}
        </h3>
      </div>
    </>
  );
}
