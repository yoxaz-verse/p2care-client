"use client";
import DoctorCard from "@/components/Cards/DoctorCard";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import { Input, Button, Select, SelectItem, Chip, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const cities = [
  { key: "delhi", label: "Delhi" },
  { key: "mumbai", label: "Mumbai" },
  { key: "kolkata", label: "Kolkata" },
  { key: "chennai", label: "Chennai" },
  { key: "bengaluru", label: "Bengaluru" },
  { key: "hyderabad", label: "Hyderabad" },
  { key: "pune", label: "Pune" },
  { key: "ahmedabad", label: "Ahmedabad" },
  { key: "jaipur", label: "Jaipur" },
  { key: "lucknow", label: "Lucknow" },
  { key: "chandigarh", label: "Chandigarh" },
  { key: "bhopal", label: "Bhopal" },
  { key: "patna", label: "Patna" },
];



const questions = [
  { question: "Is there a pharmacy/diagnostic/imaging service at the clinic?", answer: "jbj" },
  { question: "What is your favorite color?", answer: "Blue" },
  { question: "How many continents are there?", answer: "Seven" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
  { question: "What is the capital of France?", answer: "Paris" }
];
function Tag({ name, number }: { name: string, number: number }) {
  return (
    <Chip className="rounded-none p-[.5rem] md:p-[1rem] bg-[#CDCDCD80] flex text-center hover:bg-primary text-black cursor-pointer hover:text-white">
      <h3 className="text-[10px] md:text-[20px]">{name} ({number})</h3>
    </Chip>
  )
}
function FAQ({ question, ans }: { question: string, ans: string }) {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-[14px] md:text-[24px] font-semibold flex flex-row"><span>Q.</span> {question}</h3>
        <h3 className="text-[10px] md:text-[24px] flex flex-row"><span>A.</span> {ans}</h3>
      </div>
    </>
  )
}

const Tags = [
  { name: "Dentist", number: 1 },
  { name: "Cardiology", number: 2 },
  { name: "Orthopedics", number: 3 },
  { name: "Pediatrics", number: 4 },
  { name: "Ophthalmology", number: 5 },
  { name: "Dermatology", number: 6 },
  { name: "Neurology", number: 7 },
  { name: "Gastroenterology", number: 8 },
  { name: "Oncology", number: 9 },
  { name: "Psychiatry", number: 10 }
];
function Details() {
  const router = useRouter();
  return <section className="flex flex-col gap-[2rem]">
    <div className="flex flex-col-reverse md:flex-row w-full gap-4 p-[.5rem] md:p-[1rem] justify-between">
      <Select
        startContent={<FaMapMarkerAlt size={20} />}
        defaultSelectedKeys={["mumbai"]}
        className="max-w-xs bg-white"
      >
        {cities.map((animal: any) => (
          <SelectItem
            className="font-bold text-xl"
            startContent={<FaMapMarkerAlt />}
            key={animal.key}
          >
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <div className="flex flex-row w-full md:w-2/3 gap-4">
        <Input
          variant="bordered"
          className="border rounded-xl bg-white"
          placeholder="Search By Hospital Name, Speciality etc"
        />
        <Button className="bg-blue-500 rounded-full" isIconOnly>
          <FaSearch className="fill-white" />
        </Button>
      </div>
    </div>
    <HospitalCard2 />
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-xl w-full">
      <div className="flex flex-col p-[1rem] w-full">
        <h3 className="text-[24px] md:text-lg  font-semibold">About Apollo Spectra Hospital</h3>
        <p className="text-md">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidata
          Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          <span className="text-primary text-md font-semibold underline">Readmore</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 p-[1rem]">
        <div className="flex flex-col items-start">
          <h3 className="text-[24px] md:text-lg font-semibold">Address</h3>
          <p className="flex flex-wrap">
            Bombay Hospital, 12, Vitthaldas Thackersey Marg, near Liberty cinema, New Marine Lines, Marine Lines, Mumbai, Maharashtra 400020
            <span className="underline text-md font-semibold text-primary">Get Directions</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[24px] md:text-lg  font-semibold">Timings</h3>
          <h3>Mon - Sun</h3>
          <h4>09:00 AM</h4>
          <h4>Photos</h4>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[24px] md:text-lg font-semibold">Modes of Payment</h3>
          <h3 className="flex flex-row">
            Credit Card | Cash | Online Payment | Debit Card
          </h3>
          <h3>Number of Beds - 60</h3>
          <h3>Number of Ambulances - 2</h3>
        </div>
      </div>
    </div>
    <div className="flex bg-white shadow-xl rounded-xl flex-col p-[1rem]">
      <h3 className="text-[24px] md:textlg font-semibold p-[.2rem]">Departments in Apollo Spectra Hospitals</h3>
      <div className="flex flex-wrap gap-2 w-full">
        {Tags.map((t: any, index: any) => {
          return <Tag key={index} number={t.number} name={t.name} />
        })}
      </div>
    </div>
    <div className="flex flex-col gap-4 bg-white shadow-xl rounded-xl w-full">
      <div className="flex flex-row w-full py-[1rem] justify-between items-center">
        <h3 className="text-[16px] md:text-lg font-semibold">Doctors in Apollo Spectra Hospital</h3>
        <h3 onClick={() => router.push("/hospital/12/doctor")} className="text-primary cursor-pointer text-[20px] underline decoration-solid ">View All</h3>
      </div>
      {Array.from({ length: 12 }, (_, index) => (
        <DoctorListCard key={index} />
      ))}
    </div>
    <div className="flex flex-col rounded-xl shadow-xl gap-2 p-[1rem]">
      <h3 className="text-[24px]  font-semibold">Common Questions and Answers</h3>
      {questions.map((q: any, index: any) => {
        return (
          <>
            <Divider orientation="horizontal" />
            <FAQ key={index} question={q.question} ans={q.answer} />
            <Divider orientation="horizontal" />
          </>
        );
      })}
    </div>
  </section >;
}

export default Details;
