import axios from 'axios';
import {DataManager} from 'utils/dataManager';

export const url = 'http://192.168.3.175:4000/'; //local

const APIKit = axios.create({
  baseURL: `${url}api/v1/`,
  timeout: 60000000,
});

APIKit.interceptors.request.use(async config => {
  let accessToken = await DataManager.getAccessToken();

  if (accessToken) {
    config.headers['x-access-token'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default APIKit;
