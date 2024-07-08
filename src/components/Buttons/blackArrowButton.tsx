import { smallArrowDarkIcon } from "@/Content/assets";
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
      } p-4 `}
    >
      <Image
        src={smallArrowDarkIcon}
        alt="small_arrow"
        width={10}
        height={10}
        className="p-0 m-0"
      />
    </Button>
  );
}

export default BlackArrowButton;
