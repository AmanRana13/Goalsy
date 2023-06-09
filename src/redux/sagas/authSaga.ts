// redux
import {put, call} from 'redux-saga/effects';

// api
import {api} from 'redux/axios/axiosApi';

// theme
import ApiConstants from 'theme/apiConstants';
import constants, {popupType} from 'theme/constants';

// utils
import {ShowAlertMessage} from 'utils/showAlertMessage';
import {DataManager} from 'utils/dataManager';

// routes
import {reset} from 'routes/navigationServices';
import {action} from 'redux/type';

// loading function
function* Loading(loading: boolean): any {
  yield put({
    type: ApiConstants.UPDATE_LOADING_STATE,
    data: loading,
  });
}

// sign up
export function* signupApiSaga(action: action): any {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const response = yield call(api.signUpApi, action?.payload);
    // loading set false
    yield call(Loading, false);

    if (response?.status === 1) {
      yield put({
        type: ApiConstants.API_SIGNUP_SUCCESS,
        payload: true,
      });
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}

// log in
export function* loginApiSaga(action: action): any {
  try {
    yield call(Loading, true);
    const response = yield call(api.loginApi, action?.payload);
    yield call(Loading, false);
    if (response?.status === 1) {
      ShowAlertMessage(response?.data?.message, popupType.info);
      DataManager.setAccessToken(response?.data?.data?.token);
      DataManager.setGoalSound(
        JSON.stringify(response?.data?.data?.user?.preferences?.goalSound),
      );
      DataManager.setSocialSound(
        JSON.stringify(response?.data?.data?.user?.preferences?.socialSound),
      );
      DataManager.setUserData(JSON.stringify(response?.data?.data?.user));
      DataManager.setFirstTime();
      yield put({
        type: ApiConstants.API_LOGIN_SUCCESS,
        payload: response?.data?.data,
      });
      reset('BottomTab', 0);
    }
  } catch (e) {
    console.log(e);
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}

// forgot password
export function* forgotPasswordSaga(action: action): any {
  try {
    yield call(Loading, true);
    const response = yield call(api.forgotPasswordApi, action.payload);
    yield call(Loading, false);
    if (response?.status === 1) {
      yield put({
        type: ApiConstants.API_FORGOT_PASSWORD_SUCCESS,
        payload: true,
      });
    }
  } catch (error) {
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
