import React, { useState, useEffect } from 'react';
import {
	SafeAreaView, 
	View, 
	Text, 
	TouchableOpacity, 
	Image, 
	StyleSheet, 
	StatusBar, 
} from 'react-native';

import { useTranslation } from 'react-i18next';
import { loadingLarge } from '../../assets/index';
import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const LoadingRoom = ({navigation}) => {

	const { t } = useTranslation();

	useEffect(() => {

		setTimeout( () => {
			navigation.replace('WaitingRoom');
		}, 2000)

	}, [navigation]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topView}>
				<TouchableOpacity
	        		style={styles.backArrow}
	        		onPress={() => navigation.goBack()}
	        	>
	        		<Image
	          			source={require('../../assets/icons/ArrowLeft.png')}
	          			style={styles.imageBack}
	        		/>
	      		</TouchableOpacity>

	      		<Text style={styles.textTitle}>{t('Product Discussion')}</Text>
	      	</View>

	      	<View style={styles.box}>
	      		<Image source={loadingLarge} style={{ width: 130.81, height: 130.6 }} />
	      		<Text style={{ marginTop: 26.4 }}>
		      		<Text style={styles.text}>{t('Hi')} {' '}</Text>
		      		<Text style={{...styles.text, fontFamily: fonts.NunitoSansBold}}>John Doe</Text>
		      		<Text style={styles.text}>{' '} {t('please wait')}</Text>
	      		</Text>
	      	</View>

		</SafeAreaView>
	);

}

const styles = StyleSheet.create({
	container:{
		flex: 1, 
		backgroundColor: COLORS.PRIMARY
	},

	topView: {
	    display: 'flex',
	    alignItems: 'center',
	    marginTop: 40,
  	},

  	backArrow:{
		position: 'absolute',
		top: 4.5,
		left: 27,
		height: 25,
		width: 25,
	},

	imageBack:{
		height: 21, 
		width: 10.5
	},

	box:{
		alignItems: 'center',
		marginHorizontal: 48, 
		flex: 1,
		justifyContent: 'center',

	},

	textTitle:{
		fontSize: 18,
		letterSpacing: 0.5,
		fontFamily: fonts.NunitoSansBold,
		color:COLORS.WHITE,
		lineHeight: 27, 
	},

	text:{
		fontSize: 38,
		fontFamily: fonts.NunitoSansReguler,
		letterSpacing: 0.5,
		lineHeight: 49.4,
		color: COLORS.WHITE,
	}
});

export default LoadingRoom;