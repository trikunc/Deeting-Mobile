export const CHOOSELANGUAGE = 'CHOOSELANGUAGE';
export const GET_LOCAL_LANGUAGE = 'GET_LOCAL_LANGUAGE';

export const chooseLanguage = (languageChoose) => ({
	type: CHOOSELANGUAGE,
	data: languageChoose,
});

export const getLocalLanguage = (languageChoose) => ({
	type: GET_LOCAL_LANGUAGE,
	data: languageChoose,
})
 