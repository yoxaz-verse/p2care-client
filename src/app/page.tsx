"use client";

import {
  content,
  HeaderHeading,
  CausesArr,
  BlogContent,
} from "@/Content/Home/home-page-content";
import Banner from "@/components/Banner/banner";
import CategoryCard, {
  ICategoryCardProps,
} from "@/components/Cards/categoryCard";
import {
  Spacer,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import {
  bannerSales,
  apollo,
  apollo2,
  doctors,
  department,
} from "@/Content/assets";
import DoctorCard, { DoctorCardProps } from "@/components/Cards/DoctorCard";
import HomeHeader from "@/components/Header/HomeHeader";
import BlogCard, { BlogCardProps } from "@/components/Cards/BlogCard";
import DepartmentCard, {
  DepartmentCardProps,
} from "@/components/Cards/DepartmentCard";
import { navigationRoutes } from "@/core/navigationRoutes";
import HospitalViewCard from "@/components/Cards/HospitalViewCard";
import HospitalViewCard2 from "@/components/Cards/HospitalViewCard2";
import Testimonial from "@/components/Cards/Testimonal";
import EnquireModal from "@/components/Enquire";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/core/apiHandler";
import useAuth from "./isAuth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data } = useAuth();
  const { data: getTopDoctors, isLoading } = useQuery({
    queryKey: ["getTopDoctors"],
    queryFn: () => {
      return getData("/doctor/top/client", {});
    },
  });
  const { data: getTopServices, isLoading: isLoadingServices } = useQuery({
    queryKey: ["getTopDoctors"],
    queryFn: () => {
      return getData("/service/top/client", {});
    },
  });
  const { data: getTopHospital, isLoading: isLoadingHospital } = useQuery({
    queryKey: ["getTopHospital"],
    queryFn: () => {
      return getData("/hospital/top/client", {});
    },
  });
  const { data: getDepartment, isLoading: isLoadingDepartment } = useQuery({
    queryKey: ["getDepartment"],
    queryFn: () => {
      return getData("/department/get-all/", {});
    },
  });

  return (
    <main className="">
      <Banner onOpen={onOpen} />
      <EnquireModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Spacer y={10} />
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
        {content.map((c: ICategoryCardProps, index: number) => {
          return (
            <CategoryCard
              key={index}
              background={c.background}
              hover={c.hover}
              image={c.image}
              heading={c.heading}
              link={c.link}
              subHeading={c.subHeading}
            />
          );
        })}
      </section>
      <Spacer y={5} />

      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader
          header={HeaderHeading[0].header}
          link={HeaderHeading[0].link}
          subHeading={HeaderHeading[0].subHeading}
        />
        <Spacer y={5} />
        <div className="grid lg:hidden w-full gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {getTopDoctors?.data.data.slice(0, 2).map((d: any, index: number) => {
            return (
              <DoctorCard
                key={index}
                name={d.name}
                id={d._id}
                image={d.image}
                type={d.type}
              />
            );
          })}
        </div>
        <div className=" hidden lg:grid w-full gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {getTopDoctors?.data.data.map((d: any, index: number) => {
            return (
              <DoctorCard
                key={d._id}
                id={d._id}
                name={d?.name}
                image={d?.image?.path}
                type={d?.department?.name}
              />
            );
          })}
        </div>
        <Spacer y={5} />
        <Image src={bannerSales} className="w-screen" />
      </section>
      <Spacer y={5} />
      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader
          link={HeaderHeading[1].link}
          header={HeaderHeading[1].header}
          subHeading={HeaderHeading[1].subHeading}
        />
        <Spacer y={5} />
        <div className="grid lg:hidden w-full gap-4 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {getTopServices?.data?.data?.map((d: any, index: number) => {
            return (
              <DepartmentCard
                key={index}
                title={d?.name}
                icon={d?.image?.path}
                redirect={navigationRoutes.department + d._id}
              />
            );
          })}
        </div>
        <div className="lg:grid hidden w-full gap-4 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {getTopServices?.data?.data?.map((d: any, index: number) => {
            return (
              <DepartmentCard
                key={index}
                title={d?.name}
                icon={d?.image?.path}
                redirect={navigationRoutes.department + d._id}
              />
            );
          })}
        </div>
      </section>
      <Spacer y={5} />
      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader
          link={HeaderHeading[2].link}
          header={HeaderHeading[2].header}
          subHeading={HeaderHeading[2].subHeading}
        />
        <Spacer y={5} />
        <div className="hidden lg:grid grid-cols-2 gap-5 w-full">
          <div className="flex flex-col gap-5">
            <HospitalViewCard data={getTopHospital?.data.data[0]} />
            <div className="flex flex-row w-full gap-5">
              <HospitalViewCard2 data={getTopHospital?.data?.data[1]} />
              <HospitalViewCard2 data={getTopHospital?.data?.data[2]} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row w-full gap-5">
              <HospitalViewCard2 data={getTopHospital?.data.data[3]} />
              <HospitalViewCard2 data={getTopHospital?.data.data[4]} />
            </div>
            <HospitalViewCard data={getTopHospital?.data.data[5]} />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col gap-5">
            <HospitalViewCard data={getTopHospital?.data.data[0]} />
            <div className="flex flex-row w-full gap-5">
              <HospitalViewCard2 data={getTopHospital?.data.data[1]} />
              <HospitalViewCard2 data={getTopHospital?.data.data[2]} />
            </div>
          </div>
        </div>
      </section>
      <Spacer y={10} />

      <Image src={bannerSales} className="w-screen" />
      <Spacer y={10} />

      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader
          link={HeaderHeading[4].link}
          header={HeaderHeading[4].header}
        />
        <Spacer y={5} />

        <div className="flex flex-col  xl:flex-row gap-4 justify-around">
          <Image src={doctors} className="h-full rounded-xl object-cover" />
          <div className="w-full xl:w-1/2 grid grid-rows-6 gap-[1rem] grid-cols-4 md:grid-cols-4">
            {getDepartment?.data?.data?.data.map((d: any, index: any) => (
              <div
                key={index}
                className="flex flex-col p-[1rem] h-50 justify-center items-center shadow-xl h-full rounded-xl"
              >
                <Image src={d?.image?.path} />
                <h1 className="text-[8px]">{d.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Spacer y={10} />
      {/*
      <section className="flex flex-col  gap-2 items-center">
        <h1 className="text-center text-[27px] lg:text-[54px] font-bold">Testimonials</h1>
        <div className="flex flex-row gap-2">
          <Carousel responsive={responsive}>

            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>

        </div>
      </section>
      */}
      <section className="flex flex-col">
        <HomeHeader
          link={HeaderHeading[3].link}
          header={HeaderHeading[3].header}
        />
        <Spacer y={10} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {BlogContent.map((b: BlogCardProps, index: number) => {
            return (
              <BlogCard
                key={index}
                heading={b.heading}
                description={b.description}
                image={b.image}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
