import axios from "./";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const testApi = {
  getTestApi(data) {
    return axios.get("/test", { params: data, ...config });
  },
};
export default testApi;
