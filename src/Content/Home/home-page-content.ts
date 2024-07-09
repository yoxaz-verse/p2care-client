import { ICategoryCardProps } from "@/components/Cards/categoryCard"
import { HomeHeaderProps } from "@/components/Header/HomeHeader"
import { ServiceProps } from "@/components/Cards/ServicesCard"
import { femaleDoctor01, femaleDoctor02, mainDoctos, mainDoctos1, mainDoctos2, mainDoctos3, maleDoctor01, maleFemaleDoctor01 } from "../assets"
import { DoctorCardProps } from "@/components/Cards/DoctorCard"

export const content: ICategoryCardProps[] = [
  {
    heading: "Doctors",
    subHeading: "Contect within 60 seconds",
    image: femaleDoctor01,
    background: "bg-primary",
    hover: "bg-secondary-foreground"
  },
  {
    heading: "Services",
    subHeading: "Confirmed Appointments",
    image: maleDoctor01,
    background: "bg-primary-500",
    hover: "bg-primary-400",
  },
  {
    heading: "Hospitals",
    subHeading: "Essentials at your doorstep.",
    image: maleFemaleDoctor01,
    background: "bg-primary-500",
    hover: "bg-secondary-foreground",
  },
  {
    heading: "Departments",
    subHeading: "Simple pickup at your home.",
    image: femaleDoctor02,
    background: "bg-[#3EBAFF]",
    hover: "bg-[#8ED2CF]"
  }
]


export const Services = [

];

export const Doctors: DoctorCardProps[] = [
  {
    name: "Jim Carry",
    type: "Orthodontist",
    image: mainDoctos
  },
  {
    name: "Wade Warren",
    type: "Endodontist.",
    image: mainDoctos1
  },
  {
    name: "Jenny Wilson",
    type: "Periodontist.",
    image: mainDoctos2
  },
  {
    name: "Jacob Jones",
    type: "Pediatric Dentist",
    image: mainDoctos3
  }
]

export const CausesArr: ServiceProps[] = [
  {
    cause: "Period doubts or Pregnancy"
  },
  {
    cause: "Acne, pimple or skin issues"
  },
  {
    cause: "Performance issues in bed"
  },
  {
    cause: "Cold, cough or fever"
  },
  {
    cause: "Child not feeling well"
  },
  {
    cause: "Depression or anxiety"
  }
]
export const HeaderHeading: HomeHeaderProps[] = [
  {
    header: "Our Top Doctors",
    subHeading: "We use only the best quality materials on the market in order to provide the best products to our patients."
  },
  {
    header: "Services",
    subHeading: "Private online consultation with verified doctors in all specialists."
  },
  {
    header: "Top Hospitals",
    subHeading: "We use only the best quality materials on the market in order to provide the best products to our patients."
  },
  {
    header: "Blogs"
  }
]
