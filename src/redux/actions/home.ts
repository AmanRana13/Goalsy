import ApiConstants from 'theme/apiConstants';

export const userProfile = () => {
  return {
    type: ApiConstants.USER_DETAILS_LOAD,
  };
};
export const deleteAccount = () => {
  return {
    type: ApiConstants.ACCOUNT_DELETE_LOAD,
  };
};
export const editProfileAction = (payload: any,name:string) => {
  return {
    type: ApiConstants.EDIT_PROFILE_LOAD,
    payload,
    name
  };
};
export const changePasswordAction = (payload: any) => {
  return {
    type: ApiConstants.CHANGE_PASSWORD_LOAD,
    payload,
  };
};
export const userQuizAction = () => {
  return {
    type: ApiConstants.USER_QUIZ_LOAD,
  };
};
export const QuizAnswerAction = (payload: any) => {
  return {
    type: ApiConstants.QUIZ_ANSWER_LOAD,
    payload,
  };
};
export const NotificationSoundAction = (payload: any) => {
  return {
    type: ApiConstants.NOTIFICATION_SOUND_LOAD,
    payload,
  };
};
