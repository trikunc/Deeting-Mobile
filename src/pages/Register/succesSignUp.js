import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useTranslation } from 'react-i18next';

import  COLORS  from '../../utils/color';
import { fonts } from '../../utils/fonts';

const SuccesSignUp = ({navigation}) => {

	const { t  } = useTranslation();

   return(
     <SafeAreaView style={styles.container}>
        
        <View style={styles.card}>
     		<Image source={require('../../assets/icons/Email.png')} style={styles.image} />
     		
     		<Text style={styles.textVerif} >{t('Verify Email')}</Text>
     		<Text style={styles.text} >
     			{t('textDescription')}
			</Text>
     	</View>

     	<TouchableOpacity activeOpacity={0.9} style={styles.button} >
            <Text style={styles.textButton} >{t('Verify My Email')}</Text>
        </TouchableOpacity>

         <Text style={styles.textOr} >{t('Or')}</Text>

         <View style={{ marginTop: 30, alignItems: 'center' }} >
			<TouchableOpacity style={{ flexDirection: 'row'}} 
				onPress={() => navigation.navigate('SignIn')}
			>
				<Text style={styles.backSign} >{t('Go to Sign In')}</Text>
				<Image source={require('../../assets/icons/ArrowRight.png')} 
					style={{ 
						width: 19, 
						height: 11.5,
						marginTop: 6, 
					}}
				/>
			</TouchableOpacity>
	    </View>

     </SafeAreaView>
   );
}

const styles = StyleSheet.create({
	container :{
		flex: 1, 
		backgroundColor: COLORS.WHITE, 
		
	},

	card :{
		marginTop: 133,
		alignItems: 'center'
	},

	image:{ 
		width: 150, 
		height: 150 
	},

	textVerif:{
		fontFamily: fonts.NunitoSansBold,
		fontSize: 24,
		letterSpacing: 0.5,
		lineHeight: 33.6,
		marginTop: 24,
	},

	text:{
		fontSize: 18,
		fontFamily: fonts.NunitoSansLight,
		textAlign: 'center',
		letterSpacing: 0.5,
		lineHeight: 27,
		marginHorizontal: 30,
		marginTop: 4, 
	},
	button:{
  		marginTop: 40,
		backgroundColor: COLORS.PRIMARY,
		paddingVertical: 12,
		alignItems: 'center', 
		borderRadius: 12,
		marginHorizontal: 30,
	},

	textButton:{
        fontFamily: fonts.NunitoSansSemiBold, 
		fontSize: 16,
		color: COLORS.WHITE, 
		letterSpacing: 0.5,
    },

    textOr:{
    	fontFamily: fonts.NunitoSansReguler,
    	letterSpacing: 0.5,
    	fontSize: 16,
    	marginTop: 80,
    	textAlign:'center' 
	},

	backSign:{
		fontSize: 14,
		letterSpacing: 0.5,
		lineHeight: 22.4,
		fontFamily: fonts.NunitoSansBold,
		color: COLORS.PRIMARY,
		marginRight: 9.5,
	}

});	

export default SuccesSignUp;