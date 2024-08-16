import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export interface DoctorCardProps {
  name: string;
  type: string;
  image: string;
  id: any;
}

export default function DoctorCard({ name, type, image, id }: DoctorCardProps) {
  const router = useRouter();
  return (
    <>
      <Card isPressable onPress={() => router.push(`/doctor/${id}`)} className="w-full h-[170px] lg:h-[400px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter
          style={{
            background:
              "linear-gradient(96.2deg, rgba(37, 180, 248, 0.9) 0%, rgba(37, 180, 248, 0) 100%)",
          }}
          className="absolute z-10 bottom-1 flex flex-col text-white m-2   items-start"
        >
          <p className="font-[700] text-[11px] lg:font-[700] lg:[24px]">
            {name}
          </p>
          <h4 className="font-[700] text-[11px] lg:font-[400] lg:text-[16px]">
            {type}
          </h4>
        </CardFooter>
      </Card>
    </>
  );
}
