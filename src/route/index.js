import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Login from '../pages/Login/index';
import TabsScreen from './TabsScreen';

import Landing from '../pages/Login/landing';
import SignIn from '../pages/Login/signIn';
import Forgot from '../pages/Login/forgot';
import ResetPassword from '../pages/Login/forgot/resetPassword';
import Register from '../pages/Register';
import SuccesSignUp from '../pages/Register/succesSignUp';
import ChangePassword from '../pages/Home/ChangePass';
import seeAllMeetings from '../pages/Home/Meetings/seeAllMeetings';
import detailMeeting from '../pages/Home/Meetings/meetingDetail';

const Stack = createStackNavigator();

function AppNavigation() {
  const style = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };
  const AppStack = () => (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="TabsScreen"
        component={TabsScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Landing" component={Landing} options={style} />
      <Stack.Screen name="SignIn" component={SignIn} options={style} />
      <Stack.Screen name="ForgotPassword" component={Forgot} options={style} />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={style}
      />
      <Stack.Screen name="Register" component={Register} options={style} />
      <Stack.Screen
        name="SuccesSignUp"
        component={SuccesSignUp}
        options={style}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={style}
      />
      <Stack.Screen
        name="seeAllMeetings"
        component={seeAllMeetings}
        options={style}
      />
      <Stack.Screen
        name="detailMeeting"
        component={detailMeeting}
        options={style}
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default AppNavigation;
