import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StatusBar
} from 'react-native';

import { useTranslation } from 'react-i18next';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const eyeShow = '../../assets/icons/showEye.png';
const eyeHide = '../../assets/icons/hideEye.png';

const checkboxFill = '../../assets/icons/checkbokFill.png';
const checkbox = '../../assets/icons/checkbok.png';

const SignIn = ({navigation}) => {

  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pass, setPass] = useState(true);

  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.PRIMARY}}>
      <StatusBar backgroundColor={COLORS.PRIMARY}  />
      <TouchableOpacity
        style={{marginLeft: 27, marginTop: 40}}
        onPress={() => navigation.popToTop()}>
        <Image
          source={require('../../assets/icons/ArrowLeft.png')}
          style={{height: 21, width: 10.5}}
        />
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.label}>{t('Email')}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={t('Enter your email')}
        />

        <Text style={styles.label}>{t('Password')}</Text>
        <View style={styles.password}>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={pass}
            style={{width: 220, height: 54}}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholderTextColor={COLORS.TEXTINPUT}
            placeholder={t('Enter your password')}
          />

          <TouchableOpacity onPress={() => setPass(!pass)}>
            {pass ? (
              <Image
                source={require(eyeHide)}
                style={{width: 17.98, height: 12}}
              />
            ) : (
              <Image
                source={require(eyeShow)}
                style={{width: 16.67, height: 13.42}}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.boxBottomText}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setRemember(!remember)}>
              {remember ? (
                <Image source={require(checkboxFill)} style={styles.checkbox} />
              ) : (
                <Image source={require(checkbox)} style={styles.checkbox} />
              )}
            </TouchableOpacity>
            <Text style={styles.remember}>{t('Remember me')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>{t('Forgot password')}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('TabsScreen')}
          activeOpacity={0.9}
          style={styles.button}>
          <Text style={styles.text}>{t('Sign In')}</Text>
        </TouchableOpacity>

        <Text style={styles.textOr}>{t('Or')}</Text>
        <View>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonSocial}>
            <Image
              source={require('../../assets/icons/google.png')}
              style={styles.social}
            />
            <Text style={styles.textSocial}>{t('Sign in with Google')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonSocial}>
            <Image
              source={require('../../assets/icons/apple.png')}
              style={styles.social}
            />
            <Text style={styles.textSocial}>{t('Sign in with Apple')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonSocial}>
            <Image
              source={require('../../assets/icons/facebook.png')}
              style={styles.social}
            />
            <Text style={styles.textSocial}>{t('Sign in with Facebook')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonSocial}>
            <Image
              source={require('../../assets/icons/discord.png')}
              style={styles.discord}
            />
            <Text style={styles.textSocial}>{t('Sign in with Discord')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    marginTop: 30,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  input: {
    height: 54,
    padding: 18,
    borderRadius: 12,
    // color: COLORS.TEXTINPUT,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    marginBottom: 24,
  },
  button: {
    marginTop: 41,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  label: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 19.6,
    marginBottom: 8,
  },
  text: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 16,
    color: COLORS.WHITE,
    letterSpacing: 0.5,
  },

  textOr: {
    fontFamily: fonts.NunitoSansReguler,
    letterSpacing: 0.5,
    fontSize: 16,
    marginTop: 24,
    marginBottom: 15,
    textAlign: 'center',
  },

  buttonSocial: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    borderRadius: 12,
    borderColor: '#E7E4E4',
    borderWidth: 0.4,
    shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.25,
    elevation: 2,
    marginVertical: 9,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  textSocial: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 16,
    color: COLORS.BLACK,
    letterSpacing: 0.5,
  },

  social: {
    marginLeft: 36.5,
    marginRight: 20,
    height: 24,
    width: 24,
  },

  discord:{
    marginLeft: 36.5,
    marginRight: 20,
    height: 18.58,
    width: 24,
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

  boxBottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  forgot: {
    fontFamily: fonts.NunitoSansBold,
    color: COLORS.PRIMARY,
    letterSpacing: 0.5,
    fontSize: 12,
    textAlignVertical: 'top',
  },

  remember: {
    fontFamily: fonts.NunitoSansReguler,
    letterSpacing: 0.5,
    fontSize: 12,
    textAlignVertical: 'top',
    color: '#4F4F4F',
  },

  checkbox: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});

export default SignIn;
