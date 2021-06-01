import axiosLib from "axios";

const axios = axiosLib.create({
  method: "POST",
  baseURL: "https://git.io/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export { axios };
