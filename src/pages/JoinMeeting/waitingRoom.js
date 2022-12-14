import React, { useState } from 'react';
import {
	SafeAreaView, 
	View, 
	Text, 
	TouchableOpacity, 
	Image, 
	StyleSheet, 
	StatusBar, 
	TextInput,
	ScrollView,
} from 'react-native';

import { useTranslation } from 'react-i18next';

import { send, plus } from '../../assets/index';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const WaitingRoom = ({navigation, route}) => {

	const { t, i18n } = useTranslation();

	const [chat, setChat] = useState('');
	const [is_admin, setAdmin] = useState(true);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar  backgroundColor={COLORS.PRIMARY} />
			<View style={styles.topView}>
				<TouchableOpacity
	        		style={styles.backArrow}
	        		onPress={() => navigation.navigate('JoinMeeting')}
	        	>
	        		<Image
	          			source={require('../../assets/icons/ArrowLeft.png')}
	          			style={styles.imageBack}
	        		/>
	      		</TouchableOpacity>

	      		<Text style={styles.textTitle}>{t('Waiting Room')}</Text>

	      		{
	      			is_admin ? (
	      				<TouchableOpacity  
	      					onPress={() => 

	      						navigation.reset({
							        index: 0,
							        routes: [
							        	{ 
							        		name: 'JitsiView', 
							        		params:{data:route.params.data} 
							        	}
							        ],
					      		})
	      					}
	      					style={styles.buttonStart}
	      				>
	      					<Text style={styles.fontStart} >{t('start')}</Text>
	      				</TouchableOpacity>
	      			) : null
	      		}

	      	</View>

	      	<View style={styles.card}>
	      		<View style={styles.topInfo} >
	      			<Text style={styles.textInfo}>(3) {t('People Waiting')}</Text>
	      	</View>

	      	{/* content */}

	      		<ScrollView style={styles.content}>
	      			
	      			{/*chat right*/}
	      			<View style={{...styles.chat, justifyContent: 'flex-end'}}>
	      				<View style={styles.boxTextRight}>
	      					<Text style={styles.textChat}>Hi, guys</Text>
	      				</View>
	      				<Image style={styles.avatar} source={require('../../assets/images/avatar_1.png')} />
	      			</View>

	      			{/*chat left*/}
	      			<View style={{...styles.chat, justifyContent: 'flex-start', marginBottom : 8}}>
	      				<View style={{...styles.boxTextLeft, marginLeft: 40}}>
	      					<Text style={styles.textChat}>Hi, John</Text>
	      				</View>
	      			</View>
	      			<View style={{...styles.chat, justifyContent: 'flex-start'}}>
	      				<Image style={styles.avatar} source={require('../../assets/images/avatar_2.png')} />
	      				<View style={styles.boxTextLeft}>
	      					<Text style={styles.textChat}>How are you?</Text>
	      				</View>
	      			</View>


	      			{/*chat right*/}

	      			<View style={{...styles.chat, justifyContent: 'flex-end', marginBottom : 8}}>
	      				<View style={{...styles.boxTextRight, marginRight: 40}}>
	      					<Text style={styles.textChat}>Good, Thao</Text>
	      				</View>
	      			</View>

	      			<View style={{...styles.chat, justifyContent: 'flex-end'}}>
	      				<View style={styles.boxTextRight}>
	      					<Text style={styles.textChat}>You?</Text>
	      				</View>
	      				<Image style={styles.avatar} source={require('../../assets/images/avatar_1.png')} />
	      			</View>

	      		{/*chat left*/}
	      			<View style={{...styles.chat, justifyContent: 'flex-start'}}>
	      				<Image style={styles.avatar} source={require('../../assets/images/avatar_2.png')} />
	      				<View style={styles.boxTextLeft}>
	      					<Text style={styles.textChat}>Pretty good!</Text>
	      				</View>
	      			</View>

	      		{/*endchat*/}

	      		</ScrollView>

	      	</View>

	      	<View style={styles.bottomInput}>
	      		<View style={styles.input}>
		      		<TextInput
			          onChangeText={text => setChat(text)}
			          value={chat}
			          placeholder={t('placeHolderWaitingRoom')}
			        />
			        <TouchableOpacity  
			        	style={styles.buttonPlus}
			        >
			        	<Image source={plus} style={styles.file} />
			        </TouchableOpacity>
		        </View>
		        <TouchableOpacity style={styles.button} >
		        	<Image source={send} style={{ width: 20.2, height: 19.42 }}  />
		        </TouchableOpacity>
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

	textTitle:{
		fontSize: 18,
		letterSpacing: 0.5,
		fontFamily: fonts.NunitoSansBold,
		color:COLORS.WHITE,
		lineHeight: 27, 
	},

	buttonStart:{
		backgroundColor: '#FF5151',
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 8,
		position: 'absolute',
		right: 10,
	},

	fontStart:{
		fontFamily: fonts.NunitoSansBold,
		letterSpacing: 0.5,
		color: COLORS.WHITE,
		fontSize: 16,
		lineHeight: 22.4,
	},

	card:{
		backgroundColor: COLORS.WHITE,
	    marginTop: 30,
	    height: '100%',
	},

	topInfo:{
		height: 40,
		backgroundColor: 'rgba(136, 136, 136, 0.1)',
		alignItems: 'center', 
		paddingVertical: 6,
	},

	textInfo:{
		fontSize: 16,
		fontFamily: fonts.NunitoSansSemiBold,
		letterSpacing: 0.5,
		lineHeight: 22.4,
		color: COLORS.PRIMARY,
	},

	content:{
		paddingVertical: 20,
		paddingHorizontal: 20,
	},



	chat:{
		flexDirection: 'row', 
		alignItems: 'center',
		marginBottom: 30,
	},

	textChat:{
		fontFamily: fonts.NunitoSansReguler,
		fontSize: 16,
		letterSpacing: 0.5,
		lineHeight: 22.4,
		color: COLORS.WHITE,
	},

	boxTextRight:{
		marginRight: 8,
		backgroundColor: '#9E8DE6',
		alignItems: 'center',
		justifyContent: 'center',
		height: 36,
		borderBottomLeftRadius: 12,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		paddingHorizontal: 14,   
	},

	boxTextLeft:{
		marginLeft: 8,
		backgroundColor: '#707070',
		alignItems: 'center',
		justifyContent: 'center',
		height: 36,
		borderBottomRightRadius: 12,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		paddingHorizontal: 14,   
	},

	avatar:{
		width: 32,
		height: 32,
	},

	bottomInput:{
		width: '100%',
        bottom: 10,
        position: 'absolute',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent:'space-between',  
	},

	input: {
	    height: 50,
	    width: '80%',
	    paddingHorizontal: 12,
	    borderRadius: 12,
	    backgroundColor: COLORS.WHITE,
	    borderWidth: 1,
	    borderColor: '#BFBFBF',
	    flexDirection: 'row',
	    justifyContent: 'space-between',  

  	},

  	buttonPlus:{
		height: 25,
		width: 25,
		backgroundColor: '#707070',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center', 
		marginTop: 11, 
	},

  	file:{ 
  		width: 16, 
  		height: 16, 
  	},

  	button:{
  		marginTop: 2,
  		backgroundColor: COLORS.PRIMARY,
  		width: 44,
  		height: 44,
  		borderRadius: 60,
  	 	alignItems: 'center', 
  	 	justifyContent: 'center', 
  	}

});

export default WaitingRoom;