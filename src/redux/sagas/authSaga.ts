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
function* Loading(loading: boolean) {
  yield put({
    type: ApiConstants.UPDATE_LOADING_STATE,
    data: loading,
  });
}

// sign up
export function* signupApiSaga(action: action) {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(api.signUpApi, action?.payload);
    // loading set false
    yield call(Loading, false);

    if (status === 1) {
      yield put({
        type: ApiConstants.API_SIGNUP_SUCCESS,
        payload: true,
      });
    }
  } catch (e) {
    console.log(e);
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}

// log in
export function* loginApiSaga(action: action) {
  try {
    yield call(Loading, true);
    const {data, status, message} = yield call(api.loginApi, action?.payload);
    yield call(Loading, false);
    if (status === 1) {
      ShowAlertMessage(data?.message, popupType.info);
      DataManager.setAccessToken(data?.data?.token);
      DataManager.setGoalSound(
        JSON.stringify(data?.data?.user?.preferences?.goalSound),
      );
      DataManager.setSocialSound(
        JSON.stringify(data?.data?.user?.preferences?.socialSound),
      );
      DataManager.setUserData(JSON.stringify(data?.data?.user));
      DataManager.setFirstTime();
      yield put({
        type: ApiConstants.API_LOGIN_SUCCESS,
        payload: data?.data,
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
export function* forgotPasswordSaga(action: action) {
  try {
    yield call(Loading, true);
    const {status, message} = yield call(api.forgotPasswordApi, action.payload);
    yield call(Loading, false);
    if (status === 1) {
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
