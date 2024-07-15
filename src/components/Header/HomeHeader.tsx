import { smallArrowDarkIcon } from "@/Content/assets";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export interface HomeHeaderProps {
  header: any;
  subHeading?: any;
  link?: any;
}

export default function HomeHeader({ header, subHeading, link }: HomeHeaderProps) {
  const router = useRouter();
  const handleClick = () => {
    if (link) {
      router.push(link)
    }
  }
  return (
    <div className="flex flex-row w-full items-center p-4 justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-4xl font-bold">{header}</h3>
        {subHeading && <p className="text-md md:text-lg">{subHeading}</p>}
      </div>
      <div className="flex flex-row gap-2">
        <Button onClick={() => handleClick()} color="primary" className="rounded-3xl p-[.1rem] w-[10vw]">
          View All
        </Button>
        <Button isIconOnly className="rounded-full" color="primary">
          <Image src={smallArrowDarkIcon} alt="icon" width={10} height={10} />
        </Button>
      </div>
    </div >
  );
}
