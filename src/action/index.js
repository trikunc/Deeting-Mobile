export const CHOOSELANGUAGE = 'CHOOSELANGUAGE';
export const GET_LOCAL_LANGUAGE = 'GET_LOCAL_LANGUAGE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const chooseLanguage = (languageChoose) => ({
	type: CHOOSELANGUAGE,
	data: languageChoose,
});

export const getLocalLanguage = (languageChoose) => ({
	type: GET_LOCAL_LANGUAGE,
	data: languageChoose,
})



export const login = (userData) => ({
	type: LOGIN,
	data: userData,
});

export const logout = (userData) => ({
	type: LOGOUT,
	data: userData,
})
 