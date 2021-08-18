import React from 'react'
import { createStackNavigator,  TransitionPresets } from '@react-navigation/stack';

import Landing from './landing';
import SignIn from './signIn';
import Forgot from './forgot/index';
import ResetPassword from './forgot/resetPassword';
import Register from '../Register/index';
import SuccesSignUp from '../Register/succesSignUp';

const Stack = createStackNavigator();
    
const RouteLogin  = () => {

    const style = {
        headerShown: false, ...TransitionPresets.SlideFromRightIOS,
    };

    return (
        <>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" component={Landing} options={style}/>
                <Stack.Screen name="SignIn" component={SignIn} options={style}/>
                <Stack.Screen name="ForgotPassword" component={Forgot} options={style}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={style}/>
                <Stack.Screen name="Register" component={Register} options={style}/>
                <Stack.Screen name="SuccesSignUp" component={SuccesSignUp} options={style}/>
            </Stack.Navigator>
        </>
    )
}



export default RouteLogin;
