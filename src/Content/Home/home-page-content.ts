import { ICategoryCardProps } from "@/components/Cards/categoryCard"
import { HomeHeaderProps } from "@/components/Header/HomeHeader"
import { ServiceCardProps } from "@/components/Cards/ServiceCard"
import { blogs1, femaleDoctor01, femaleDoctor02, mainDoctos, mainDoctos1, mainDoctos2, mainDoctos3, maleDoctor01, maleFemaleDoctor01 } from "../assets"
import { DoctorCardProps } from "@/components/Cards/DoctorCard"
import { BlogCardProps } from "@/components/Cards/BlogCard"

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

export const CausesArr: any[] = [
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

export const BlogContent: BlogCardProps[] = [
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description: "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future."
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description: "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future."
  },
  {
    heading: "Why Nike is Making Shoes You can Take Apart",
    image: blogs1,
    description: "The ISPA Link and ISPA Link Axis, examples of design for disassembly, are innovative catalysts that move the brand closer to a circular future."
  }
]
