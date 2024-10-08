"use client";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import { getData } from "@/core/apiHandler";
import { hospitalRoutes } from "@/core/apiRoutes";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Chip, Divider, Spacer, Spinner, Avatar } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const questions = [
  {
    question: "Is there a pharmacy/diagnostic/imaging service at the clinic?",
    answer: "jbj",
  },
  { question: "What is your favorite color?", answer: "Blue" },
  { question: "How many continents are there?", answer: "Seven" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
  { question: "What is the capital of France?", answer: "Paris" },
];
function Tag({
  name,
  number,
  onPress,
}: {
  name: string;
  number: number;
  onPress: () => any;
}) {
  return (
    <Chip
      onClick={onPress}
      className="rounded-none p-[.5rem] md:p-[1rem] bg-[#CDCDCD80] flex text-center hover:bg-primary text-black cursor-pointer hover:text-white"
    >
      <h3 className="text-[10px] md:text-md">
        {name} ({number})
      </h3>
    </Chip>
  );
}
function FAQ({ question, ans }: { question: string; ans: string }) {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-[12px] md:text-[20px] font-semibold flex flex-row">
          <span>Q.</span> {question}
        </h3>
        <h3 className="text-[10px] lg:text-md flex flex-row">
          <span>A.</span> {ans}
        </h3>
      </div>
    </>
  );
}

interface Tags {
  name: string;
  count: number;
  id: any;
}
function Details() {
  const router = useRouter();
  const [tags, setTags] = useState<Tags[]>([]);
  const { id } = useParams();
  const { data: getHospitals, isLoading } = useQuery({
    queryKey: ["getHospitals"],
    queryFn: () => {
      return getData(`${hospitalRoutes.hospital}/${id}`, {});
    },
  });
  const { data: getDoctors, isLoading: isLoadingDoctors } = useQuery({
    queryKey: ["getDoctors", id],
    queryFn: () => {
      return getData(`/hospital-doctor/get-doctors/${id}`, {});
    },
  });
  const { data: countDepartment, isLoading: isLoadingDepartment } = useQuery({
    queryKey: ["countDepartment", id],
    queryFn: () => {
      return getData(`/hospital-department/department/${id}`, {});
    },
  });
  console.log(getDoctors?.data.data);

  useEffect(() => {
    if (!isLoadingDepartment && countDepartment?.data?.data) {
      const newTags = countDepartment.data.data.map((d: any) => {
        const { name, count, _id } = d;
        console.log(d);
        return {
          name,
          count,
          id: _id,
        };
      });
      setTags(newTags);
    }
  }, [countDepartment, isLoadingDepartment]);
  return isLoading || isLoadingDepartment || isLoadingDoctors ? (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Spinner />
      <h3>Loading Hospiatal Details..</h3>
    </div>
  ) : (
    <section className="flex flex-col gap-[2rem]">
      <HospitalCard2 data={getHospitals?.data.data} />
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm w-full">
        <div className="flex flex-col p-[1rem] w-full">
          <h3 className="text-md md:text-lg  font-semibold">
            About {getHospitals?.data.data.name}
          </h3>
          <p className="text-[10px] md:text-md">
            {getHospitals?.data?.data?.about}
            {/* <span className="text-primary  font-semibold underline">
                Readmore
              </span> */}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 p-[1rem]">
          <div className="flex flex-col items-start">
            <h3 className="text-[14px] md:text-[24px] font-semibold">
              Address
            </h3>
            <p className="flex text-[10px] md:text-md flex-wrap">
              <span
                onClick={() =>
                  router.push(getHospitals?.data?.data?.locationUrl)
                }
                className="underline cursor-pointer font-semibold text-primary"
              >
                Get Directions
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[14px] md:text-[24px]  font-semibold">
              Timings
            </h3>
            <h3 className="text-[10px] md:text-md">Mon - Sun</h3>
            <h4 className="text-[10px] md:text-md">09:00 AM</h4>
            <h4 className="text-[10px] md:text-md">Photos</h4>
            <div className="flex flex-row gap-2 w-full">
              {getHospitals?.data.data.images &&
                getHospitals.data.data.images.map((i: any, index: any) => {
                  return (
                    <Image
                      key={index}
                      src={i.path}
                      alt="hospital"
                      width={1000}
                      height={1000}
                      className="h-max w-[150px] md:w-[200px] rounded"
                    />
                  );
                })}
            </div>
          </div>
          <div className="flex text-[10px] md:text-md flex-col">
            {getHospitals?.data.data.modesOfPayment && (
              <>
                <h3 className="text-[14px] md:text-[24px]  font-semibold">
                  Modes of Payment
                </h3>
                <h3 className="flex flex-row gap-2">
                  {getHospitals?.data?.data?.modesOfPayment.map(
                    (d: any, index: any) => {
                      return <h3 key={index}>{d} | </h3>;
                    }
                  )}
                </h3>
              </>
            )}

            <h3>Number of Beds - {getHospitals?.data?.data?.noOfBeds}</h3>
            <h3>
              Number of Ambulances - {getHospitals?.data?.data?.noOfAmbulances}
            </h3>
          </div>
        </div>
      </div>
      {tags && (
        <div className="flex  rounded-xl flex-col p-[1rem]">
          <h3 className="text-[24px] md:textlg font-semibold p-[.2rem]">
            Departments in {getHospitals?.data.data.name}
          </h3>
          <Spacer y={2} />
          <div className="flex flex-wrap gap-5 w-full">
            {tags?.map((t: Tags, index: any) => {
              return (
                <Tag
                  onPress={() =>
                    router.push(`/hospital/${id}/department/${t.id}`)
                  }
                  key={index}
                  number={t.count}
                  name={t.name}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4   rounded-xl w-full">
        <div className="flex flex-row w-full py-[1rem] justify-between items-center">
          <h3 className="text-md md:text-lg font-semibold">
            Doctors in {getHospitals?.data?.data?.name}
          </h3>
          <h3
            onClick={() => router.push(`/hospital/${id}/doctor`)}
            className="text-primary cursor-pointer text-[12px] md:text-[20px]  decoration-solid "
          >
            View All
          </h3>
        </div>
        {getDoctors?.data.data.map((d: any, index: any) => {
          return (
            <DoctorListCard
              redirect={`${navigationRoutes.hospital}/${id}/doctor/${d._id}`}
              data={d}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex flex-col rounded-xl shadow-xl gap-2 p-[1rem]">
        <h3 className="text-[24px]  font-semibold">
          Common Questions and Answers
        </h3>
        {questions.map((q: any, index: any) => {
          return (
            <div key={index} className="pt-4">
              <FAQ key={index} question={q.question} ans={q.answer} />
              <Spacer y={1} />
              <Divider orientation="horizontal" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Details;
