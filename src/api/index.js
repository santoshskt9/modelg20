import axios from "axios";
import { toast } from "react-hot-toast";
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:2100/",
  timeout: 25000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
let token = localStorage.getItem("token") || "";
export const apiAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:2100/",
  timeout: 25000,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: token,
  },
});
export async function postInstituteRegister(data) {
  try {
    const res = await api.post("register/institution", data);
    return res;
  } catch (error) {
    return error;
  }
}
export async function postCampusRegister(data) {
  try {
    const res = await api.post("register/campussherpa", data);
    return res;
  } catch (error) {
    return error;
  }
}
export async function getResourcesLibrary() {
  const res = await api.get("content/resource");
  return res;
}
export async function getYouthGallery() {
  const res = await api.get("content/youthgallery");
  return res;
}
