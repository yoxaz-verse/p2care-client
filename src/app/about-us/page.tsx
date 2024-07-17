import React from "react";
import { Image } from "@nextui-org/react";
import { aboutusdata, hospitalDocAbout } from "../../Content/assets";
import { TbWorld } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { PiUsers } from "react-icons/pi";
import { GrAid } from "react-icons/gr";
import { FaRegHandshake, FaUsers } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function AboutUs() {
  return <section className="flex flex-col justify-center gap-8 text-center">
    <h3 className="text-[32px] md:text-[54px] font-[700] text-primary font-bold">Quality Healthcare Made Simple</h3>
    <h3 className="text-md md:text-lg font-semibold">Our Mission</h3>
    <p className="text-md text-center font-[400]">P2care is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>
    <div className="bg-[#F6F6F6] roundex-xl flex flex-row  p-0 md:p-10 justify-around w-full ">
      <div className="flex flex-col justify-center w-2/3">
        <h3 className="text-[32px] md:text-[54px] font-semibold text-start">Health is a Habit</h3>
        <p className="text-md text-start leading-2 md:leading-8">It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope. P2care wants to make this journey easy for every Indian and help them live healthier and longer lives.</p>
      </div>
      <img src={hospitalDocAbout} className="h-[300px] w-[100%] z-2 md:w-[834px] md:h-[700px]" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[34px] md:text-[54px] text-start font-semibold">Our Offerings</h3>
      <div className="grid text-start text-[20px] grid-cols-1 md:grid-cols-2">
        <ol className="list-decimal">
          <li> Comprehensive medical directory with detailed, verified information about more than a lakh doctor partners across the country.</li>
          <li>Online appointment booking at over 9,000 leading hospitals and clinics with doctors who use P2care Prime.</li>
          <li>Online consultation with trusted doctors across 20+ specialties.</li>
          <li>Plus, subscription-based health plans, that provide unlimited online consultations* with doctors 24*7*365.</li>
        </ol>
        <ol className="list-decimal">
          <li>Ray, P2care’s award-winning practice management software, which is used by 10,000+ clinics.</li>
          <li>Insta, a full-stack HIMS solution, which is trusted by 500+ clients across 1,200+ facilities.</li>
          <li>Diagnostic Tests through P2care Associate Labs to get samples collected from the comfort and safety of one’s home.</li>
          <li>Medicine delivery by a network of verified pharmacies across the country.</li>
        </ol>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row w-full gap-[1rem] items-center justify-around">
      <div className="flex flex-row items-center gap-2">
        <TfiWorld size={30} className="fill-blue-400 font-md" />
        <div className="flex flex-col items-center">
          <h3 className="text-[14px] md:text-lg font-semibold">20+</h3>
          <h3 className="text-[14px] md:text-lg">states</h3>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <PiUsers size={30} className="fill-blue-400 font-md" />
        <div className="flex flex-col items-center">
          <h3 className="text-md md:text-lg font-semibold">30 Cr+</h3>
          <h3 className="text-[14px] md:text-md">Patients per year</h3>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <GrAid size={30} className="text-blue-400 font-md" />
        <div className="flex flex-col items-center">
          <h3 className="text-md md:text-lg font-semibold">1L+</h3>
          <h3 className="text-[14px] md:text-md">Doctor partners</h3>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-[24px] lg:text-lg font-semibold">Our Approach to Healthcare</h3>
      <p className="text-sm lg:text-md">Providing high-quality, trusted, and accessible healthcare is our reason for being</p>
      <div className="flex flex-col lg:flex-row w-full gap-[1rem] justify-around">
        <div className="flex flex-col items-center">
          <FaUsers size={30} className="font-md" />
          <div className="flex flex-col items-center">
            <h3 className="text-md md:text-lg font-semibold">Connect</h3>
            <h3 className="text-[14px] md:text-md">We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It’s about the deep connection between doctors and patients that leads to continuous care and sustained, better outcomes.</h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <FaRegHandshake size={30} className="font-md" />
          <div className="flex flex-col items-center">
            <h3 className="text-md md:text-lg font-semibold">Trust</h3>
            <h3 className="text-[14px] md:text-md">P2care works on trust. We are aware of the responsibility placed on us by 30 crore+ patients and over a lakh doctors. We always have and always will do everything we possibly can to uphold this trust.</h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <FaEye size={30} className="font-md" />
          <div className="flex flex-col items-center">
            <h3 className="text-md md:text-lg font-semibold">Transparency</h3>
            <h3 className="text-[14px] md:text-md">We believe in full disclosure. We believe in communicating openly and honestly, and holding ourselves to the highest ethical standards.</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="roundex-xl flex flex-col md:flex-row items-center p-10  justify-around w-full">
      <div className="flex flex-col w-full">
        <h3 className="text-[34px] md:text-[54px] text-start font-semibold">Data privacy and security is our top priority</h3>
        <p className="text-md text-start leading-6 md:leading-8">
          Data privacy and security has always served as one of the founding philosophies of Practo, and we go to great lengths to safeguard the confidentiality and integrity of our users.
        </p>
      </div>
      <Image src={aboutusdata} width={1000} height={1000} className="w-[600px]" />
    </div>
  </section>;
}

export default AboutUs;
