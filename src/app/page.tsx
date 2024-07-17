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
import { Spacer, Image, useDisclosure, Modal, ModalContent, ModalFooter, ModalHeader, ModalBody, Button, Input, Textarea } from "@nextui-org/react";
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

export default function Home() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <main className="">
      <Banner onOpen={onOpen} />
      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Enquire Us</ModalHeader>
              <ModalBody>
                <form className="flex flex-col gap-4">
                  <Input
                    className="bg-white rounded-none"
                    variant="underlined"
                    placeholder="Full Name"
                  />
                  <Input
                    className="bg-white rounded-none"
                    variant="underlined"
                    placeholder="Email"
                  />
                  <Textarea
                    className="bg-white rounded-none"
                    variant="underlined"
                    placeholder="Message"
                    cols={20}
                  />
                  <Button color="primary" radius="full" className="p-[1rem]">
                    Submit
                  </Button>
                </form>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Enquire
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
          {Doctors.slice(0, 2).map((d: DoctorCardProps, index: number) => {
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
        <div className=" hidden lg:grid w-full gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {Doctors.slice(0, 4).map((d: DoctorCardProps, index: number) => {
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
          link={HeaderHeading[1].link}
          header={HeaderHeading[1].header}
          subHeading={HeaderHeading[1].subHeading}
        />
        <Spacer y={5} />
        <div className="grid lg:hidden w-full gap-4 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {CausesArr.slice(0, 3).map(
            (d: DepartmentCardProps, index: number) => {
              return (
                <DepartmentCard
                  key={index}
                  title={d.title}
                  icon={d.icon}
                  redirect={navigationRoutes.department + "department-id"}
                />
              );
            }
          )}
        </div>
        <div className="lg:grid hidden w-full gap-4 grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {CausesArr.slice(0, 6).map(
            (d: DepartmentCardProps, index: number) => {
              return (
                <DepartmentCard
                  key={index}
                  title={d.title}
                  icon={d.icon}
                  redirect={navigationRoutes.department + "department-id"}
                />
              );
            }
          )}
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
            <HospitalViewCard />
            <div className="flex flex-row w-full gap-5">
              <HospitalViewCard2 />
              <HospitalViewCard2 />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row w-full gap-5">
              <HospitalViewCard2 />
              <HospitalViewCard2 />
            </div>
            <HospitalViewCard />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex flex-col gap-5">
            <HospitalViewCard />
            <div className="flex flex-row w-full gap-5">
              <HospitalViewCard2 />
              <HospitalViewCard2 />
            </div>
          </div>
        </div>
      </section>
      <Spacer y={10} />

      <Image src={bannerSales} className="w-screen" />
      <Spacer y={10} />

      <section className="flex flex-col gap-4  justify-around w-full">
        <HomeHeader link={HeaderHeading[4].link} header={HeaderHeading[4].header} />
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
      <section className="flex flex-col p-[1rem] gap-2 items-center">
        <h1 className="text-center text-[27px] lg:text-[54px] font-bold">Testimonials</h1>
        <div className="flex flex-row gap-2">
          <Testimonial />
        </div>
      </section>
      <section className="flex flex-col">
        <HomeHeader link={HeaderHeading[3].link} header={HeaderHeading[3].header} />
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
