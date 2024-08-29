import axios from "axios";

export const baseUrlExport = "http://localhost:5000/api/v1/web/";

const instance = axios.create({
  baseURL: baseUrlExport,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    IDENTIFIER: "A2hG9tE4rB6kY1sN",
    "ngrok-skip-browser-warning": "123",
    // "IDENTIFIER": "A2hG9tE4rB6kY1sN"
    // You can add more default headers here if needed
  },
});


/* Add an interceptor to set the Authorization header before each request */

instance.interceptors.request.use(
  (config) => {
    // const currentUser = localStorage.getItem("currentUserToken");
    // const token = currentUser;
    const token = localStorage.getItem("clientToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default instance;
