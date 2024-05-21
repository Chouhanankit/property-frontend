import axios from "axios";

const URL = "http://localhost:5000/api";

const register = async (formData) => {
  const response = await axios.post(URL + "user/register", formData);
  localStorage.setItem("users", JSON.stringify(response.data));
  console.log(response);
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(URL + "/user/login", formData);
  localStorage.setItem("users", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
