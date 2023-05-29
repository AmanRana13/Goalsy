import {put, call} from 'redux-saga/effects';
import {forgotPasswordApi, loginApi, signUpApi} from '../axios/axiosApi';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import ApiConstants from 'theme/apiConstants';
import constants, {popupType} from 'theme/constants';
import {reset} from '../../routes/navigationServices';
import {DataManager} from 'utils/dataManager';
import networkUtils from 'utils/networkUtils';

export function* signupApiSaga(action) {
  try {
    const isConnected = yield call(networkUtils);
    if (isConnected) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: true,
      });
      let response = yield call(signUpApi, action.payload);
      let {result, status} = response;
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      if (status === 1) {
        yield put({
          type: ApiConstants.API_SIGNUP_SUCCESS,
          payload: true,
        });
      } else if (status == 2) {
        // logout(result?.msg);
      } else {
        ShowAlertMessage(result.msg, popupType.error);
      }
    } else {
      ShowAlertMessage(constants.internetCheck, popupType.error);
    }
  } catch (error) {
    yield put({
      type: ApiConstants.UPDATE_LODING_STATE,
      data: false,
    });
    ShowAlertMessage(constants.internetCheck, popupType.error);
  }
}

export function* loginApiSaga(action) {
  try {
    const isConnected = yield call(networkUtils);
    if (isConnected) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: true,
      });
      let response = yield call(loginApi, action?.payload);
      let {result, status} = response;
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      if (status === 1) {
        ShowAlertMessage(result.message, popupType.info);
        DataManager.setAccessToken(result?.data?.token);
        DataManager.setUserData(JSON.stringify(result?.data?.user));
        DataManager.setFirstTime();
        yield put({
          type: ApiConstants.API_LOGIN_SUCCESS,
          payload: result?.data,
        });
        reset('BottomTab', 0);
      } else if (status === 2) {
        ShowAlertMessage(result.msg, popupType.error);
        // logout(result?.msg);
      } else {
        ShowAlertMessage(result.msg, popupType.error);
      }
    } else {
      ShowAlertMessage(constants.internetCheck, popupType.error);
    }
  } catch (error) {
    yield put({
      type: ApiConstants.UPDATE_LODING_STATE,
      data: false,
    });
    ShowAlertMessage(constants.internetCheck, popupType.error);
  }
}

export function* forgotPasswordSaga(action) {
  try {
    const isConnected = yield call(networkUtils);
    if (isConnected) {
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: true,
      });
      let response = yield call(forgotPasswordApi, action.payload);
      let {result, status} = response;
      yield put({
        type: ApiConstants.UPDATE_LODING_STATE,
        data: false,
      });
      if (status === 1) {
        yield put({
          type: ApiConstants.API_FORGOT_PASSWORD_SUCCESS,
          payload: true,
        });
      } else if (status == 2) {
        // logout(result?.msg);
      } else {
        ShowAlertMessage(result.msg, popupType.error);
      }
    } else {
      ShowAlertMessage(constants.internetCheck, popupType.error);
    }
  } catch (error) {
    yield put({
      type: ApiConstants.UPDATE_LODING_STATE,
      data: false,
    });
    ShowAlertMessage(constants.internetCheck, popupType.error);
  }
}
