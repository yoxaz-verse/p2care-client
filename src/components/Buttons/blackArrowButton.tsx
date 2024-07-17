import { smallArrowDarkIcon } from "@/content/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

interface IBlackArrowButtonProps {
  isFullWidth?: boolean;
}

function BlackArrowButton(props: IBlackArrowButtonProps) {
  return (
    <Button
      className={`rounded-full bg-dark min-w-max max-w-${
        props.isFullWidth ? "full" : "max"
      } p-3 lg:p-4 h-auto `}
    >
      <Image
        src={smallArrowDarkIcon}
        alt="small_arrow"
        width={1000}
        height={1000}
        className="p-0 m-0 w-2 h-2"
      />
    </Button>
  );
}

export default BlackArrowButton;
