/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App.js';
import {name as appName} from './app.json';

import i18n from './src/assets/languages/i18n';

AppRegistry.registerComponent(appName, () => App);