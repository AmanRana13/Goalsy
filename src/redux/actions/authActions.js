import ApiConstants from 'theme/apiConstants';

export const signupAction = payload => {
  return {
    type: ApiConstants.API_SIGNUP_LOAD,
    payload,
  };
};

export const loginAction = payload => {
  return {
    type: ApiConstants.API_LOGIN_LOAD,
    payload,
  };
};

export const forgotPasswordAction = payload => {
  return {
    type: ApiConstants.API_FORGOT_PASSWORD_LOAD,
    payload,
  };
};

export const signUpModalAction = payload => {
  return {
    type: ApiConstants.API_SIGNUP_SUCCESS,
    payload,
  };
};

export const forgotModalAction = payload => {
  return {
    type: ApiConstants.API_FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};
