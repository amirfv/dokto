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
  urlSymptom: `${URL}/symptom`,
  urlService: `${URL}/service`,

  // AUTH
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

  // ADMIN
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
  adminFindOne: async (data) => {
    let response;
    try {
      const { data: admin } = await axios.get(`${apis.urlAdmin}/${data}`, config);
      response = admin.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },

  // SYMPTOM
  symptomCreate: async (data) => {
    let response;
    try {
      const { data: symptom } = await axios.post(apis.urlSymptom, data, config);
      response = symptom.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  symptomFindAll: async () => {
    let response;
    try {
      const { data: symptoms } = await axios.get(apis.urlSymptom);
      response = symptoms.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  symptomFindOne: async (data) => {
    let response;
    try {
      const { data: symptom } = await axios.get(`${apis.urlSymptom}/${data}`);
      response = symptom.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  symptomUpdate: async (data, id) => {
    let response;
    try {
      const { data: symptom } = await axios.put(`${apis.urlSymptom}/${id}`, data, config);
      response = symptom.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  symptomRemove: async (data) => {
    let response;
    try {
      const { data: symptom } = await axios.delete(`${apis.urlSymptom}/${data}`, config);
      response = symptom.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },

  // SERVICE
  serviceCreate: async (data) => {
    let response;
    try {
      const { data: service } = await axios.post(apis.urlService, data, config);
      response = service.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  serviceFindAll: async () => {
    let response;
    try {
      const { data: service } = await axios.get(apis.urlService);
      response = service.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  serviceFindOne: async (data) => {
    let response;
    try {
      const { data: service } = await axios.get(`${apis.urlService}/${data}`);
      response = service.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  serviceUpdate: async (data, id) => {
    let response;
    try {
      const { data: service } = await axios.put(`${apis.urlService}/${id}`, data, config);
      response = service.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
  serviceRemove: async (data) => {
    let response;
    try {
      const { data: service } = await axios.delete(`${apis.urlService}/${data}`, config);
      response = service.data;
    } catch (error) {
      response = { error: true, message: error.response.data.error };
    }
    return response;
  },
};
