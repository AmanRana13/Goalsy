import {takeLatest} from 'redux-saga/effects';
import {forgotPasswordSaga, loginApiSaga, signupApiSaga} from './authSaga';
import ApiConstants from 'theme/apiConstants';
import {
  DeleteAccountSaga,
  QuizAnswer,
  changePassword,
  userDetails,
  userEditDetails,
  userQuiz,
  NotificationSound
} from './home';

export function* rootSaga() {
  yield takeLatest(ApiConstants.API_SIGNUP_LOAD, signupApiSaga);
  yield takeLatest(ApiConstants.API_LOGIN_LOAD, loginApiSaga);
  yield takeLatest(ApiConstants.API_FORGOT_PASSWORD_LOAD, forgotPasswordSaga);

  // Home
  yield takeLatest(ApiConstants.ACCOUNT_DELETE_LOAD, DeleteAccountSaga);
  yield takeLatest(ApiConstants.USER_DETAILS_LOAD, userDetails);
  yield takeLatest(ApiConstants.EDIT_PROFILE_LOAD, userEditDetails);
  yield takeLatest(ApiConstants.CHANGE_PASSWORD_LOAD, changePassword);
  yield takeLatest(ApiConstants.USER_QUIZ_LOAD, userQuiz);
  yield takeLatest(ApiConstants.QUIZ_ANSWER_LOAD, QuizAnswer);
  yield takeLatest(ApiConstants.NOTIFICATION_SOUND_LOAD, NotificationSound);
}
