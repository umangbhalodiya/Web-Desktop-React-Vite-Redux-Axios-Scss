import axios from "axios";

const axiosApi = axios.create({
  baseURL: "process.env.VITE_API_URL",
});
export const axiosInstance = axiosApi;

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer your_token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.log("Error response:", error.response);
    // User logs out
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized, redirecting to login...");
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/login";
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);
