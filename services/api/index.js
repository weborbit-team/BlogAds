import axios from "../";

const requestHandler = (request) => {
  const token = localStorage.getItem("token");
  if (token) {
    // Modify request here
    request.headers.Authorization = `Bearer ${token}`;
    request.headers["x-access-token"] = `${token}`;
  }
  return request;
};

axios.interceptors.request.use((request) => requestHandler(request));
export default axios;
