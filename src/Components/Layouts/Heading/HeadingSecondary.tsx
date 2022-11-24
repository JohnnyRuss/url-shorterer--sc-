import React from "react";
import { HeadingSec } from "./Heading.styled";

interface HeadingSecondaryType {
  value: string;
}

const HeadingSecondary: React.FC<HeadingSecondaryType> = ({ value }) => {
  return <HeadingSec data-heading-sec>{value}</HeadingSec>;
};

export default HeadingSecondary;
