import {DataManagersKeys} from './dataManagersKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataManager = {
  async setAccessToken(data) {
    return await AsyncStorage.setItem(DataManagersKeys.access_token, data);
  },
  async getAccessToken() {
    return await AsyncStorage.getItem(DataManagersKeys.access_token);
  },
  async setUserData(data) {
    return await AsyncStorage.setItem(DataManagersKeys.user_data, data);
  },
  async getUserData() {
    return await AsyncStorage.getItem(DataManagersKeys.user_data);
  },
  async setFirstTime() {
    return await AsyncStorage.setItem(DataManagersKeys.first_time, 'false');
  },
  async getFirstTime() {
    return await AsyncStorage.getItem(DataManagersKeys.first_time);
  },
  async removeData() {
    await AsyncStorage.removeItem(DataManagersKeys.access_token);
    await AsyncStorage.removeItem(DataManagersKeys.user_data);
  },
};
