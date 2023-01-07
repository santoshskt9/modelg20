import axios from "axios";
import { toast } from "react-hot-toast";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:2100/",
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export async function postInstituteRegister(data) {
  return await api.post("register/institution", data);
}
export async function postCampusRegister(data) {
  return await api.post("register/campussherpa", data);
}
