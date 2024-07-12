import React from "react";

interface PageHeadingProps {
  heading: string;
}

function PageHeading(props: PageHeadingProps) {
  return (
    <h1 className="font-[600] text-[42px] lg:text-[52px] text-primary">
      {props.heading}
    </h1>
  );
}

export default PageHeading;
