import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function DoctorDetails() {
  const { id } = useParams();
  const { data: getDoctor, isLoading } = useQuery({
    queryKey: ["getDoctors"],
    queryFn: () => {
      return getData(`/doctor/get-all/${id}`, {});
    }
  })
  return (
    <section>
      <DoctorListCard
        redirect={
          navigationRoutes.doctor + "1" + "/" + navigationRoutes.booking
        }
      />
      <Spacer y={2} />

      <div className="gap-2  flex flex-col">
        <h3 className="font-bold text-md md:text-lg text-start">Information</h3>
        <p className="text-md w-full lg:w-1/2 text-[#3C4959]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <Spacer y={2} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="h-[100px] md:h-[200px]">
          <h3 className="font-bold text-md md:text-lg">Contact Details</h3>
          <div className="flex flex-col text-md text-gray gap-2">
            <h3>Phone: +91 343 434 34 34</h3>
            <h3>Email : doctor21@gmail.com</h3>
            <div className="flex gap-2 items-center">
              {/* location icon */}
              <FaMapMarkerAlt className="text-grey  w-4 h-4" />
              <p className="text-[12px] font-[600] lg:text-[16px] text-grey">
                Marine Drive, Mumbai (MH)
              </p>
            </div>
          </div>
        </div>
        <div className="h-[100px] md:h-[200px]">
          <h3 className="font-bold text-md lg:text-lg">Visiting Time</h3>
          <div className="flex flex-col text-gray text-md gap-2">
            <h3>9:00 AM to 1:00PM</h3>
            <h3>5:00 PM to 8:00PM</h3>
            <Spacer y={2} />
            <h3>MONDAY TO FRIDAY</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
