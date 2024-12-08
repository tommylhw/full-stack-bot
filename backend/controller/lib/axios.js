const axios = require('axios');

const BASE_URL = 'http://localhost:4040';

const getAxiosInstance = () => {
  return {
    get(method, params) {
      return axios.get(`/${method}`, {
        baseURL: BASE_URL,
        params
      });
    },
    post(method, data) {
      return axios.post(`/${method}`, data, {
        method: 'POST',
        baseURL: BASE_URL,
        url: `/${method}`,
        data
      });
    },
  };
}

module.exports = { axiosInstnace: getAxiosInstance() };