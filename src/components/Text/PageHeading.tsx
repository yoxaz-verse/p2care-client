import React from "react";

interface PageHeadingProps {
  heading: string;
}

function PageHeading(props: PageHeadingProps) {
  return (
    <h1 className="font-[600] text-[27px] lg:text-[54px] text-primary">
      {props.heading}
    </h1>
  );
}

export default PageHeading;
