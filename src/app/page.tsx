"use client"
import { content, Doctors, HeaderHeading, CausesArr } from "@/Content/Home/home-page-content";
import Banner from "@/components/Banner/banner";
import CategoryCard, { ICategoryCardProps } from "@/components/Cards/categoryCard";
import { Button, Spacer, Image } from "@nextui-org/react";
import { smallArrowDarkIcon, smallArrowIcon, bannerSales } from "@/Content/assets";
import DoctorCard, { DoctorCardProps } from "@/components/Cards/DoctorCard";
import HomeHeader from "@/components/Header/HomeHeader";
import ServiceCard, { ServiceProps } from "@/components/Cards/ServicesCard";

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

      </section>
    </main>
  );
}
