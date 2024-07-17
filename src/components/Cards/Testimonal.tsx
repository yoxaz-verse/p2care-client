import { testimonial1 } from "@/content/assets";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <Card className="w-[330px] md:w-[754px] h-[160px] md:h-[362px]">
      <CardBody className="flex flex-row items-center gap-4 p-2 w-full">
        <Image
          width={1000}
          height={1000}
          src={testimonial1}
          alt="image"
          className="w-[100px] md:w-[300px] rounded-[10px] h-[100px] md:h-[300px]"
        />
        <div className="flex flex-col gap-2">
          <p className="absolute text-[80px] text-blue-500 right-1 md:right-4 top-[-16px] md:top-[20px]">
            “
          </p>
          <h3 className="text-[7px] md:text-md font-[400]  leading-[10px] md:leading-[26px]">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </h3>
          <h3 className="text-[7px] md:text-md font-[600] leading-[20px]">
            HAMZA ALI
          </h3>
          <h3 className="text-[6px] md:text-[14px]">Heart Specailist</h3>
        </div>
      </CardBody>
    </Card>
  );
}
