import axios from "axios";
import { User } from "../types/user";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchUser = async (filters: {
  gender: string[];
  nationalities: string[];
}): Promise<User> => {
  let url = "/";

  if (filters?.gender.length === 1) {
    url += "?gender=" + filters?.gender[0];
  }

  if (filters?.nationalities.length) {
    const nationalitiesString = filters.nationalities.join(",");
    url += (url.includes("?") ? "&" : "?") + "nat=" + nationalitiesString;
  }
  const { data } = await axiosClient.get(url);
  return data;
};
