import {put, call} from 'redux-saga/effects';
import {api} from '../axios/axiosApi';
import {ShowAlertMessage} from 'utils/showAlertMessage';
import ApiConstants from 'theme/apiConstants';
import constants, {popupType, routesConstants} from 'theme/constants';
import {action} from 'redux/type';
import {navigate, reset} from 'routes/navigationServices';
import {DataManager} from 'utils/dataManager';
import {dispatch} from 'utils/globalFunctions';

// loading function
function* Loading(loading: boolean) {
  yield put({
    type: ApiConstants.UPDATE_LOADING_STATE,
    data: loading,
  });
}
// Delete Account
export function* DeleteAccountSaga() {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(api.deleteAccount);
    // loading set false
    yield call(Loading, false);

    reset(routesConstants.login, 0);
    DataManager.removeData();
    dispatch({
      type: ApiConstants.RESET_AUTH_DATA,
    });
    if (status === 1) {
      yield put({
        type: ApiConstants.ACCOUNT_DELETE_SUCCESS,
        payload: true,
      });
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
// user profile
export function* userDetails() {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(api.userDetail);
    // loading set false
    yield call(Loading, false);
    if (status === 1) {
      yield put({
        type: ApiConstants.USER_DETAILS_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
// Edit user profile
export function* userEditDetails(action: action) {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(
      api.userEditDetail,
      action.payload,
    );
    // loading set false
    yield call(Loading, false);
    if (status === 1) {
      yield put({
        type: ApiConstants.EDIT_PROFILE_SUCCESS,
        payload: data,
      });
      navigate(routesConstants.Profile);
      ShowAlertMessage(message, popupType.info);
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
// change password
export function* changePassword(action: action) {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(
      api.changePassword,
      action.payload,
    );
    // loading set false
    yield call(Loading, false);
    if (status === 1) {
      reset(routesConstants.login, 0);
      DataManager.removeData();
      dispatch({
        type: ApiConstants.RESET_AUTH_DATA,
      });
      ShowAlertMessage(message, popupType.info);
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
// quiz
export function* userQuiz() {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(api.userQuiz);
    // loading set false
    yield call(Loading, false);
    if (status === 1) {
      yield put({
        type: ApiConstants.USER_QUIZ_SUCCESS,
        payload: data,
      });
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
// Quiz Answer
export function* QuizAnswer(action: action) {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {data, status, message} = yield call(api.QuizAnswer, action.payload);
    // loading set false
    yield call(Loading, false);
    if (status === 1) {
      navigate(routesConstants.boards);
      ShowAlertMessage(message, popupType.info);
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}

// NotificationSound (Goal sound social sound )
export function* NotificationSound(action: action) {
  try {
    // loading set true
    yield call(Loading, true);
    // api call
    const {status, message} = yield call(api.notificationSound, action.payload);
    // loading set false
    yield call(Loading, false);
    console.log(':::::::::::');

    if (status === 1) {
      (async () => {
        if (action.payload?.type === 'goal') {
          const goalSound = await DataManager.getGoalSound();
          DataManager.setGoalSound(JSON.stringify(!JSON.parse(goalSound)));
        } else {
          const socialSound = await DataManager.getSocialSound();
          DataManager.setSocialSound(JSON.stringify(!JSON.parse(socialSound)));
        }
      })();
      ShowAlertMessage(message, popupType.info);
    }
  } catch (e) {
    // loading set false
    yield call(Loading, false);
    ShowAlertMessage(constants.someThingWentWrong, popupType.error);
  }
}
