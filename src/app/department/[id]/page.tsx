import ColourCard from "@/components/Development/colourCard";
import DescriptionParagraph from "@/components/Text/DescriptionParas";
import TitleHeading from "@/components/Text/TitleHeading";
import { departmentFever } from "@/content/assets";
import { lorem100 } from "@/content/dummyText";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
function Details() {
  return (
    <section>
      <Image
        src={departmentFever}
        alt="Service Name"
        className=" object-cover h-[400px] w-full rounded-[30px]"
        width={1000}
        height={1000}
      />
      <Spacer y={3} />
      <TitleHeading heading="Cold, Cough or Fever" />
      <Spacer y={3} />
      <DescriptionParagraph content={lorem100} />
      <Spacer y={3} />
      <TitleHeading heading="Doctors" />
      <Spacer y={3} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <ColourCard key={index} height="h-[300px]"></ColourCard>
        ))}
      </div>
      <Spacer y={3} />
      <TitleHeading heading="Hopitals" />
      <Spacer y={3} />
      <div className="grid grid-cols-1  gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <ColourCard
            key={index}
            colour="bg-red-200"
            height="h-[500px]"
          ></ColourCard>
        ))}
      </div>
    </section>
  );
}

export default Details;
