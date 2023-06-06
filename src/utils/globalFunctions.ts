import {Alert, Dimensions, Linking, Share} from 'react-native';
import {reset} from 'routes/navigationServices';
import {DataManager} from './dataManager';
import ApiConstants from 'theme/apiConstants';
import {popupType, routesConstants} from 'theme/constants';
import {ShowAlertMessage} from './showAlertMessage';

export var dispatch: any = null;

export const setDispatch = (data: any) => {
  dispatch = data;
};

export const openLinks = (url: string) => {
  try {
    Linking.openURL(url);
  } catch (error) {
    console.log('Open Url error', error);
  }
};

export const logout = (message: string, type = popupType.info) => {
  try {
    reset(routesConstants.login, 0);
    DataManager.removeData();
    dispatch({
      type: ApiConstants.RESET_AUTH_DATA,
    });
    ShowAlertMessage(message, type);
  } catch (e) {
    console.log('Logout error: ', e);
  }
};
export const AccountDelete = (message: string, type = popupType.info) => {
  try {
    reset(routesConstants.login, 0);
    DataManager.removeData();
    dispatch({
      type: ApiConstants.ACCOUNT_DELETE_LOAD,
    });
    dispatch({
      type: ApiConstants.RESET_AUTH_DATA,
    });
    ShowAlertMessage(message, type);
  } catch (e) {
    console.log('Logout error: ', e);
  }
};

export const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(error.message);
  }
};

export const width =
  Dimensions.get('screen').height > Dimensions.get('screen').width
    ? Dimensions.get('screen').width
    : Dimensions.get('screen').height;
export const height =
  Dimensions.get('screen').height > Dimensions.get('screen').width
    ? Dimensions.get('screen').height
    : Dimensions.get('screen').width;
