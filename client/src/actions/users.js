import axios from "axios";
import { setUser } from "@redux/actions/users";

export const registration = async (firstName, lastName, phone) => {
  const postData = { firstName, lastName, phone };

  return await axios
    .post("http://localhost:5000/api/auth/registration", postData)
    .then((response) => response.data)
    .catch((error) => error.response.data);
};

export const login = (phone) => {
  return async (dispatch) => {
    return await axios
      .post(`http://localhost:5000/api/auth/login`, {
        phone,
      })
      .then((response) => {
        dispatch(setUser(response.data.user));
        localStorage.setItem("token", response.data.token);

        return response.data;
      })
      .catch((error) => error.response);
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem("token");
    }
  };
};
