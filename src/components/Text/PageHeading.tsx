import React from "react";

interface PageHeadingProps {
  heading: string;
}

function PageHeading(props: PageHeadingProps) {
  return (
    <h1 className="font-[600] text-[48px] lg:text-[60px] text-primary">
      {props.heading}
    </h1>
  );
}

export default PageHeading;
