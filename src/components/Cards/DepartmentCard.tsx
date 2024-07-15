"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface DepartmentCardProps {
  title: string;
  redirect: string;
  icon: string;
}

export default function DepartmentCard(props: DepartmentCardProps) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(props.redirect);
  };
  return (
    <Card
      onPress={() => {
        handleNavigation();
      }}
      isPressable
      className="w-[100px] h-[130px]  md:h-[300px] md:w-[220px] rounded-[20px] hover:bg-secondary-200 hover:cursor-pointer"
    >
      <CardBody className="flex justify-center items-center">
        <div className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] bg-secondary-200 flex justify-center items-center rounded-full">
          <Image
            src={props.icon}
            alt={props.title}
            className="rounded-full w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]"
            width={1000}
            height={1000}
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <h4
          className={`font-[600] text-[${props.title && props.title.length > 27 ? 11 : 15
            }px] lg:text-[${props.title && props.title.length > 27 ? 16 : 20}px] text-center`}
        >
          {props.title}
        </h4>
        <p className="text-primary font-[600] text-[10px] lg:text-[15px] uppercase">
          Consult Now
        </p>
      </CardFooter>
    </Card>
  );
}
