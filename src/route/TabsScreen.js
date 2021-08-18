import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../pages/Home/Profile';
import Meeting from '../pages/Home/Meetings';
import Contacts from '../pages/Home/Contacts';

import clockIcon from '../assets/icons/clock.png';
import clockIconFoc from '../assets/icons/clockFocused.png';
import contactIcon from '../assets/icons/phoneBook.png';
import contactIconFoc from '../assets/icons/phoneBookFocused.png';

import profileIcon from '../assets/icons/user.png';
import profileIconFoc from '../assets/icons/userFocused.png';

import COLOR from '../utils/color';
import {fonts} from '../utils/fonts';

const Tab = createBottomTabNavigator();

const TabsScreen = ({navigation}) => (
  <Tab.Navigator
    initialRouteName="Profile"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: COLOR.PRIMARY,
        color: COLOR.WHITE,
        borderRadius: 12,
        paddingHorizontal: 30,
      },
    }}>
    <Tab.Screen
      name="Meeting"
      component={Meeting}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
            <Image source={focused ? clockIconFoc : clockIcon} />
            <Text
              style={{
                fontFamily: fonts.NunitoSansReguler,
                fontSize: 12,
                marginTop: 4,
                color: COLOR.WHITE,
              }}>
              Meetings
            </Text>
          </View>
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
            <Image source={focused ? contactIconFoc : contactIcon} />
            <Text
              style={{
                fontFamily: fonts.NunitoSansReguler,
                fontSize: 12,
                marginTop: 4,
                color: COLOR.WHITE,
              }}>
              Contacts
            </Text>
          </View>
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
            <Image source={focused ? profileIconFoc : profileIcon} />
            <Text
              style={{
                fontFamily: fonts.NunitoSansReguler,
                fontSize: 12,
                marginTop: 4,
                color: COLOR.WHITE,
              }}>
              Profile
            </Text>
          </View>
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default TabsScreen;
