import { useMutation } from "@tanstack/react-query";
import { fetchUser } from "../api/user";

export const useUser = () => {
  const fetchUserMutation = useMutation({
    mutationFn: () => fetchUser(),
  });

  return fetchUserMutation;
};
