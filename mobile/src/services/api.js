import axios from "axios";

const api = axios.create({
    baseURL :"http://192.168.1.63:5000/api",
//   baseURL: "http://localhost:5000/api",

  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;