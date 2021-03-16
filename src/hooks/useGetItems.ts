import useSWR from "swr";
import { baseUrl, fetcher } from "../utils/api";

export const useGetItems = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }
  const url = baseUrl + path;
  console.log(url);

  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
