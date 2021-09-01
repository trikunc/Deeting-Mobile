import { LOGIN, LOGOUT } from '../action/index';

const initialState = { userToken: null, isLogin: false, idUser:null };


const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case LOGIN:

			return {...state, userToken: action.data.token, isLogin:true, idUser: action.data.user.id};
			

		case LOGOUT:

			return state;

		default:

			return {...state, userToken: null, isLogin: false, idUser:null};
	}
}

export default authReducer;