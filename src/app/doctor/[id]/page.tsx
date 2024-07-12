import DoctorCard from "@/components/Cards/DoctorCard";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import ColourCard from "@/components/Development/colourCard";
import { Spacer } from "@nextui-org/react";
import React from "react";

function DoctorDetails() {
  return (
    <section>
      <DoctorListCard />
      <Spacer y={2} />
      <div className="h-[200px] gap-2 w-full md:w-1/2 flex flex-col">
        <h1 className="font-bold text-xl md:text-2xl font-bold text-start">Information</h1>
        <p className="text-md md:text-xl text-[#3C4959]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
        </p>
      </div>
      <Spacer y={2} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-[200px]">
          <h1 className="font-bold text-xl md:text-2xl">
            Contact Details
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#011632] text-lg">Phone: +91 343 434 34 34</h1>
            <h1 className="text-[#011632] text-lg">Email : doctor21@gmail.com</h1>
          </div>
        </div>
        <div className="h-[200px]">
          <h1 className="font-bold text-xl md:text-2xl">
            Visiting Time
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#011632] text-lg">9:00 AM to 1:00PM</h1>
            <h1 className="text-[#011632] text-lg">5:00 PM to 8:00PM</h1>
            <Spacer y={2} />
            <h1>MONDAY TO FRIDAY</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
