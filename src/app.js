import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './pages/SplashScreen/index.js';
import RouteLogin from './pages/Login/index';

const Stack = createStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="SplashScreen">
                   <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
                   <Stack.Screen name="RouteLogin" component={RouteLogin} options={{headerShown: false}}/>
              </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
