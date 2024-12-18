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
      className="w-full h-[200px] md:h-[200px]  lg:h-[300px]  rounded-[20px] hover:bg-secondary-200 hover:cursor-pointer"
    >
      <CardBody className="flex justify-center items-center">
        <div className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px] bg-secondary-200 flex justify-center items-center rounded-full">
          {props.icon && (
            <Image
              src={props.icon}
              alt={props.title}
              className="rounded-full w-full h-full lg:w-full lg:h-full"
              width={1000}
              height={1000}
            />
          )}
        </div>
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <h4
          className={`font-[600] text-[${
            props.title && props.title.length > 27 ? 11 : 15
          }px] lg:text-[${
            props.title && props.title.length > 27 ? 16 : 20
          }px] text-center`}
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
