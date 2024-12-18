import axios from "axios";
export const baseUrl = "https://numislat.onrender.com/api/";

export const api = axios.create({
  baseURL: baseUrl,
});
