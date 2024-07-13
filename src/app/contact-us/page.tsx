import { contactus } from "@/Content/assets";
import { Input, Textarea, Image, Button } from "@nextui-org/react";
import React from "react";

function ContactUs() {
  return <div className="flex flex-col-reverse md:flex-row items-center justify-center h-full">
    <div className="flex flex-col gap-4 justify-center w-full p-[1rem] md:w-1/2">
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <Input className="bg-white rounded-none" variant="underlined" placeholder="Full Name" />
        <Input className="bg-white rounded-none" variant="underlined" placeholder="Email" />
        <Textarea className="bg-white rounded-none" variant="underlined" placeholder="Message" cols={20} />
        <Button color="primary" radius="full" className="p-[1rem]">Submit</Button>
      </form>
    </div>
    <Image src={contactus} />
  </div>;
}

export default ContactUs;
