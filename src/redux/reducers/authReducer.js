import ApiConstants from 'theme/apiConstants';

const initialState = {
  token: null,
  openSignUpModal: false,
  openForgotPasswordModal: false,
};

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.API_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload?.token,
      };
    case ApiConstants.API_SIGNUP_SUCCESS:
      return {
        ...state,
        openSignUpModal: action.payload,
      };
    case ApiConstants.API_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        openForgotPasswordModal: action.payload,
      };
    case ApiConstants.RESET_AUTH_DATA:
      return {
        ...state,
        token: null,
        openForgotPasswordModal: false,
        openSignUpModal: false,
      };

    default:
      return state;
  }
}

export default authenticationReducer;
