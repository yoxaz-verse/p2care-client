import ColourCard from "@/components/Development/colourCard";
import { Spacer } from "@nextui-org/react";
import React from "react";

function DoctorDetails() {
  return (
    <section>
      <ColourCard colour="bg-red-200" height="h-[300px]" />
      <Spacer y={2} />
      <ColourCard height="h-[200px]" />
      <Spacer y={2} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <ColourCard colour="bg-green-200" height="h-[200px]" />
        <ColourCard colour="bg-green-200" height="h-[200px]" />
      </div>
    </section>
  );
}

export default DoctorDetails;
