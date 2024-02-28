import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface OptionType {
  method: string;
  body: undefined | number | any;
}
type FetchReturnType = [
  { response: any; isLoading: boolean; error: string | null },
  (options?: OptionType) => void
];

export const useFetch = (url: string): FetchReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [response, setResponse] = useState<null | any>(null);
  const [options, setOptions] = useState<OptionType>({
    method: "",
    body: null,
  });

  const doFetch = useCallback((options = { method: "", body: null }) => {
    setIsLoading(true);
    setOptions({
      method: options.method,
      body: options.body,
    });
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const getData = async () => {
      try {
        if (options.method.length === 0) {
          const res = (await axios.get(url)).data;
          setResponse(res);
        } else {
          if (options.method === "POST") {
            const res = await axios.post(url, options.body);
            setResponse(res);
          }
          if (options.method === "DELETE") {
            const res = await axios.delete(url, options.body);
            setResponse(res);
          }
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          setError(axiosError.message);
        } else {
          setError("Error on Fetching");
        }
      }
      setIsLoading(false);
    };
    getData();
  }, [isLoading, options, url]);
  return [{ response, isLoading, error }, doFetch];
};
