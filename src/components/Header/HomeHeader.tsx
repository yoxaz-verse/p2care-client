import { smallArrowDarkIcon } from "@/Content/assets";
import { Button, Image } from "@nextui-org/react";

export interface HomeHeaderProps {
  header: any;
  subHeading?: any;
}

export default function HomeHeader({ header, subHeading }: HomeHeaderProps) {
  return (
    <div className="flex flex-row w-full items-center justify-around">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-bold">{header}</h1>
        {subHeading && <p className="text-md md:text-lg">{subHeading}</p>}
      </div>
      <div className="flex flex-row gap-2">
        <Button color="primary" className="rounded-3xl p-[.1rem] w-[10vw]">
          View All
        </Button>
        <Button isIconOnly className="rounded-full" color="primary">
          <Image src={smallArrowDarkIcon} alt="icon" width={10} height={10} />
        </Button>
      </div>
    </div>
  );
}
