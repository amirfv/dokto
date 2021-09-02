import axios from "axios";

const devUrl = "http://localhost:5000/api";
const prodUrl = "";

const URL = devUrl;
const config = { withCredentials: true };

export const apis = {
  urlRegister: `${URL}/auth/register`,
  urlLogin: `${URL}/auth/login`,
  urlLogout: `${URL}/auth/logout`,
  urlLoggedIn: `${URL}/auth/loggedin`,
  urlAdmin: `${URL}/admin`,

  register: async (data) => {
    let response;
    try {
      const { data: user } = await axios.post(apis.urlRegister, data, config);
      response = user;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  login: async (data) => {
    let response;
    try {
      const { data: user } = await axios.post(apis.urlLogin, data, config);
      response = user;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  logout: async () => await axios.post(apis.urlLogout, {}, config),
  loggedIn: async () => await axios.get(apis.urlLoggedIn, config),
  adminCreate: async (data) => {
    let response;
    try {
      const { data: admin } = await axios.post(apis.urlAdmin, data, config);
      response = admin.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  adminFindOne: async (data) => await axios.get(`${apis.urlAdmin}/${data}`, config),
};
