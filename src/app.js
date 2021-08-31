import React, {Component} from 'react';

import * as RNLocalize from "react-native-localize";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Router from './route/index';

export default class RouterApp extends Component {

  componentDidMount() { 
  	RNLocalize.addEventListener('change', this.handleLocalizationChange(RNLocalize.getLocales()[0].languageCode))
  }

  componentWillUnmount() {
  	RNLocalize.removeEventListener('change', this.handleLocalizationChange(RNLocalize.getLocales()[0].languageCode))
  }

  handleLocalizationChange = async (value) => {
  	
  	try {
  		const jsonValue = JSON.stringify(value);
  		await AsyncStorage.setItem('chooseLang', jsonValue);
  	} catch {
  		console.log('error');
  	}

  }



  render() {
  	
    return <Router />
    
  }
}
