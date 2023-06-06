import ApiConstants from 'theme/apiConstants';

const initialState = {
  userDetails: {},
  quizData: {},
};

function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case ApiConstants.USER_DETAILS_SUCCESS:
      return {...state, userDetails: action.payload.data};
    case ApiConstants.USER_QUIZ_SUCCESS:
      return {...state, quizData: action.payload.data};
    default:
      return state;
  }
}

export default homeReducer;
