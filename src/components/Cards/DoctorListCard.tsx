"use client";
import { maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DoctorListCard {
  data: any;
  redirect: string;
  consultNow?: boolean;
  bookNow?: boolean;
}
export const DoctorListCard: React.FC<DoctorListCard> = ({ data, redirect, consultNow = true, bookNow = false }) => {

  console.log(data.experience);
  const router = useRouter();
  return (
    <>
      <Card className="w-full h-[130px] md:h-[175px] lg:h-[280px]">
        <CardBody className="flex flex-col justify-between">
          <div className="flex justify-center items-center gap-5 w-full ">
            <Image
              src={data?.image?.path || maleDoctorCard}
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
                    {data.name}
                  </h4>
                  <p className=" font-[700] text-[10px] md:text-[16px] self-center lg:text-[24px] text-danger">
                    {data?.department?.name}
                  </p>
                </div>
                <h3 className="font-[700] text-[18px] md:text-[30px]  text-#011632 lg:text-[48px]">
                  ₹ {data.price}
                </h3>
              </div>
              {/* level 2 */}
              <div className="flex justify-between w-full  items-center ">
                <div className="flex gap-10">

                  <p className="text-[10px] font-[700] md:text-[16px] lg:text-[24px] text-primary">
                    {data.achievements.length > 0 ? (
                      data.achievements.map((d: string, index: number) => (
                        <span key={index}>
                          {d}
                          {index < data.achievements.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </p>
                </div>
                <h5 className="font-[600] line-through text-[12px] md:text-[16px] lg:text-[32px] text-danger">
                  ₹ {data.price}
                </h5>
              </div>
              {/* level 3 */}
              <div className="flex justify-between w-full items-center  ">
                <div className="flex gap-2 items-center text-[8px] lg:text-md">
                  {/* location icon */}
                  <FaMapMarkerAlt className="text-grey" />
                  <p className="text-[8px] font-[600] md:text-[14px] lg:text-md text-grey">
                    {data?.address}
                  </p>
                </div>
                <p className="font-[700] text-[8px] lg:text-[16px] self-center text-grey">
                  Consultation fee at clinic
                </p>
              </div>
              {/* level 4 */}
              <div className="hidden lg:flex justify-between w-full items-center ">
                <div className="bg-secondary p-2 rounded-xl text-[8px] lg:text-[20px]  text-white">
                  {data.experience} Years of Experience
                </div>
                <div className="flex gap-5">
                  <p className="text-[8px] lg:text-[20px] text-grey self-center">
                    know more
                  </p>
                  {consultNow && (
                    <Button
                      onPress={() => router.push(redirect)}
                      className="text-[10px] lg:text-[20px] uppercase p-5 bg-primary text-white"
                    >
                      {bookNow ? "Book Now" : "Consult Now"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex justify-between w-full items-center ">
            <h3 className="bg-secondary p-1 lg:p-3 rounded-xl text-[8px] md:text-[12px] lg:text-[20px]  text-white">
              {data?.experience} Years of Experience
            </h3>
            <div className="flex gap-5">
              <p className="text-[8px] md:text-[12px] lg:text-[20px] text-grey self-center">
                know more
              </p>
              {consultNow &&
                <Card
                  isPressable
                  onPress={() => router.push(redirect)}
                  className="text-[10px] md:text-[15px] p-1 px-3 bg-primary text-white"
                >
                  {bookNow ? "Book Now" : "Consult Now"}
                </Card>
              }
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
