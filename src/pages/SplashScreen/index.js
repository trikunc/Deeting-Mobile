import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

import COLORS from '../../utils/color';

const SplashScreen = () => {
    return (
   		<SafeAreaView style={styles.container}>
   			<View style={styles.block} >
        		<Image
              		source={require("../../assets/logo.png")}
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
		backgroundColor: COLORS.PRIMARY,
	},
	block : {
		alignItems: 'center' 
	},
	logo : {
		marginTop: 200,
		width: 200,
		height: 200,
	},
	text :{
		marginTop: 24,
		color: COLORS.WHITE,
		fontSize: 25,
		lineHeight: 44.8,
	},
});

export default SplashScreen;