import { createStore } from 'redux';

import reducer from '../reducer/index'; //Import the reducer

// Connect our store to the reducers
export const store =  createStore(reducer);