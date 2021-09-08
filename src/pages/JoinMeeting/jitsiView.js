import React, { useEffect, useState } from 'react';
import {
	View, 
	Text, 
} from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const Jitsi = ({navigation, route}) => {

	const [loading, setLoading] = useState(true);

	const url = `https://dev.deeting.ai/${route.params.data.data.joinId}`;
	const userInfo = {
	    displayName: route.params.data.data.name,
	    email: '',
	    avatar: 'https:/gravatar.com/avatar/abc123',
	};

	const onlyAudio = route.params.data.audio.camera;

	useEffect(() => {
   
  		setTimeout(() => {

			if (!onlyAudio) {
				JitsiMeet.audioCall(url, userInfo);
			} else {
				JitsiMeet.call(url, userInfo);
			}
		}, 1000);


  	}, [])


    function onConferenceTerminated() {
    
     	if(!loading){
	    	console.log('its terminate')
	    	JitsiMeet.endCall()
	    	navigation.reset({
		        index: 0,
		        routes: [{ name: 'Landing' }],
      		});
     	}
	    
  	}


	function onConferenceJoined() {
	    /* Conference joined event */
	    console.log('joined')
	}

  	function onConferenceWillJoin() {
    /* Conference will join event */
    	console.log('join')
    	setLoading(false);
  	}
        

	return(
		<>
			<JitsiMeetView
	      		onConferenceTerminated={e => onConferenceTerminated(e)}
	      		onConferenceJoined={e => onConferenceJoined(e)}
	      		onConferenceWillJoin={e => onConferenceWillJoin(e)}
			      style={{
			        flex: 1,
			        height: '50%',
			        width: '100%',
			      }}
			/>
		</>
	);
}

export default Jitsi;