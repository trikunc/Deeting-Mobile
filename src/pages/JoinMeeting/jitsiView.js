import React, { Component } from 'react';
import {
	View, 
	ActivityIndicator,
	StyleSheet,
	Alert,
} from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';


export default class Jitsi extends Component {

	constructor(props) {
		super(props);

		const {data, audio} = props.route.params.data;

		this.state = {
			userInfo:{
				displayName:data.name,
				email:'',
				avatar:'https:/gravatar.com/avatar/abc123'
			},
			onlyAudio: audio.camera,
			url:`https://dev.deeting.ai/${data.joinId}`,
			loading:true
		};


	}

	componentDidMount() {
		const { userInfo, onlyAudio, url } = this.state;

		setTimeout(() => {
			if (!onlyAudio) {
				JitsiMeet.audioCall(url, userInfo);
			} else {
				JitsiMeet.call(url, userInfo);
			}

		}, 100);
	}

	componentWillUnmount() {
		JitsiMeet.endCall();
	}

	onConferenceWillJoin = () => {
		this.setState({ loading: false });
	}

	onConferenceJoined = () => {

	}

	onConferenceTerminated = () => {

		if(!this.state.loading){
			this.props.navigation.reset({
	        	index: 0,
	        	routes: [{ name: 'Landing' }],
      		});
		}
	}

	render() {

		return(
			<>
				<JitsiMeetView
		      		onConferenceTerminated={this.onConferenceTerminated}
		      		onConferenceJoined={this.onConferenceJoined}
		      		onConferenceWillJoin={this.onConferenceWillJoin}
		      		style={StyleSheet.absoluteFill}
				/>

				{
					this.state.loading ? 
						<View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }} >
							<ActivityIndicator size="large" color='#000000' /> 
						</View>
					:null
				}
			</>
		);
	}
}