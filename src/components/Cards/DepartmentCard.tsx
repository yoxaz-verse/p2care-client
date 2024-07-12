import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";

export interface DepartmentCardProps {
  cause?: string;
}

export default function DepartmentCard({ cause }: DepartmentCardProps) {
  return (
    <Card className="shadow-xl h-[30vh] rounded-xl">
      <CardBody className="flex flex-col gap-4 justify-center items-center">
        <div className="rounded-full bg-[#E8FCFF] w-[10rem] h-[10rem]" />
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <h1 className="font-bold text-center">{cause}</h1>
        <Link href="/" className="text-primary font-bold uppercase">
          <h1>Consult Now</h1>
        </Link>
      </CardFooter>
    </Card>
  );
}
