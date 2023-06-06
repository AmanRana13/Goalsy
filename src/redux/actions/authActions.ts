import {login} from 'redux/type';
import ApiConstants from 'theme/apiConstants';

export const signUpAction = (payload: any) => {
  return {
    type: ApiConstants.API_SIGNUP_LOAD,
    payload,
  };
};

export const loginAction = (payload: login) => {
  return {
    type: ApiConstants.API_LOGIN_LOAD,
    payload,
  };
};

export const forgotPasswordAction = (payload: any) => {
  return {
    type: ApiConstants.API_FORGOT_PASSWORD_LOAD,
    payload,
  };
};

export const signUpModalAction = (payload: any) => {
  return {
    type: ApiConstants.API_SIGNUP_SUCCESS,
    payload,
  };
};

export const forgotModalAction = (payload: any) => {
  return {
    type: ApiConstants.API_FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};
