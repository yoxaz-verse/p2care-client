import { apolloDoc } from "@/content/assets";
import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function DoctorDetailCard() {
  return (
    <Card className="h-[310px] flex flex-col justify-between p-5 hover:cursor-pointer hover:bg-primary-100">
      <div className="flex gap-5">
        <Image
          src={apolloDoc}
          alt="Doctor Name"
          className="w-[75px] h-[75px] rounded-full"
          width={1000}
          height={1000}
        />
        <div>
          <h5 className="font-[600] text-2xl">Dr. John Doe</h5>
          <p>Internal Medicine</p>
          <p>17 Years Exp</p>
        </div>
      </div>
      <div>location</div>
      <div>prices</div>
      <div>
        <Button color="primary">Consult Now</Button>
      </div>
    </Card>
  );
}

export default DoctorDetailCard;
