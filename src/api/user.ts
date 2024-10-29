import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchUser = async (): Promise<any> => {
  const { data } = await axiosClient.get("/");
  return data;
};
