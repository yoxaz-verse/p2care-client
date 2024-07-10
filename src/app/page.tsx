"use client"
import { content, Doctors, HeaderHeading, CausesArr, BlogContent } from "@/Content/Home/home-page-content";
import Banner from "@/components/Banner/banner";
import CategoryCard, { ICategoryCardProps } from "@/components/Cards/categoryCard";
import { Button, Spacer, Image } from "@nextui-org/react";
import { smallArrowIcon, bannerSales, apollo, apollo2, doctors, department } from "@/Content/assets";
import DoctorCard, { DoctorCardProps } from "@/components/Cards/DoctorCard";
import HomeHeader from "@/components/Header/HomeHeader";
import ServiceCard, { ServiceProps } from "@/components/Cards/ServicesCard";
import GalleryCard from "@/components/Cards/GalleryCard";
import BlogCard, { BlogCardProps } from "@/components/Cards/BlogCard";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className="">
      <Banner />
      <Spacer y={5} />
      <section className="grid grid-rows-1 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {content.map((c: ICategoryCardProps) => {
          return <CategoryCard
            background={c.background}
            hover={c.hover} image={c.image}
            heading={c.heading}
            subHeading={c.subHeading} />
        })}
      </section>
      <section className="flex flex-col gap-4 py-[2rem] justify-around w-full">
        <HomeHeader
          header={HeaderHeading[0].header}
          subHeading={HeaderHeading[0].subHeading} />
        <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {Doctors.map((d: DoctorCardProps) => {
            return <DoctorCard name={d.name} image={d.image} type={d.type} />
          })}
        </div>
        <div className="flex flex-row w-full justify-center gap-4">
          <Image src={smallArrowIcon} width={20} height={20} alt="arrow" className="rotate-180" />
          <Image src={smallArrowIcon} width={20} height={20} alt="arrow" />
        </div>
        <Image src={bannerSales} className="w-screen" />
      </section>
      <section className="flex flex-col gap-4 py-[2rem] justify-around w-full">
        <HomeHeader
          header={HeaderHeading[1].header}
          subHeading={HeaderHeading[1].subHeading} />
        <div className="grid w-full gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          {CausesArr.map((d: ServiceProps) => {
            return <ServiceCard cause={d.cause} />
          })}
        </div>
      </section>
      <section className="flex flex-col gap-4 py-[2rem] justify-around w-full">
        <HomeHeader
          header={HeaderHeading[2].header}
          subHeading={HeaderHeading[2].subHeading} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <GalleryCard name="Apollo" place="Mumbai" image={apollo} width={"w-full md:w-1/2"} height={"h-[400px]"} />
            <GalleryCard name="Apollo" place="Mumbai" image={apollo2} width={"w-full md:w-1/4"} height={"h-[400px]"} />
            <GalleryCard name="Apollo" place="Mumbai" image={apollo2} width={"w-full md:w-1/4"} height={"h-[400px]"} />
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-4">
            <GalleryCard name="Apollo" place="Mumbai" image={apollo} width={"w-full md:w-1/2"} height={"h-[400px]"} />
            <GalleryCard name="Apollo" place="Mumbai" image={apollo2} width={"w-full md:w-1/4"} height={"h-[400px]"} />
            <GalleryCard name="Apollo" place="Mumbai" image={apollo2} width={"w-full md:w-1/4"} height={"h-[400px]"} />
          </div>
        </div>
        <Image src={bannerSales} className="w-screen" />
      </section>
      <section className="flex flex-col gap-4 py-[2rem] justify-around w-full">
        <h1 className="font-bold text-2xl">Departments</h1>
        <div className="flex flex-col  xl:flex-row gap-4 justify-around">
          <Image src={doctors} className="h-full rounded-xl" />
          <div className="w-full xl:w-1/2 grid grid-rows-6 gap-[1rem] grid-cols-4 md:grid-cols-4">
            {Array.from({ length: 22 }, (_, index) => (
              <div key={index} className="flex flex-col p-[1rem] h-50 justify-center items-center shadow-xl h-full rounded-xl">
                <Image src={department} />
                <h1>Cardiology</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <HomeHeader
          header={HeaderHeading[3].header}
        />
        <div className="flex flex-col md:flex-row p-[1rem] gap-4">
          {BlogContent.map((b: BlogCardProps) => {
            return <BlogCard heading={b.heading} description={b.description} image={b.image} />
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
