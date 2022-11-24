import React from "react";
import { Data } from "../../hooks/usePostQuery";

import { Button } from "../Layouts";

interface ShorteredListItemType {
  link: Data;
  handleCopy: (shortLink: string, id: string) => void;
  isCopied: string;
}

const ShorteredListItem: React.FC<ShorteredListItemType> = ({
  link,
  handleCopy,
  isCopied,
}) => {
  return (
    <li className="shortered-list--item">
      <p className="shortered-list--item__links">
        <span>{link.original_link}</span>
        <span>{link.short_link}</span>
      </p>
      <Button
        value={isCopied === link.original_link ? "copied!" : "copy"}
        fig="square"
        onClick={() => handleCopy(link.short_link, link.original_link)}
        isDone={isCopied === link.original_link}
      />
    </li>
  );
};

export default ShorteredListItem;
