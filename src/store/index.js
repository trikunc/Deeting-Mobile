import { createStore } from 'redux';

import { langReducer } from '../reducer/index'; //Import the reducer

// Connect our store to the reducers
export const storeLanguage =  createStore(langReducer);