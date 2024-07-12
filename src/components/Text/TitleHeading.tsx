import React from "react";

interface TitleHeadingProps {
  heading: string;
}

function TitleHeading(props: TitleHeadingProps) {
  return (
    <h2 className="font-[700] text-[32px] lg:text-[54px] text-primary">
      {props.heading}
    </h2>
  );
}

export default TitleHeading;
