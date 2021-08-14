import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

import COLORS from '../../utils/color';
import { fonts } from '../../utils/fonts';

const SplashScreen = () => {
    return (
   		<SafeAreaView style={styles.container}>
   			<View style={styles.block} >
        		<Image
              		source={require("../../assets/images/logoLarge.png")}
              		style={styles.logo}
            	/>
            	<Text style={styles.text} >Simple is better</Text>
            </View>
       	</SafeAreaView>
    )
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: '#6C51E1',
	},
	block : {
		alignItems: 'center' 
	},
	logo : {
		marginTop: 200,
		width: 180,
		height: 180,
	},
	text :{
		marginTop: 24,
		color: COLORS.WHITE,
		fontSize: 25,
		lineHeight: 44.8,
		fontFamily: fonts.NunitoSansSemiBold,
		letterSpacing: 0.5,
	},
});

export default SplashScreen;