import { ICategoryCardProps } from "@/components/Cards/categoryCard";
import { HomeHeaderProps } from "@/components/Header/HomeHeader";
import {
  blogs1,
  femaleDoctor01,
  femaleDoctor02,
  mainDoctos,
  mainDoctos1,
  mainDoctos2,
  mainDoctos3,
  maleDoctor01,
  maleFemaleDoctor01,
  pediatrics,
} from "../assets";
import { DoctorCardProps } from "@/components/Cards/DoctorCard";
import { BlogCardProps } from "@/components/Cards/BlogCard";
import { title } from "process";

export const content: ICategoryCardProps[] = [
  {
    heading: "Doctors",
    subHeading: "Contect within 60 seconds",
    image: femaleDoctor01,
    background: "bg-primary",
    hover: "bg-white",
  },
  {
    heading: "Services",
    subHeading: "Confirmed Appointments",
    image: maleDoctor01,
    background: "bg-secondary",
    hover: "bg-white",
  },
  {
    heading: "Hospitals",
    subHeading: "Essentials at your doorstep.",
    image: maleFemaleDoctor01,
    background: "bg-primary",
    hover: "bg-white",
  },
  {
    heading: "Departments",
    subHeading: "Simple pickup at your home.",
    image: femaleDoctor02,
    background: "bg-secondary",
    hover: "bg-white",
  },
];

export const Services = [];

export const Doctors: DoctorCardProps[] = [
  {
    name: "Jim Carry",
    type: "Orthodontist",
    image: mainDoctos,
  },
  {
    name: "Wade Warren",
    type: "Endodontist.",
    image: mainDoctos1,
  },
  {
    name: "Jenny Wilson",
    type: "Periodontist.",
    image: mainDoctos2,
  },
  {
    name: "Jacob Jones",
    type: "Pediatric Dentist",
    image: mainDoctos3,
  },
];

export const CausesArr: any[] = [
  {
    title: "Pediatrics",
    redirect: "/department-id",
    icon: pediatrics,
  },
  {
    title: "Pediatrics",
    redirect: "/department-id",
    icon: pediatrics,
  },
  {
    title: "Pediatrics",
    redirect: "/department-id",
    icon: pediatrics,
  },
  {
    title: "Pediatrics",
    redirect: "/department-id",
    icon: pediatrics,
  },
  {
    title: "Pediatrics",
    redirect: "/department-id",
    icon: pediatrics,
  },
  {
    title: "Pediatrics",
    redirect: "/department-id",
    icon: pediatrics,
  },
];
export const HeaderHeading: HomeHeaderProps[] = [
  {
    header: "Our Top Doctors",
    subHeading:
      "We use only the best quality materials on the market in order to provide the best products to our patients.",
    link: "/doctor",
  },
  {
    header: "Services",
    subHeading:
      "Private online consultation with verified doctors in all specialists.",
    link: "/service",
  },
  {
    header: "Top Hospitals",
    subHeading:
      "We use only the best quality materials on the market in order to provide the best products to our patients.",
    link: "/hospital",
  },
  {
    header: "Blogs",
    link: "/blog",
  },
  {
    header: "Departments",
    link: "/department",
  },
];

export const BlogContent: BlogCardProps[] = [
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
];
export const BlogContentPage: BlogCardProps[] = [
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description:
      "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future.",
  },
];
