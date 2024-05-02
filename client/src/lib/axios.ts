import axios from "axios"

export const makeRequest = axios.create({
  baseURL: `/api/v1`,
  withCredentials: true,
})

makeRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.message) {
      throw {
        message: error.response.data.message,
        status: error.response.status,
      }
    }
    throw {
      status: 500,
      message: "Internal server error",
    }
  },
)