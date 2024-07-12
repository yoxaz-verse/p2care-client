import React from "react";

interface ColourCardProps {
  colour?: string;
  width?: string;
  height?: string;
}

function ColourCard(props: ColourCardProps) {
  return (
    <div
      className={`
        rounded-xl
        ${props.width ?? "w-full"}
        ${props.height ?? "h-full"}
        ${props.colour ?? "bg-cyan-200"}`}
    ></div>
  );
}

export default ColourCard;
