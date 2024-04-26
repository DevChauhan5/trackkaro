import { makeRequest } from "@/lib/axios";

export const fetchUserProfile = () => {
  const response = makeRequest
    .get("/user/profile")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
    return response
};
