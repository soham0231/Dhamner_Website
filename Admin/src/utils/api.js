import axios from "axios";

const API = axios.create({
  baseURL: "https://dhamner-website.onrender.com",
});

// 🔐 Attach token automatically to EVERY request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;