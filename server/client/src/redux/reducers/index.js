import { combineReducers } from 'redux';
import userReducer from './userReducer';

import user from './userReducer'

const rootReducer = combineReducers({ user });

export default rootReducer;