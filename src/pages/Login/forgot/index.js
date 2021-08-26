import React, {useState} from 'react';
import {
	SafeAreaView, 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	Image,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	Dimensions,
	StatusBar
} from 'react-native';

import { useTranslation } from 'react-i18next';

import Modal from 'react-native-modal';
import COLORS from '../../../utils/color';
import {fonts } from '../../../utils/fonts';

const deviceHeight = Dimensions.get('window').height;

const Forgot = ({navigation}) => {

	const { t, i18n } = useTranslation();

	const [email, setEmail] = useState("");

	const [visible, setVisible] = useState(false);

	function onEmail() {
		setVisible(false);
		navigation.navigate('ResetPassword');
	}

   return(
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.PRIMARY }}>
     	 <StatusBar backgroundColor={COLORS.PRIMARY}  />
        <TouchableOpacity 
     		style={{ marginLeft: 27, marginTop: 40 }} 
     		onPress={() => navigation.goBack()}
     	>
     		<Image source={require('../../../assets/icons/ArrowLeft.png')} style={{ height: 21, width: 10.5 }} />
     	</TouchableOpacity>
     	<View style={{ alignItems: 'center', marginTop: 35.5}} >
     		<Image source={require('../../../assets/icons/key1.png')} style={{ height: 200, width: 200 }} />
     	</View>
		
		{/*card*/}
     	 
     	
     	<View style={styles.card} >

     		<View  style={{ marginBottom: 36 }}>
	     		<Text style={styles.forgotPassword} >{t('titleForgot')}</Text>
	     		<Text style={styles.text}>{t('EnterEmail')}</Text>
     		</View>
     	<KeyboardAvoidingView
     		behavior={Platform.OS === "ios" ? "padding" : "height"}
      		keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -90}
     	>
     		<View >
	     		<Text style={styles.label} >{t('Email')}</Text>
	     		<TextInput
			        style={styles.input}
			        onChangeText={(text) => setEmail(text)}
			        value={email}
			        placeholder={t('Enter your email')}
	      		/>
      		</View>
      	</KeyboardAvoidingView>
      		<TouchableOpacity activeOpacity={0.9} style={styles.button} 
      			onPress={() => setVisible(true) }
      		>
            	<Text style={styles.textSubmit} >{t('Submit')}</Text>
            </TouchableOpacity>

     	</View>

    

     	<Modal
        	isVisible={visible}
        	swipeDirection={['down']}
	        style={{
	          height: deviceHeight
	        }}
      	>
	      	<View style={styles.containerModal}>
	      		<View style={styles.bodyModal} >
	      			
	      			<Image source={require('../../../assets/icons/emailCheck.png')}  
	      				style={styles.image}
	      			/>

	      			<Text style={styles.textCheck} >{t('Check Your Email')}</Text>

	      			<View style={{ marginTop: 5}}>
		      			<Text style={styles.textLetter}>
		      				{t('We have sent a password recovery')}
		      			</Text>
		      			
	      			</View>

	      			<TouchableOpacity style={styles.buttonOpenEmail} 
	      				onPress={() => onEmail()} 
	      			>
	      				<Text style={styles.textButton} >{t('Open Email App')}</Text>
	      			</TouchableOpacity>

	      		</View>
	      	</View>
      	</Modal>

     </SafeAreaView>
   );
}

const styles = StyleSheet.create({

	card: {
 		backgroundColor: COLORS.WHITE,
 		width: '100%',
 		height: '100%',
 		marginTop: 40,
 		borderTopLeftRadius: 16,
 		borderTopRightRadius: 16,
 		paddingVertical: 40,
 		paddingHorizontal: 30,
    },

    forgotPassword:{ 
		fontFamily: fonts.NunitoSansSemiBold,
		letterSpacing: 0.5,
		lineHeight: 36.4,
		fontSize: 26, 
    },

    text:{
    	fontFamily: fonts.NunitoSansLight,
    	letterSpacing: 0.5,
    	lineHeight: 22.4,
    	fontSize: 16,
    	marginTop: 4,
    },

    label:{
  		fontFamily: fonts.NunitoSansSemiBold,
  		fontSize: 14,
  		letterSpacing: 0.5,
  		lineHeight: 19.6,
  		marginBottom: 8,
  	},
  	input: {
	    height: 54,
	    padding: 18,
	    borderRadius: 12,
	    // color: COLORS.TEXTINPUT,
	    backgroundColor: 'rgba(124, 120, 120, 0.1)',
	    marginBottom: 24,
  	},

  	button:{
  		marginTop: 40,
		backgroundColor: COLORS.PRIMARY,
		paddingVertical: 12,
		alignItems: 'center', 
		borderRadius: 12,
	},

	containerModal: {
	    flex: 1, 
	    justifyContent: 'center', 
	    alignItems: 'center',
  		marginHorizontal: 20,
  	},

  	bodyModal: {
  		borderRadius: 16,
	    backgroundColor: 'white',
	    width: '100%',
	    height: '60%',
	    alignItems: 'center', 
  	},

  	textCheck: { 
		fontFamily: fonts.NunitoSansBold, 
		fontSize: 24,
		letterSpacing: 0.5,
		lineHeight: 33.6,
		marginTop: 16,
	},
  	textLetter:{
		marginHorizontal: 16,
		fontFamily: fonts.NunitoSansLight,
		fontSize: 17,
		letterSpacing: 0.5,
		textAlign: 'center' 
	},

	image:{
		width: 150,
		height: 150,
		marginTop: 40,
	},

	buttonOpenEmail:{
		marginTop: 40,
		backgroundColor: COLORS.PRIMARY,
		paddingVertical: 12,
		alignItems: 'center', 
		borderRadius: 12,
		paddingHorizontal: 40,
	},

	textButton:{ 
		fontSize: 16, 
		fontFamily: fonts.NunitoSansSemiBold, 
		letterSpacing: 0.5,
		color: COLORS.WHITE, 
	},

	textSubmit:{
		fontFamily: fonts.NunitoSansSemiBold, 
		fontSize: 16,
		color: COLORS.WHITE, 
		letterSpacing: 0.5,
	}
});

export default Forgot;