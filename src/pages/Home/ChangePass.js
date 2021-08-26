import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import eyeHide from '../../assets/icons/hideEye.png';
import eyeShow from '../../assets/icons/showEye.png';
import {TextInput} from 'react-native-gesture-handler';

const ChangePass = ({navigation}) => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');
  const [pass1, setPass1] = useState(true);
  const [pass2, setPass2] = useState(true);
  const [pass3, setPass3] = useState(true);

  const [remember, setRemember] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={styles.topView_arrowLeft}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 10.5,
              height: 21,
            }}
            source={ArrowLeft}
          />
        </TouchableOpacity>
        <Text style={styles.topView_Text}>Change Password</Text>
      </View>

      <View style={styles.botView}>
        <View>
          <Text style={styles.label}>Old Password</Text>
          <View style={styles.password}>
            <TextInput
              autoCapitalize="none"
              secureTextEntry={pass1}
              style={{width: 220, height: 54}}
              onChangeText={text => setPassword1(text)}
              value={password1}
              placeholderTextColor={COLORS.TEXTINPUT}
              placeholder="Enter your password"
            />

            <TouchableOpacity onPress={() => setPass1(!pass1)}>
              {pass1 ? (
                <Image source={eyeHide} style={{width: 17.98, height: 12}} />
              ) : (
                <Image source={eyeShow} style={{width: 16.67, height: 13.42}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.password}>
            <TextInput
              autoCapitalize="none"
              secureTextEntry={pass2}
              style={{width: 220, height: 54}}
              onChangeText={text => setPassword2(text)}
              value={password2}
              placeholderTextColor={COLORS.TEXTINPUT}
              placeholder="Enter your password"
            />

            <TouchableOpacity onPress={() => setPass2(!pass2)}>
              {pass2 ? (
                <Image source={eyeHide} style={{width: 17.98, height: 12}} />
              ) : (
                <Image source={eyeShow} style={{width: 16.67, height: 13.42}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.password}>
            <TextInput
              autoCapitalize="none"
              secureTextEntry={pass3}
              style={{width: 220, height: 54}}
              onChangeText={text => setPassword3(text)}
              value={password3}
              placeholderTextColor={COLORS.TEXTINPUT}
              placeholder="Enter your password"
            />

            <TouchableOpacity onPress={() => setPass3(!pass3)}>
              {pass3 ? (
                <Image source={eyeHide} style={{width: 17.98, height: 12}} />
              ) : (
                <Image source={eyeShow} style={{width: 16.67, height: 13.42}} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{...styles.button_submit, backgroundColor: COLORS.PRIMARY}}>
          <Text style={{...styles.button_text, color: COLORS.WHITE}}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{...styles.button_submit, ...styles.button_cancel}}>
          <Text style={{...styles.button_text, color: COLORS.PRIMARY}}>
            cancel
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePass;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 96,
    display: 'flex',
    // paddingTop: 48.5,
    alignItems: 'center',
  },

  topView_arrowLeft: {
    position: 'absolute',
    top: 23.5,
    left: 27,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 18,
    top: 23.5,
    letterSpacing: 0.5,
  },

  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingTop: 58,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  label: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 19.6,
    marginBottom: 8,
  },
  password: {
    height: 54,
    padding: 18,
    width: '100%',
    borderRadius: 12,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    marginBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button_submit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 28,
    padding: 12,
    height: 46,

    color: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 12,
  },
  button_cancel: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  button_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
});
