import { Dimensions, Linking } from "react-native";
import { reset } from "routes/navigationServices";
import { DataManager } from "./dataManager";
import ApiConstants from "theme/apiConstants";
import { popupType } from "theme/constants";
import { ShowAlertMessage } from "./showAlertMessage";

var dispatch :any= null

export const setDispatch = (data: any) => {
    dispatch = data
}

export const logout = (message:string, type = popupType.info) => {
    try {
        reset('Login', 0);
        DataManager.removeData();
        dispatch({
            type: ApiConstants.RESET_AUTH_DATA
        });
        ShowAlertMessage(message, type);
    } catch (e) {
        console.log('Logout error: ', e);
    }
}

export const openLinks = (url:string) => {
    try {
        Linking.openURL(url);
    } catch (error) {
        console.log('Open Url error', error);
    }
  };
  

export const width = (Dimensions.get('screen').height > Dimensions.get('screen').width) ? Dimensions.get('screen').width : Dimensions.get('screen').height;
export const height = (Dimensions.get('screen').height > Dimensions.get('screen').width) ? Dimensions.get('screen').height : Dimensions.get('screen').width;

