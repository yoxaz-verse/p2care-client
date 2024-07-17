"use client";
import { maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DoctorListCardProps {
  redirect: string;
}
export const DoctorListCard: React.FC<any> = (props: DoctorListCardProps) => {
  const router = useRouter();
  return (
    <>
      <Card className="w-full h-[110px] lg:h-[300px]">
        <CardBody className="flex flex-col justify-between">
          <div className="flex justify-center items-center gap-5 w-full ">
            <Image
              src={maleDoctorCard}
              width={1000}
              height={1000}
              alt="male doc"
              className="w-[57px] h-[57px] lg:w-[220px] lg:h-[220px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-3 flex-grow justify-between align-top ">
              {/* level 1 */}
              <div className="flex justify-between w-full items-center  ">
                <div className="flex gap-10 ">
                  <h4 className="text-[11px] lg:text-[44px] font-[700]">
                    Dr. John Doe
                  </h4>
                  <p className=" font-[700] text-[8px] self-center lg:text-[24px] text-danger">
                    Cardiologist
                  </p>
                </div>
                <h3 className="font-[700] text-[18px]  text-#011632 lg:text-[64px]">
                  ₹ 649
                </h3>
              </div>
              {/* level 2 */}
              <div className="flex justify-between w-full  items-center ">
                <div className="flex gap-10">
                  <p className="text-[6px] font-[700] lg:text-[24px] text-primary">
                    . MA, MPhil, MBBS
                  </p>
                </div>
                <h5 className="font-[600] line-through text-[8px] lg:text-[32px] text-danger">
                  ₹ 649
                </h5>
              </div>
              {/* level 3 */}
              <div className="hidden lg:flex justify-between w-full items-center  ">
                <div className="flex gap-2 items-center">
                  {/* location icon */}
                  <FaMapMarkerAlt className="text-grey  w-5 h-5" />
                  <p className="text-[8px] font-[600] lg:text-[24px] text-grey">
                    Marine Drive, Mumbai (MH)
                  </p>
                </div>
                <p className="font-[700] text-[8px] lg:text-[16px] self-center text-grey">
                  Consultation fee at clinic
                </p>
              </div>
              {/* level 4 */}
              <div className="hidden lg:flex justify-between w-full items-center ">
                <div className="bg-secondary p-2 rounded-xl text-[8px] lg:text-[20px]  text-white">
                  15 Years of Experience
                </div>
                <div className="flex gap-5">
                  <p className="text-[8px] lg:text-[20px] text-grey self-center">
                    know more
                  </p>
                  <Button
                    onPress={() => router.push(props.redirect)}
                    className="text-[10px] lg:text-[20px] p-5 bg-primary text-white"
                  >
                    CONSULT NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex justify-between w-full items-center ">
            <div className="bg-secondary p-1 lg:p-3 rounded-xl text-[8px] lg:text-[20px]  text-white">
              15 Years of Experience
            </div>
            <div className="flex gap-5">
              <p className="text-[8px] lg:text-[20px] text-grey self-center">
                know more
              </p>
              <Card
                isPressable
                onPress={() => router.push(props.redirect)}
                className="text-[10px] p-1 px-3 bg-primary text-white"
              >
                Consult Now
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
