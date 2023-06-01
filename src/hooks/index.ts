import axios, { AxiosInstance } from "axios";
export const axiosInstanceAuth: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosInstanceRessources: AxiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosInstanceRessourcesFile: AxiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
export const axiosInstanceHomeworkFile: AxiosInstance = axios.create({
  baseURL: "http://localhost:5002/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
