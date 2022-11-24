import React, { useState, useRef, useEffect } from "react";
import usePostQuery from "../../hooks/usePostQuery";
import { Data } from "../../hooks/usePostQuery";

import ShorteredList from "./ShorteredList";
import ShorterCreator from "./ShorterCreator";
import { ShortererBox, Spinner } from "./Shorter.styled";

interface ShortererType {}

const Shorterer: React.FC<ShortererType> = (props) => {
  const [allData, setAllData] = useState<Data[]>([]);
  const expandCount = useRef<number>(NaN);
  const [data, setData] = useState<Data[]>(allData.slice(0, 3));
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { loading, error, postData } = usePostQuery();

  async function handleGenerate(link: string) {
    const data = await postData(link);

    if (!data) return;

    setAllData((prev) => [data, ...prev]);
  }

  function handleExpand() {
    if (data.length > 3) {
      setIsExpanded(false);
      setData(allData.slice(0, 3));
    } else {
      setData(allData.slice(0, allData.length));
      setIsExpanded(true);
    }
  }

  useEffect(() => {
    expandCount.current = allData.length - 3;

    if (!isExpanded && data.length >= 3) setData(allData.slice(0, 3));
    else setData(allData);
  }, [allData]);

  return (
    <ShortererBox>
      <div className="shorterer-container">
        <ShorterCreator
          handleGenerate={handleGenerate}
          error={error}
          loading={loading}
        />
        {loading && <Spinner />}
        <ShorteredList data={data} />
        {expandCount.current > 0 && (
          <button onClick={handleExpand} className="expand-btn">
            {isExpanded ? "show less" : `show more (+${expandCount.current})`}
          </button>
        )}
      </div>
    </ShortererBox>
  );
};

export default Shorterer;
