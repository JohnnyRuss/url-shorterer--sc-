import React, { useState } from "react";
import { Data } from "../../hooks/usePostQuery";

import { ShorteredListBox } from "./Shorter.styled";
import ShorteredListItem from "./ShorteredListItem";

interface ShorteredListType {
  data: Data[];
}

const ShorteredList: React.FC<ShorteredListType> = ({ data }) => {
  const [isCopied, setIsCopied] = useState("");

  function handleCopy(shortLink: string, id: string) {
    navigator.clipboard.writeText(shortLink);
    setIsCopied(id);
  }

  return (
    <ShorteredListBox>
      {data.map((link) => (
        <ShorteredListItem
          link={link}
          handleCopy={handleCopy}
          isCopied={isCopied}
          key={link.original_link}
        />
      ))}
    </ShorteredListBox>
  );
};

export default ShorteredList;
