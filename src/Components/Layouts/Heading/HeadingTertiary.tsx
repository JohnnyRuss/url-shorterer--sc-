import React from "react";
import { HeadingTer } from "./Heading.styled";

interface HeadingTertiaryType {
  value: string;
}

const HeadingTertiary: React.FC<HeadingTertiaryType> = ({ value }) => {
  return <HeadingTer data-heading-ter>{value}</HeadingTer>;
};

export default HeadingTertiary;
