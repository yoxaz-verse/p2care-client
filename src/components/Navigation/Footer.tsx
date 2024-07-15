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
          <h3 className="text-md md:text-lg font-bold text-white">
            Have any enquiry
          </h3>
          <Button className="bg-white text-black p-[.5rem] md:p-[1rem] flex rounded-3xl">
            <h3 className="font-bold">Get Started</h3>
            <Image src={smallArrowIcon} />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-full p-[2rem]">
          <div className="flex gap-2 md:gap-4 flex-col">
            <Image src={logo} />
            <h3>
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </h3>
            <div className="flex flex-row gap-4">
              <FaFacebook size={40} className="fill-blue-400" />
              <CiInstagram size={40} />
              <FaGithub size={40} />
            </div>
          </div>
          <div className="flex p-[1rem] flex-row w-full justify-around">
            <div className="flex gap-4 flex-col">
              <h3 className="text-primary font-bold">Company</h3>
              <h3>About</h3>
              <h3>Features</h3>
              <h3>Works</h3>
              <h3>Career</h3>
            </div>
            <div className="flex gap-4 flex-col">
              <h3 className="text-primary font-bold">Help</h3>
              <h3>About</h3>
              <h3>Features</h3>
              <h3>Works</h3>
              <h3>Career</h3>
            </div>
            <div className="flex gap-4 flex-col">
              <h3 className="text-primary font-bold">Resources</h3>
              <h3>About</h3>
              <h3>Features</h3>
              <h3>Works</h3>
              <h3>Career</h3>
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
