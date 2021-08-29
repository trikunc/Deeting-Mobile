import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '../pages/Home/Profile';
import Meeting from '../pages/Home/Meetings';
import Contacts from '../pages/Home/Contacts';

import clockIcon from '../assets/icons/clock.png';
import clockOn from '../assets/icons/clockOn.png';

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
    screenOptions={
      Platform.OS === 'ios'
        ? {
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: COLOR.PRIMARY,
              color: COLOR.WHITE,
              borderRadius: 12,
              paddingHorizontal: 30,
            },
          }
        : {
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: COLOR.PRIMARY,
              paddingHorizontal: 30,
              height: '9%',
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
            },
          }
    }>
    <Tab.Screen
      name="Meeting"
      component={Meeting}
      options={{
        tabBarIcon: ({focused}) => (
          <View
            style={
              Platform.OS === 'ios' ? {...styles.icons, top: 15} : styles.icons
            }>
            <Image
              source={focused ? clockOn : clockIcon}
              style={{height: 24, width: 25}}
            />
            <Text
              style={
                focused
                  ? {...styles.text, fontFamily: fonts.NunitoSansSemiBold}
                  : styles.text
              }>
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
            style={
              Platform.OS === 'ios' ? {...styles.icons, top: 15} : styles.icons
            }>
            <Image source={focused ? contactIconFoc : contactIcon} />
            <Text
              style={
                focused
                  ? {...styles.text, fontFamily: fonts.NunitoSansSemiBold}
                  : styles.text
              }>
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
            style={
              Platform.OS === 'ios' ? {...styles.icons, top: 15} : styles.icons
            }>
            <Image source={focused ? profileIconFoc : profileIcon} />
            <Text
              style={
                focused
                  ? {...styles.text, fontFamily: fonts.NunitoSansSemiBold}
                  : styles.text
              }>
              Profile
            </Text>
          </View>
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  text: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 12,
    marginTop: '3%',
    color: COLOR.WHITE,
    letterSpacing: 0.5,
  },
});

export default TabsScreen;
