import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://authwikibe.rhedwan.com/",
});

export default customFetch;
