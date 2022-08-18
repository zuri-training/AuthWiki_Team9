import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://authwikibe.rhedwan.com/",
});

export default customFetch;
