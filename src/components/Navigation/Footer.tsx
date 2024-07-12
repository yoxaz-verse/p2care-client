import { logo, smallArrowIcon } from "@/Content/assets";
import { Button, Divider, Image } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col  p-[2rem] w-full">
        <div className="flex flex-row justify-around items-center rounded-2xl h-[20vh] bg-primary">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
            Have any enquiry
          </h1>
          <Button className="bg-white text-black p-[1rem] flex rounded-3xl">
            <h1>Get Started</h1>
            <Image src={smallArrowIcon} />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-full p-[2rem]">
          <div className="flex gap-2 md:gap-4 flex-col">
            <Image src={logo} />
            <h1>
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </h1>
            <div className="flex flex-row gap-4">
              <FaFacebook size={40} className="fill-blue-400" />
              <CiInstagram size={40} />
              <FaGithub size={40} />
            </div>
          </div>
          <div className="flex p-[1rem] flex-row w-full justify-around">
            <div className="flex gap-4 flex-col">
              <h1 className="text-primary font-bold">Company</h1>
              <h1>About</h1>
              <h1>Features</h1>
              <h1>Works</h1>
              <h1>Career</h1>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-primary font-bold">Help</h1>
              <h1>About</h1>
              <h1>Features</h1>
              <h1>Works</h1>
              <h1>Career</h1>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-primary font-bold">Resources</h1>
              <h1>About</h1>
              <h1>Features</h1>
              <h1>Works</h1>
              <h1>Career</h1>
            </div>
          </div>
        </div>
        <Divider />
        <h1 className="p-[1rem] text-center w-full">
          © Copyright {new Date().getUTCFullYear()}, All Rights Reserved{" "}
        </h1>
      </div>
    </>
  );
}
