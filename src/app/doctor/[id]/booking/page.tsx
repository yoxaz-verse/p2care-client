import ColourCard from "@/components/Development/colourCard";
import { Button, Spacer } from "@nextui-org/react";
import React from "react";

function Booking() {
  return (
    <section>
      <ColourCard colour="bg-red-200" height="h-[300px]" />
      <Spacer y={2} />
      <ColourCard height="h-[200px]" />
      <Spacer y={2} />
      <ColourCard colour="bg-green-200" height="h-[200px]" />
      <Spacer y={2} />
      <Button color="primary" className="w-full h-16 text-[16px]">
        Book Appointment
      </Button>
    </section>
  );
}

export default Booking;
