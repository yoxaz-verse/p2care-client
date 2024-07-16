import { logo, smallArrowIcon } from "@/Content/assets";
import { Button, Divider, Image } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-4 p-[2rem] w-full">
        <div className="flex flex-row justify-around items-center rounded-2xl h-[100px] md:h-[310px] bg-primary">
          <h3 className="text-md md:text-xl font-bold text-white">
            Have any enquiry
          </h3>
          <button className="bg-white text-black p-[.3rem] md:p-[1rem] flex items-center w-1/4 md:w-[200px] rounded-full justify-around">
            <h3 className="text-sm md:text-md font-bold">Get Started</h3>
            <Image src={smallArrowIcon} className="w-2 md:w-3 h-2 md:h-3" />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-full p-[.1rem] md:p-[2rem]">
          <div className="flex gap-2 md:gap-4 flex-col">
            <Image src={logo} />
            <h3 className="text-[10px] md:text-md">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </h3>
            <div className="flex flex-row gap-4">
              <FaFacebook size={40} className="fill-blue-400" />
              <CiInstagram size={40} />
              <FaGithub size={40} />
            </div>
          </div>
          <div className="flex p-[.2rem] md:p-[.8rem] flex-row w-full md:w-1/2 justify-around">
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
