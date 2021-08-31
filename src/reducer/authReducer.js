import { LOGIN, LOGOUT } from '../action/index';

const initialState = { userToken: null, isLogin: false };


const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case LOGIN:

			return {...state, userToken: action.data, isLogin:true};

		case LOGOUT:

			return state;

		default:

			return {...state, userToken: null, isLogin: false};
	}
}

export default authReducer;