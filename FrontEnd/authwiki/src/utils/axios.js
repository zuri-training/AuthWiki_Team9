import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://authwiki9be.zurifordummies.com",
});

export default customFetch;
