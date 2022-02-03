import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
