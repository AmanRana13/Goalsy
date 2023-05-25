import { combineReducers } from 'redux';
import authenticationReducer from './authReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
    authenticationReducer,
    globalReducer
});

export default rootReducer;