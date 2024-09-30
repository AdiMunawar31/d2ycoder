import axios, { InternalAxiosRequestConfig } from "axios";

const apiD2Y = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

apiD2Y.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { apiKey } = config.headers || {};

    if (apiKey) {
      config.headers["x-api-key"] = apiKey as string;
      delete config.headers.apiKey;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiD2Y.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default apiD2Y;
