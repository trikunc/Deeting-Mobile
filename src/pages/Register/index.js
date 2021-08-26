import React, {useState} from 'react';
import {
	SafeAreaView, 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	Image,
	TextInput,
	StatusBar,
} from 'react-native';

import { useTranslation } from 'react-i18next';

import  COLORS  from '../../utils/color';
import { fonts } from '../../utils/fonts';

const eyeShow = '../../assets/icons/showEye.png';
const eyeHide = '../../assets/icons/hideEye.png';


const Register = ({navigation}) => {

	const { t  } = useTranslation();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState('');
	const [passwordConfirm, setConfirm] = useState('');

	const [pass, setPass] = useState(true);
	const [passConfirm, setPassConfirm] = useState(true);

   return(
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.PRIMARY }}>
     	<StatusBar backgroundColor={COLORS.PRIMARY}  />
         <TouchableOpacity 
     		style={{ marginLeft: 27, marginTop: 40 }} 
     		onPress={() => navigation.goBack()}
     	>
     		<Image source={require('../../assets/icons/ArrowLeft.png')} style={{ height: 21, width: 10.5 }} />
     	</TouchableOpacity>

     	<View style={styles.card} >
     		<Text style={styles.signUp} >{t('Sign Up')}</Text>
     		<Text style={styles.text}>{t('Register your new account')}</Text>

     		<View style={{ marginTop: 36 }} >
     			<Text style={{ marginBottom: 8 }} >
	     			<Text style={styles.label} >
	     				{t('Nickname')} {' '}
	     			</Text>
	     			<Text style={{
	     				fontSize: 14,
	     				letterSpacing: 0.5,
	     				lineHeight: 19.6,
	     				fontFamily: fonts.NunitoSansLight,
	     			}} >({t('Optional')})</Text>
     			</Text>
	     		<TextInput
			        style={styles.input}
			        onChangeText={(text) => setName(text)}
			        value={name}
			        placeholder={t('Enter your nickname')}
	      		/>

     			<Text style={styles.label} >{t('Email')}</Text>
	     		<TextInput
			        style={styles.input}
			        onChangeText={(text) => setEmail(text)}
			        value={email}
			        placeholder={t('placeHolderEmail')}
	      		/>

     			<Text style={styles.label} >{t('Create Password')}</Text>
	      		<View style={styles.password} >
		      		<TextInput
		      			autoCapitalize="none"
		              	secureTextEntry={pass}
				        style={{ width: 220, height: 54}}
				        onChangeText={(text) => setPassword(text)}
				        value={password}
				        placeholderTextColor = {COLORS.TEXTINPUT}
				        placeholder={t('createPasswordPlaceholder')}
		      		/>

		      		<TouchableOpacity onPress={() => setPass(!pass)} >
		      			{
		      				pass ? (
		      					<Image source={require(eyeHide)} style={{ width: 17.98, height: 12 }} />
		      				) : (
		      					<Image source={require(eyeShow)} style={{ width: 16.67, height: 13.42 }} />
		      				)
		      			}
		      		</TouchableOpacity>
	      		</View>

	      		<Text style={styles.label} >{t('Confirm Password')}</Text>
	      		<View style={styles.password} >
		      		<TextInput
		      			autoCapitalize="none"
		              	secureTextEntry={pass}
				        style={{ width: 220, height: 54}}
				        onChangeText={(text) => setConfirm(text)}
				        value={passwordConfirm}
				        placeholderTextColor = {COLORS.TEXTINPUT}
				        placeholder={t('Repeat your password')}
		      		/>

		      		<TouchableOpacity onPress={() => setPassConfirm(!passConfirm)} >
		      			{
		      				passConfirm ? (
		      					<Image source={require(eyeHide)} style={{ width: 17.98, height: 12 }} />
		      				) : (
		      					<Image source={require(eyeShow)} style={{ width: 16.67, height: 13.42 }} />
		      				)
		      			}
		      		</TouchableOpacity>
		      	</View>

     		</View>

     		<TouchableOpacity activeOpacity={0.9} style={styles.button} 
     			onPress={() => navigation.navigate('SuccesSignUp')}
     		>
            		<Text style={styles.textsignUp} >{t('Sign Up')}</Text>
            </TouchableOpacity>

     	</View>

     </SafeAreaView>
   );
}

const styles = StyleSheet.create({
	
	card:{
		backgroundColor: COLORS.WHITE,
		marginTop: 30,
		borderTopRightRadius: 16,
		borderTopLeftRadius: 16,
		height: '100%',
		paddingHorizontal: 30,
		paddingVertical: 40,
	},

	signUp:{ 
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
	    marginBottom: 20,
  	},

  	password:{
		height: 54,
	    padding: 18,
	    width: '100%',
	    borderRadius: 12,
	    backgroundColor: 'rgba(124, 120, 120, 0.1)',
	    marginBottom: 20,
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    alignSelf: 'center',
	    flexDirection: 'row',
	},

	button:{
  		marginTop: 28,
		backgroundColor: COLORS.PRIMARY,
		paddingVertical: 12,
		alignItems: 'center', 
		borderRadius: 12,
	},

	textsignUp:{
        fontFamily: fonts.NunitoSansSemiBold, 
		fontSize: 16,
		color: COLORS.WHITE, 
		letterSpacing: 0.5,
    }
});

export default Register;