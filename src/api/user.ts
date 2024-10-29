import axios from "axios";
import { User } from "../types/user";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchUser = async ({
  gender,
  nationalities,
}: {
  gender: string[];
  nationalities: string[];
}): Promise<User> => {
  const params = new URLSearchParams();

  if (gender.length === 1) {
    params.append("gender", gender[0]);
  }

  if (nationalities.length) {
    params.append("nat", nationalities.join(","));
  }

  const { data } = await axiosClient.get(`/?${params.toString()}`);
  return data;
};
