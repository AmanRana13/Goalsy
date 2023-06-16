import ApiConstants from "theme/apiConstants";

const initialState = {
    isLoading: false,
}

function globalReducer(state = initialState, action) {
    switch (action.type) {
        case ApiConstants.UPDATE_LOADING_STATE:
            return {
                ...state,
                isLoading: action.data,
            }
        default:
            return state
    }
}

export default globalReducer;
