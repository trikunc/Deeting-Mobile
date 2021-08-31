import { combineReducers } from 'redux';

import langReducer from './langReducer';
import authReducer from './authReducer';

const reducer = combineReducers({ langReducer, authReducer });

export default reducer;	