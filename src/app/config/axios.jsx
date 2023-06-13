import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.backendUrl,
});

export default axiosInstance;