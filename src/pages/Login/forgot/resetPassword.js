import React, {useState} from 'react';
import {
	SafeAreaView, 
	View, 
	Text, 
	Image, 
	TouchableOpacity, 
	StyleSheet,
	TextInput,
	Dimensions
} from 'react-native';

import Modal from 'react-native-modal';

import COLORS from '../../../utils/color';
import {fonts } from '../../../utils/fonts';

const eyeShow = '../../../assets/icons/showEye.png';
const eyeHide = '../../../assets/icons/hideEye.png';
const deviceHeight = Dimensions.get('window').height;

const ResetPassword = ({navigation}) => {

	const [password, setPassword] = useState('');
	const [passwordConfirm, setConfirm] = useState('');

	const [visible, setVisible] = useState(false);
	const [pass, setPass] = useState(true);
	const [passConfirm, setPassConfirm] = useState(true);


	function backSign() {
		setVisible(false);
		navigation.navigate('SignIn');
	}

   return(
     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.PRIMARY }}>
        <TouchableOpacity 
     		style={{ marginLeft: 27, marginTop: 50 }} 
     		onPress={() => navigation.goBack()}
     	>
     		<Image source={require('../../../assets/icons/ArrowLeft.png')} style={{ height: 21, width: 10.5 }} />
     	</TouchableOpacity>

     	<View style={{ alignItems: 'center', marginTop: 35.5}} >
     		<Image source={require('../../../assets/icons/changePassword.png')} style={{ height: 200, width: 223 }} />
     	</View>

     {/* card */}

     	<View style={styles.card} >
     		<Text style={styles.forgotPassword} >Reset Password</Text>
     		<Text style={styles.text}>Create your a new password</Text>

     		<View style={{ marginTop: 30 }} >
	     		<Text style={styles.label} >Create Password</Text>
	      		<View style={styles.password} >
		      		<TextInput
		      			autoCapitalize="none"
		              	secureTextEntry={pass}
				        style={{ width: 220, height: 54}}
				        onChangeText={(text) => setPassword(text)}
				        value={password}
				        placeholderTextColor = {COLORS.TEXTINPUT}
				        placeholder="Min.6 characters, 1 capital letter"
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

	      		<Text style={styles.label} >Confirm Password</Text>
	      		<View style={styles.password} >
		      		<TextInput
		      			autoCapitalize="none"
		              	secureTextEntry={pass}
				        style={{ width: 220, height: 54}}
				        onChangeText={(text) => setConfirm(text)}
				        value={passwordConfirm}
				        placeholderTextColor = {COLORS.TEXTINPUT}
				        placeholder="Repeat your password"
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
      			onPress={() => setVisible(true)}
      		>
        		<Text style={styles.textSave} >Save</Text>
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
	      			
	      			<Image source={require('../../../assets/icons/keyOk.png')}  
	      				style={styles.image}
	      			/>

	      			<Text style={styles.textSucces} >
	      				Password Changed Successfully!
	      			</Text>

	      			<View style={{ marginTop: 30 }} >
	      				<TouchableOpacity style={{ flexDirection: 'row'}} 
	      					onPress={() => backSign()}
	      				>
	      					<Text style={styles.backSign} >Back to Sign In</Text>
	      					<Image source={require('../../../assets/icons/ArrowRight.png')} 
	      						style={{ 
	      							width: 19, 
	      							height: 11.5,
	      							marginTop: 6, 
	      						}}
	      					/>
	      				</TouchableOpacity>
	      			</View>

	      		</View>
	      	</View>
      	</Modal>


     </SafeAreaView>
   );
}

const styles = StyleSheet.create({

	card:{
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

    button:{
  		marginTop: 18,
		backgroundColor: COLORS.PRIMARY,
		paddingVertical: 12,
		alignItems: 'center', 
		borderRadius: 12,
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

	label:{
  		fontFamily: fonts.NunitoSansSemiBold,
  		fontSize: 14,
  		letterSpacing: 0.5,
  		lineHeight: 19.6,
  		marginBottom: 8,
  	},

  	textSave:{
		color: COLORS.WHITE,
		letterSpacing: 0.5,
		lineHeight: 22.4,
		fontFamily: fonts.NunitoSansSemiBold,
		fontSize: 16
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

  	image:{
		width: 150,
		height: 150,
		marginTop: 40,
	},

	textSucces:{
		marginTop: 16,
		fontSize: 24,
		letterSpacing: 0.5,
		lineHeight: 33.6,
		fontFamily: fonts.NunitoSansBold,
		textAlign: 'center', 
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

export default ResetPassword;