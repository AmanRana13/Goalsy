import { takeLatest } from 'redux-saga/effects'
import { forgotPasswordSaga, loginApiSaga, signupApiSaga } from './authSaga'
import ApiConstants from 'theme/apiConstants'


export function* rootSaga() {
    yield takeLatest(ApiConstants.API_SIGNUP_LOAD, signupApiSaga)
    yield takeLatest(ApiConstants.API_LOGIN_LOAD, loginApiSaga)
    yield takeLatest(ApiConstants.API_FORGOT_PASSWORD_LOAD, forgotPasswordSaga)

}
