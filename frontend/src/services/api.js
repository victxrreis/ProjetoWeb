import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3005",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;