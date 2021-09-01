import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabsScreen from './TabsScreen';

import SplashScreen from '../pages/SplashScreen/index.js';

import Landing from '../pages/Login/landing';
import SignIn from '../pages/Login/signIn';
import Forgot from '../pages/Login/forgot';
import ResetPassword from '../pages/Login/forgot/resetPassword';
import Register from '../pages/Register';
import SuccesSignUp from '../pages/Register/succesSignUp';
import ChangePassword from '../pages/Home/ChangePass';
import seeAllMeetings from '../pages/Home/Meetings/seeAllMeetings';
import detailMeeting from '../pages/Home/Meetings/meetingDetail';
import AddContact from '../pages/Home/Contact/AddContact';
import ContactDetail from '../pages/Home/Contact/ContactDetail';
import EditProfile from '../pages/Home/Profile/EditProfile';
import CreateGroup from '../pages/Home/Contact/CreateGroup';
import ValidationGroup from '../pages/Home/Contact/ValidationGroup';
import ScanQRcode from '../pages/Home/Contact/ScanQRcode';

import JoinMeeting from '../pages/JoinMeeting/JoinMeeting';
import WaitingRoom from '../pages/JoinMeeting/waitingRoom';
import LoadingRoom from '../pages/JoinMeeting/loadingRoom';

// NavBar
import MeetingNow from '../pages/NavBar/MeetingNow/MeetingNow';
import NewSchedule from '../pages/NavBar/NewSchedule/NewSchedule';
import MyRecordings from '../pages/NavBar/MyRecordings/MyRecordings';
import WebinarList from '../pages/NavBar/WebinarList/WebinarList';
import MyMessaging from '../pages/NavBar/MyMessaging/MyMessaging';
import MeetingCalendar from '../pages/NavBar/MeetingCalendar/MeetingCalendar';

const Stack = createStackNavigator();

function AppNavigation() {
  const style = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };
  const AppStack = () => (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="TabsScreen"
        component={TabsScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
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
        name="JoinMeeting"
        component={JoinMeeting}
        options={style}
      />
      <Stack.Screen
        name="WaitingRoom"
        component={WaitingRoom}
        options={style}
      />
      <Stack.Screen
        name="LoadingRoom"
        component={LoadingRoom}
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
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={style}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={style}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={style}
      />
      <Stack.Screen
        name="ValidationGroup"
        component={ValidationGroup}
        options={style}
      />
      <Stack.Screen name="ScanQRcode" component={ScanQRcode} options={style} />
      <Stack.Screen name="AddContact" component={AddContact} options={style} />

      {/* Navbar */}
      <Stack.Screen name="MeetingNow" component={MeetingNow} options={style} />
      <Stack.Screen
        name="NewSchedule"
        component={NewSchedule}
        options={style}
      />
      <Stack.Screen
        name="MyRecordings"
        component={MyRecordings}
        options={style}
      />
      <Stack.Screen
        name="WebinarList"
        component={WebinarList}
        options={style}
      />
      <Stack.Screen
        name="MyMessaging"
        component={MyMessaging}
        options={style}
      />
      <Stack.Screen
        name="MeetingCalendar"
        component={MeetingCalendar}
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
