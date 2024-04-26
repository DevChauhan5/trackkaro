import { makeRequest } from "@/lib/axios";

export const fetExpenseList = () => {
  const response = makeRequest
    .get("expense/list-expenses")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return response;
};
