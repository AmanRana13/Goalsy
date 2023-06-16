import { combineReducers } from 'redux';
import authenticationReducer from './authReducer';
import globalReducer from './globalReducer';
import homeReducer from './home';

const rootReducer = combineReducers({
    authenticationReducer,
    globalReducer,
    homeReducer
});

export default rootReducer;