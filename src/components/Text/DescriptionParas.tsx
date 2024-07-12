import React from "react";

interface DescriptionParagraphProps {
  content: string;
}

function DescriptionParagraph(props: DescriptionParagraphProps) {
  return (
    <p className="font-[400] text-[25px] lg:text-[32px] text-bodyText">
      {props.content}
    </p>
  );
}

export default DescriptionParagraph;
