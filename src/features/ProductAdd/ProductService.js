import axios from "axios";

const URL = "http://localhost:5000/api";

const PropertyAdd = async (formData) => {
  console.log(formData);
  const response = await axios.post(URL + "/properties", formData);
  // localStorage.setItem("", JSON.s  tringify(response.data));
  console.log(response);
};

const propertyservice = {
  PropertyAdd,
};

export default propertyservice;
