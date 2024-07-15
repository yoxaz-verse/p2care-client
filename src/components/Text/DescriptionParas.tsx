import React from "react";

interface DescriptionParagraphProps {
  content: string;
}

function DescriptionParagraph(props: DescriptionParagraphProps) {
  return (
    <p className="font-[400] text-sm lg:text-lg text-bodyText">
      {props.content}
    </p>
  );
}

export default DescriptionParagraph;
