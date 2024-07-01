import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7AvXHEb3kiBLtgpF0CtlCrM1lWc2h-VJBSLqs7ApyY4',
  },
});

export default unsplashApi;
