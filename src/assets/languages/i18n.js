import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import * as RNLocalize from "react-native-localize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import english from './en.json';
import chinese from './zh.json';
import indonesia from './id.json';

const languageDetector = {
	type:'languageDetector',
	async:true,
	detect:(callback) => {
		
		
		return callback(RNLocalize.getLocales()[0].languageCode)	
	},
	init: () => {},
	cacheUserLanguage:() => {},
}


i18next
	.use(languageDetector)
	.use(initReactI18next)
	.init({
	fallbackLng: 'en',
	resources:{
		en:{ translation:english },
		zh:{ translation:chinese },
		id:{ translation:indonesia },
	},

	react:{
		useSuspense: false,
	},
});

export default i18next;