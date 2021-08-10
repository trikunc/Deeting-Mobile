/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app.js';
//import App from './App.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);