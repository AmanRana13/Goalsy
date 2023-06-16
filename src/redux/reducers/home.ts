import ApiConstants from 'theme/apiConstants';

const initialState = {
  userDetails: {},
  quizData: {},
  ticketList: [],
  ticketPagination: {},
};

function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case ApiConstants.USER_DETAILS_SUCCESS:
      return {...state, userDetails: action.payload.data};
    case ApiConstants.USER_QUIZ_SUCCESS:
      return {...state, quizData: action.payload.data};
    case ApiConstants.CREATE_TICKET_LIST_SUCCESS:
      return {...state, 
        ticketList: action.payload.data.data,
        ticketPagination: action.payload.data.paginationData
      };
    default:
      return state;
  }
}

export default homeReducer;
