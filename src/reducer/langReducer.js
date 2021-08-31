
import { CHOOSELANGUAGE, GET_LOCAL_LANGUAGE } from '../action/index';

const lang = require('../assets/languages/list.json');



const initialState = { language: lang, choose:{}, textTop:{} };


const langReducer = (state = initialState, action) => {

	switch (action.type) {

		case CHOOSELANGUAGE:

			// {...state, choose: action.payload}
			return {...state, choose: action.data};

		case GET_LOCAL_LANGUAGE:

				let dataChoose = {};
				let index  = lang;
				let find   = lang.findIndex((obj) => obj.code === action.data);
				let findEN = lang.findIndex((obj) => obj.code === 'en');
				
				if (find !== -1) {
					dataChoose = index[find];
				} else {
					dataChoose = index[findEN];
				}
			return {...state, choose: dataChoose };

		default:

			return state;
	}

}

export default langReducer;