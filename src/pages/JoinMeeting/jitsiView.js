import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet, StatusBar} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

export default class Jitsi extends Component {
  constructor(props) {
    super(props);

    const {data, audio} = props.route.params.data;

    this.state = {
      userInfo: {
        displayName: data.name,
        email: '',
        avatar: 'https:/gravatar.com/avatar/abc123',
      },
      onlyAudio: audio.camera,
      url: `https://dev.deeting.ai/${data.joinId}`,
      loading: true,
      terminate: false,
    };
  }

  componentDidMount() {
    const {userInfo, onlyAudio, url} = this.state;

    setTimeout(() => {
      StatusBar.setHidden(true, 'none');
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
      if (!onlyAudio) {
        JitsiMeet.audioCall(url, userInfo);
      } else {
        JitsiMeet.call(url, userInfo);
      }
    }, 500);
  }

  componentWillUnmount() {
    JitsiMeet.endCall();
  }

  onConferenceWillJoin = () => {};

  onConferenceJoined = () => {
    this.setState({loading: false});
    setTimeout(() => {
      this.setState({loading: true});
      this.setState({terminate: true});
    }, 100);
  };

  onConferenceTerminated = () => {
    if (this.state.terminate) {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'Landing'}],
      });
    }
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <JitsiMeetView
            onConferenceTerminated={this.onConferenceTerminated}
            onConferenceJoined={this.onConferenceJoined}
            onConferenceWillJoin={this.onConferenceWillJoin}
            style={{flex: 1, width: '100%', height: '100%'}}
          />
        )}
      </>
    );
  }
}
