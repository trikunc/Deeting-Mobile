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
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {API_URL} from '@env';

import { useDispatch } from 'react-redux';
import { login } from '../../action/index';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const eyeShow = '../../assets/icons/showEye.png';
const eyeHide = '../../assets/icons/hideEye.png';

const checkboxFill = '../../assets/icons/checkbokFill.png';
const checkbox = '../../assets/icons/checkbok.png';

const SignIn = ({navigation}) => {

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const { control, handleSubmit, formState: { errors, isValid }, getValues } = useForm({mode: 'onSubmit'});
  

  const [pass, setPass] = useState(true);
  const [remember, setRemember] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async({email, password}) => {
    setLoading(true);
    axios.defaults.headers.post['Content-Type'] ='application/json';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


    try {
      const response = await axios.post(`${API_URL}/login`, {
        email:email, password:password
      });

      

      const jsonValue = JSON.stringify(response.data.data.authToken);
      await AsyncStorage.setItem('userToken', jsonValue);
      
      const decoded = jwt_decode(response.data.data.authToken);
      const userData = {
        token:response.data.data.authToken,
        user:decoded
      };
      await dispatch(login(userData));
      setLoading(false);
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'TabsScreen' }],
      });

    } catch (err) {
      console.log(err);
      Alert.alert('Sorry', "Password Not Match")
      setLoading(false);
    }
  };

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

      <ScrollView style={styles.card}>
        <Text style={styles.label}>{t('Email')}</Text>

        <Controller
              control={control}
              rules={{
               required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: t('validEmail'),
                },
                  
              }}
              render={({ field: { onChange, onBlur, value} }) => (
                <TextInput
                  style={
                    errors.email ? 
                    {...styles.input, borderColor: COLORS.DANGER,borderWidth: 1} 
                    : {...styles.input, marginBottom: 5} 
                  }
                  onChangeText={onChange}
                  value={value}
                  placeholder={t('Enter your email')}
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

        <Text style={styles.label}>{t('Password')}</Text>
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
              autoCapitalize="none"
              secureTextEntry={pass}
              style={{width: 220, height: 54}}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={COLORS.TEXTINPUT}
              placeholder={t('Enter your password')}
            />
          )}

          name="password"
          defaultValue=""
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

        <View style={styles.errorView} >
            {errors.password && (
              <Text style={styles.errorMessage} >
              {errors.password?.type === 'required' ? t('required'):errors.password.message}
              </Text>
              )}
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

        
      { 
        isLoading
        ?
        (
          <View style={{...styles.button, backgroundColor: 'rgba(124, 120, 120, 0.1)'}}>
              <ActivityIndicator size="small" color={COLORS.BLACK} />
          </View>
        )
        :(
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            activeOpacity={0.9}
            style={styles.button}
          >
            <Text style={styles.text}>{t('Sign In')}</Text>
          </TouchableOpacity>
        )
      }


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
      </ScrollView>

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
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
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
    // marginBottom: 24,
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

  errorView:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
    marginBottom: 10, 
    marginRight: 3, 
  },

  errorMessage:{
    color: COLORS.DANGER,
    fontFamily: fonts.NunitoSansReguler,
    letterSpacing: 0.5,
    fontSize: 12,
  }
});

export default SignIn;
