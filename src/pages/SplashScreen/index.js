import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

import COLORS from '../../utils/color';
import { fonts } from '../../utils/fonts';

const SplashScreen = ({navigation}) => {

	React.useEffect(() => {

		setTimeout( () => {
			navigation.replace('Landing');
		}, 3000)

	}, [navigation]);

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
		backgroundColor: '#6C51E1',
	},
	block : {
		alignItems: 'center' 
	},
	logo : {
		marginTop: '54%',
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