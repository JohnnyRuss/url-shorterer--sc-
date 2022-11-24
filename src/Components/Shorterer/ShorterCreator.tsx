import React, { useState } from "react";
import { ErrorType } from "../../hooks/usePostQuery";

import { ShorterCreatorBox } from "./Shorter.styled";
import { Button } from "../Layouts";

interface ShorterCreatorType {
  handleGenerate: (link: string) => void;
  error: ErrorType;
  loading: boolean;
}

const ShorterCreator: React.FC<ShorterCreatorType> = ({
  handleGenerate,
  error,
  loading,
}) => {
  const [val, setVal] = useState("");
  return (
    <ShorterCreatorBox>
      <div className="field-box">
        <input
          onChange={(e) => setVal(e.currentTarget.value)}
          value={val}
          type="text"
          placeholder="Shorten a link here..."
        />
        <Button
          value="shorten it!"
          fig="square"
          disabled={loading}
          onClick={() => {
            handleGenerate(val);
            setVal("");
          }}
        />
      </div>
      {error.isError && <em className="creator-msg">{error.msg}</em>}
    </ShorterCreatorBox>
  );
};

export default ShorterCreator;
