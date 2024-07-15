"use client";
import { Button, Spacer } from "@nextui-org/react";
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
    <div>
      <div className="flex flex-row w-full  justify-between">
        <h2 className="font-[700] text-[24px] lg:text-[54px]">{header}</h2>
        <div className="flex flex-row gap-2">
          <Button
          onClick={() => handleClick()}
            color="primary"
            className="rounded-2xl lg:rounded-3xl w-[10vw]"
          >
            View All
          </Button>
        </div>
      </div>
      <Spacer y={2} />
      {subHeading && (
        <p className="font-[500] text-[16px] lg:text-[20px]">{subHeading}</p>
      )}
    </div>
  );
}
