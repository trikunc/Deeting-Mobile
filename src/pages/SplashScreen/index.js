import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

import COLORS from '../../utils/color';
import { fonts } from '../../utils/fonts';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../action/index';

const SplashScreen = ({navigation}) => {

	const { userToken, isLogin }  = useSelector((state) => state.authReducer);
	const dispatch = useDispatch();

	React.useEffect(() => {

		handleChekToken();

	}, [navigation]);

	const handleChekToken = async () => {

    try{

     const value = await AsyncStorage.getItem('userToken');

     	if(value != null) {
      		await dispatch(login(value));
      		await timeOut('TabsScreen')
     	}else {
     		await timeOut('Landing')
     	}

    	} catch (err) {
    		await timeOut('Landing')
      		console.log(error)
   		}

  	};

  	const timeOut = (value) => {
  		
  		setTimeout( () => {
  			navigation.replace(value);
  		}, 2000)
  	}

    return (
   		<SafeAreaView style={styles.container}>
   			<View style={styles.block} >
        		<Image
              		source={require("../../assets/images/logoLarge.png")}
              		style={styles.logo}
            	/>
            	<Text style={styles.text} >Zen of Meetings</Text>
            </View>
       	</SafeAreaView>
    )
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		// alignItems: 'center', 
		// justifyContent: 'center',
		backgroundColor: '#6C51E1',
	},
	block : {
		alignItems: 'center' 
	},
	logo : {
		marginTop: '60%',
		width: 180,
		height: 180,
	},
	text :{
		marginTop: 24,
		color: COLORS.WHITE,
		fontSize: 25,
		lineHeight: 33.8,
		letterSpacing: 0.5,
		fontFamily: fonts.NunitoSansSemiBold,
	},
});

export default SplashScreen;