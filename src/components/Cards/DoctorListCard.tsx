"use client";
import { maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DoctorListCardProps {
  data: any;
  redirect: string;
}
export const DoctorListCard: React.FC<any> = (props: DoctorListCardProps) => {
  console.log(props.data);
  const router = useRouter();
  return (
    <>
      <Card className="w-full h-[130px] md:h-[175px] lg:h-[280px]">
        <CardBody className="flex flex-col justify-between">
          <div className="flex justify-center items-center gap-5 w-full ">
            <Image
              src={props?.data?.image?.path || maleDoctorCard}
              width={1000}
              height={1000}
              alt="male doc"
              className="w-[57px] h-[57px] md:w-[100px] md:h-[100px] xl:w-[220px] xl:h-[220px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-3 flex-grow justify-between align-top ">
              {/* level 1 */}
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-10 ">
                  <h4 className="text-md md:text-[24px] lg:text-lg font-[700]">
                    {props.data.name}
                  </h4>
                  <p className=" font-[700] text-[10px] md:text-[16px] self-center lg:text-[24px] text-danger">
                    {props?.data?.department?.name}
                  </p>
                </div>
                <h3 className="font-[700] text-[18px] md:text-[30px]  text-#011632 lg:text-[48px]">
                  ₹ {props.data.price}
                </h3>
              </div>
              {/* level 2 */}
              <div className="flex justify-between w-full  items-center ">
                <div className="flex gap-10">

                  <p className="text-[10px] font-[700] md:text-[16px] lg:text-[24px] text-primary">
                    {props.data.achievements.length > 0 ? (
                      props.data.achievements.map((d: string, index: number) => (
                        <span key={index}>
                          {d}
                          {index < props.data.achievements.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </p>
                </div>
                <h5 className="font-[600] line-through text-[12px] md:text-[16px] lg:text-[32px] text-danger">
                  ₹ {props.data.price}
                </h5>
              </div>
              {/* level 3 */}
              <div className="flex justify-between w-full items-center  ">
                <div className="flex gap-2 items-center text-[8px] lg:text-md">
                  {/* location icon */}
                  <FaMapMarkerAlt className="text-grey" />
                  <p className="text-[8px] font-[600] md:text-[14px] lg:text-md text-grey">
                    {props?.data?.address}
                  </p>
                </div>
                <p className="font-[700] text-[8px] lg:text-[16px] self-center text-grey">
                  Consultation fee at clinic
                </p>
              </div>
              {/* level 4 */}
              <div className="hidden lg:flex justify-between w-full items-center ">
                <div className="bg-secondary p-2 rounded-xl text-[8px] lg:text-[20px]  text-white">
                  {props.data.experince} Years of Experience
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
            <h3 className="bg-secondary p-1 lg:p-3 rounded-xl text-[8px] md:text-[12px] lg:text-[20px]  text-white">
              {props?.data?.experience} Years of Experience
            </h3>
            <div className="flex gap-5">
              <p className="text-[8px] md:text-[12px] lg:text-[20px] text-grey self-center">
                know more
              </p>
              <Card
                isPressable
                onPress={() => router.push(props.redirect)}
                className="text-[10px] md:text-[15px] p-1 px-3 bg-primary text-white"
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
