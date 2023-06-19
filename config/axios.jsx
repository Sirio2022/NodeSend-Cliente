import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.backendURL,
});

export default axiosInstance;