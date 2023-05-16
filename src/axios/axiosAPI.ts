import axios from "axios";

const ajax = axios.create({
  baseURL:
    "https://www.googleapis.com/books/v1/volumes?q=a+very+short+introduction",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

ajax.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default ajax;
