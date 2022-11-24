import { useState } from "react";

export interface Data {
  code: string;
  share_link: string;
  full_share_link: string;
  short_link: string;
  short_link2: string;
  short_link3: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
  original_link: string;
}

export interface ErrorType {
  isError: boolean;
  msg: string;
}

function usePostQuery() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    msg: "",
  });

  async function postData(link: string): Promise<Data | undefined> {
    try {
      if (error.isError)
        setError({
          isError: true,
          msg: "please insert a valid link",
        });

      setLoading(true);

      const { result }: { result: Data } = await (
        await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
          method: "POST",
        })
      ).json();

      return result;
    } catch (error) {
      setError({
        isError: true,
        msg: "please insert a valid link",
      });
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, postData };
}

export default usePostQuery;
