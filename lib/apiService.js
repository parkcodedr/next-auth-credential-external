const Axios = require("axios");

export const instance = Axios.create({
    baseURL: 'http://v2.pepperest.com/EscrowBackend/api',
    timeout: 1000,
  });