import { maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface DoctorProfileProps {
  title: any;
  data: any;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({
  title,
  data,
}) => {
  console.log(data);
  return (
    <>
      {data && (
        <Card className="flex flex-row justify-around w-full h-[110px] md:h-[150px] lg:h-[270px]">
          <CardBody className="flex flex-row justify-between">
            <div className="flex flex-row h-full gap-2 md:gap-4">
              <Image
                src={data?.image?.path || maleDoctorCard}
                className="w-[57px] h-[57px]  md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] rounded-full"
                alt={data?.name}
              />
              <div className="flex flex-col h-full  justify-around">
                <div className="flex  w-full items-center gap-[1rem] flex-row">
                  <h3 className="text-md md:text-md lg:text-lg font-extrabold">
                    {data?.name}
                  </h3>
                  <div className="flex flex-row gap-2 lg:gap-4 items-center">
                    <div className="w-1 md:w-2 h-1 md:h-2 bg-red-500 rounded-full" />
                    <p className="font-extrabold text-[6px] md:text-[14px]  lg:text-md text-red-500">
                      {data?.designation?.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 md:gap-4 items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />

                  <p className="text-[10px] font-[400] md:text-[16px] lg:text-[24px] text-primary">
                    {data?.achievements.length > 0 ? (
                      data.achievements.map((d: string, index: number) => (
                        <span key={index}>
                          {d}
                          {index < data.achievements.length - 1 ? ", " : ""}
                        </span>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </p>
                </div>
                <div className="flex  items-center flex-row gap-2 md:gap-4">
                  <FaMapMarkerAlt className="fill-gray-500" />
                  <h3 className="text-[10px] md:text-md text-gray font-extrabold">
                    {data?.address}
                  </h3>
                </div>
                <span className="bg-blue-500 text-white text-sm lg:text-md font-bold px-[5px] md:px-[10px] w-1/2 md:w-1/2 text-center py-[5px] rounded-full">
                  {title}
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};
