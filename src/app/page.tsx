"use client";

import {
  content,
  Doctors,
  HeaderHeading,
  CausesArr,
  BlogContent,
} from "@/Content/Home/home-page-content";
import Banner from "@/components/Banner/banner";
import CategoryCard, {
  ICategoryCardProps,
} from "@/components/Cards/categoryCard";
import { Spacer, Image } from "@nextui-org/react";
import {
  bannerSales,
  apollo,
  apollo2,
  doctors,
  department,
} from "@/Content/assets";
import DoctorCard, { DoctorCardProps } from "@/components/Cards/DoctorCard";
import HomeHeader from "@/components/Header/HomeHeader";
import GalleryCard from "@/components/Cards/GalleryCard";
import BlogCard, { BlogCardProps } from "@/components/Cards/BlogCard";
import DepartmentCard, {
  DepartmentCardProps,
} from "@/components/Cards/DepartmentCard";
import { navigationRoutes } from "@/core/navigationRoutes";
import { isMobile, isTablet } from "@/Utils/screenSize";

export default function Home() {
  return (
    <main className="">
      <Banner />
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
              subHeading={c.subHeading}
            />
          );
        })}
      </section>
      <Spacer y={5} />

      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader
          header={HeaderHeading[0].header}
          subHeading={HeaderHeading[0].subHeading}
        />
        <Spacer y={5} />
        <div className="grid w-full gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {isMobile() || isTablet()
            ? Doctors.slice(0, 2).map((d: DoctorCardProps, index: number) => {
              return (
                <DoctorCard
                  key={index}
                  name={d.name}
                  image={d.image}
                  type={d.type}
                />
              );
            })
            : Doctors.map((d: DoctorCardProps, index: number) => {
              return (
                <DoctorCard
                  key={index}
                  name={d.name}
                  image={d.image}
                  type={d.type}
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
          header={HeaderHeading[1].header}
          subHeading={HeaderHeading[1].subHeading}
        />
        <Spacer y={5} />
        <div className="grid w-full gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          {CausesArr.map((d: DepartmentCardProps, index: number) => {
            return (
              <DepartmentCard
                key={index}
                title={d.title}
                icon={d.icon}
                redirect={navigationRoutes.department + "department-id"}
              />
            );
          })}
        </div>
      </section>
      <Spacer y={5} />
      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader
          header={HeaderHeading[2].header}
          subHeading={HeaderHeading[2].subHeading}
        />
        <Spacer y={5} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <GalleryCard
              name="Apollo"
              place="Mumbai"
              image={apollo}
              width={"w-full md:w-1/2"}
              height={"h-[400px]"}
            />
            <GalleryCard
              name="Apollo"
              place="Mumbai"
              image={apollo2}
              width={"w-full md:w-1/4"}
              height={"h-[400px]"}
            />
            <GalleryCard
              name="Apollo"
              place="Mumbai"
              image={apollo2}
              width={"w-full md:w-1/4"}
              height={"h-[400px]"}
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-4">
            <GalleryCard
              name="Apollo"
              place="Mumbai"
              image={apollo}
              width={"w-full md:w-1/2"}
              height={"h-[400px]"}
            />
            <GalleryCard
              name="Apollo"
              place="Mumbai"
              image={apollo2}
              width={"w-full md:w-1/4"}
              height={"h-[400px]"}
            />
            <GalleryCard
              name="Apollo"
              place="Mumbai"
              image={apollo2}
              width={"w-full md:w-1/4"}
              height={"h-[400px]"}
            />
          </div>
        </div>
      </section>
      <Spacer y={10} />

      <Image src={bannerSales} className="w-screen" />
      <Spacer y={10} />

      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader header={HeaderHeading[4].header} />
        <Spacer y={5} />

        <div className="flex flex-col  xl:flex-row gap-4 justify-around">
          <Image src={doctors} className="h-full rounded-xl object-cover" />
          <div className="w-full xl:w-1/2 grid grid-rows-6 gap-[1rem] grid-cols-4 md:grid-cols-4">
            {Array.from({ length: 22 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col p-[1rem] h-50 justify-center items-center shadow-xl h-full rounded-xl"
              >
                <Image src={department} />
                <h1 className="text-[8px]">Cardiology</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Spacer y={10} />
      <section className="flex flex-col">
        <HomeHeader header={HeaderHeading[3].header} />
        <Spacer y={10} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
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
