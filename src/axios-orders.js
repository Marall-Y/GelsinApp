import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/Marall-Y/GelsinApp/",
});

export default instance;
