import axios, { AxiosInstance, AxiosRequestConfig, AxiosHeaders } from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;


// Set the headers
const headers = new AxiosHeaders()
headers.set("Content-Type", "application/json");

export const config: AxiosRequestConfig = {
    baseURL,
    timeout: 30000,
    headers
};

// Create new axios instance
const $http: AxiosInstance = axios.create(config);


export { $http }

