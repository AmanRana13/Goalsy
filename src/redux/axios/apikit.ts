import axios from 'axios';
import {Alert} from 'react-native';
import constants, {popupType} from 'theme/constants';
import {DataManager} from 'utils/dataManager';
import networkUtils from 'utils/networkUtils';
import {ShowAlertMessage} from 'utils/showAlertMessage';

export const url = 'http://192.168.3.175:9007/'; //local
export const SOCKET_BASE_URL = 'http://192.168.3.175:9007'; //local

// export const url = 'http://1.6.98.141:9007/'; //dell

// export const SOCKET_BASE_URL = 'http://1.6.98.141:9007'; //dell

const APIKit = axios.create({
  baseURL: `${url}api/v1/`,
  timeout: 60000000,
});

APIKit.interceptors.request.use(async (config: any) => {
  let accessToken = await DataManager.getAccessToken();
  if (accessToken) {
    config.headers['x-access-token'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default APIKit;
