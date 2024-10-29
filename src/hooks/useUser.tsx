import { useMutation } from "@tanstack/react-query";
import { fetchUser } from "../api/user";

export const useUser = () => {
  const fetchUserMutation = useMutation({
    mutationFn: (filters: { gender: string[]; nationalities: string[] }) =>
      fetchUser(filters),
  });

  return fetchUserMutation;
};
