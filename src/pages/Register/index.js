import React, {useState, useRef} from 'react';
import {
	SafeAreaView, 
	View, 
	Text, 
	StyleSheet, 
	TouchableOpacity, 
	Image,
	TextInput,
	StatusBar,
	ScrollView,
	ActivityIndicator
} from 'react-native';

import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import  COLORS  from '../../utils/color';
import { fonts } from '../../utils/fonts';
import {API_URL} from '@env';

const eyeShow = '../../assets/icons/showEye.png';
const eyeHide = '../../assets/icons/hideEye.png';


const Register = ({navigation}) => {

	const { t  } = useTranslation();

	const [isLoading, setLoading] = useState(false);
	const { control, handleSubmit, formState: { errors, isValid }, getValues } = useForm({mode: 'onSubmit'});
	

	const [passwordCheck, setCheck] = useState('');

	const [pass, setPass] = useState(true);
	const [passConfirm, setPassConfirm] = useState(true);


	const onSubmit = ({name, email, password, passwordConfirm}) => {

		setLoading(true);
		axios.defaults.headers.post['Content-Type'] ='application/json';
  		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.post(`${API_URL}/users`, {
			username:name,
			displayName: name,
			email: email,
			password: password,
			password_confirmation:passwordConfirm
		})

		.then(response => {
			setLoading(false);
			navigation.navigate('SuccesSignUp',{email:email});
		})

		.catch(error => {
			console.log(error)		
			setLoading(false);
		})
		
	};

   return(
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.PRIMARY }}>
     	<StatusBar backgroundColor={COLORS.PRIMARY}  />
         <TouchableOpacity 
     		style={{ marginLeft: 27, marginTop: 40 }} 
     		onPress={() => navigation.goBack()}
     	>
     		<Image source={require('../../assets/icons/ArrowLeft.png')} style={{ height: 21, width: 10.5 }} />
     	</TouchableOpacity>

     	<ScrollView style={styles.card} 
     		showsVerticalScrollIndicator={false}
     	>
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

     			<Controller
			        control={control}
			        rules={{
			         required: true,
			            
			        }}
			        render={({ field: { onChange, onBlur, value } }) => (
			     		<TextInput
					        style={
					        	errors.name ? 
					        	{...styles.input, borderColor: COLORS.DANGER,borderWidth: 1} 
					        	: {...styles.input, marginBottom: 5}
					        }
					        onChangeText={onChange}
					        value={value}
					        placeholder={t('Enter your nickname')}
			      		/>
			      	)}
		      		name="name"
		      	/>

		      	<View style={styles.errorView} >
			    	{errors.name && (
			    		<Text style={styles.errorMessage} >
			    		{t('required')}
			    		</Text>)}
			    </View>

     			<Text style={styles.label} >{t('Email')}</Text>

 				<Controller
			        control={control}
			        rules={{
			         required: true,
			          pattern: {
			          	value: /^\S+@\S+$/i,
			          	message: t('validEmail'),
			          },
			            
			        }}
			        render={({ field: { onChange, onBlur, value, ref } }) => (
			     		<TextInput
					        style={
					        	errors.email ? 
					        	{...styles.input, borderColor: COLORS.DANGER,borderWidth: 1} 
					        	: {...styles.input, marginBottom: 5} 
					        }
					        onBlur={onBlur}
					        onChangeText={onChange}
					        value={value}
					        placeholder={t('placeHolderEmail')}
			      		/>
	      		 	)}

	      		 	name="email"
	      		 	defaultValue=""
			    />

			    <View style={styles.errorView} >
			    	{errors.email && (
			    		<Text style={styles.errorMessage} >
			    		{errors.email?.type === 'required' ? t('required'): errors.email.message}
			    		</Text>)}
			    </View>
	      		

     			<Text style={styles.label} >{t('Create Password')}</Text>
	      		<View style={
	      			errors.password ? {
	      				...styles.password, borderColor: COLORS.DANGER, borderWidth: 1
	      			} : {...styles.password, marginBottom: 5} 
	      		}>

	      			<Controller
				        control={control}
				        rules={{
				         required: true,
				          pattern: {
				          	value: /^(?=.*[A-Z]).{6,32}$/i,
				          	message: t('validPassword'),
				          },
				        }}
				        render={({ field: { onChange, onBlur, value } }) => (
				      		<TextInput
				      			// ref={...ref('password')}
				      			autoCapitalize="none"
				              	secureTextEntry={pass}
						        style={{ width: 220, height: 54}}
						        onBlur={onBlur}
						        onChangeText={(text) => { onChange(text); setCheck(text) }}
						        value={value}
						        placeholderTextColor = {COLORS.TEXTINPUT}
						        placeholder={t('createPasswordPlaceholder')}
				      		/>
			      		)}

		      		 	name="password"
		      		 	defaultValue=""
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
	      		<View style={styles.errorView} >
			    	{errors.password && (
			    		<Text style={styles.errorMessage} >
			    		{errors.password?.type === 'required' ? t('required'):errors.password.message}
			    		</Text>
			    		)}
			    </View>

	      		<Text style={styles.label} >{t('Confirm Password')}</Text>
	      		<View style={
	      			errors.passwordConfirm ? {
	      				...styles.password, borderColor: COLORS.DANGER, borderWidth: 1
	      			} : styles.password
	      		} >


	      		<Controller
			        control={control}
			        rules={{
			         required: true,
			          pattern: {
			          	value: /^(?=.*[A-Z]).{6,32}$/i,
			          	message: t('validPassword'),
			          },
			            validate: 
			            	value => value === passwordCheck || t('notCorrect'),

			        }}

			        render={({ field: { onChange, onBlur, value } }) => (
			      		<TextInput
			      			autoCapitalize="none"
			              	secureTextEntry={passConfirm}
					        style={{ width: 220, height: 54}}
					        onChangeText={onChange}
					        value={value}
					        placeholderTextColor = {COLORS.TEXTINPUT}
					        placeholder={t('Repeat your password')}
			      		/>
			      	)}

	      		 	name="passwordConfirm"
	      		 	defaultValue=""
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
		      	<View style={styles.errorView} >
			    	{errors.passwordConfirm && (
			    		<Text style={styles.errorMessage} >
			    		{errors.passwordConfirm?.type === 'required' ? t('required'):errors.passwordConfirm.message}
			    		</Text>)}
			    </View>

     		</View>
     		{
     			isLoading ? (
     			<View style={{...styles.button, backgroundColor: 'rgba(124, 120, 120, 0.1)'}}>
	        		<ActivityIndicator size="small" color={COLORS.BLACK} />
	      		</View>
     			) : (
					
				<TouchableOpacity activeOpacity={0.9} style={styles.button} 
     				onPress={handleSubmit(onSubmit)}
     			>
            		<Text style={styles.textsignUp} >{t('Sign Up')}</Text>
            	</TouchableOpacity>

				)
     		}
     		

            

     	</ScrollView>

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
	    backgroundColor: 'rgba(124, 120, 120, 0.1)',
	
  	},

  	password:{
		height: 54,
	    padding: 18,
	    width: '100%',
	    borderRadius: 12,
	    backgroundColor: 'rgba(124, 120, 120, 0.1)',
	    // marginBottom: 20,
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    alignSelf: 'center',
	    flexDirection: 'row',
	},

	button:{
  		marginTop: 15,
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
    },

    errorView:{
    	flexDirection: 'row',
    	justifyContent: 'flex-end',
    	marginTop: 5,
    	marginBottom: 15, 
    	marginRight: 3, 
    },

    errorMessage:{
    	color: COLORS.DANGER,
    	fontFamily: fonts.NunitoSansReguler,
    	letterSpacing: 0.5,
    	fontSize: 12,
    }
});

export default Register;