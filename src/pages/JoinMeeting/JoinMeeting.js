import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import {offSwitch, onSwitch} from '../../assets/index';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const JoinMeeting = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [camera, setCamera] = useState(true);
  const [audio, setAudio] = useState(true);

  const { control, handleSubmit, formState: { errors, isValid }, getValues } = useForm({mode: 'onSubmit'});

  const onSubmit = async(users) => {
    const OnlyAudio ={camera:camera, audio:audio};
    navigation.navigate('LoadingRoom', {data: users, audio: OnlyAudio});
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <View style={styles.topView}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/ArrowLeft.png')}
            style={styles.imageBack}
          />
        </TouchableOpacity>

        <Text style={styles.textTitle}>{t('Join a Meeting')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>{t('Join with Meeting ID')}</Text>

        <Controller
          control={control}
          rules={{
           required: true,
              
          }}
          render={({ field: { onChange, onBlur, value} }) => (
            <TextInput
              style={
                errors.joinId ? 
                    {...styles.input, borderColor: COLORS.DANGER,borderWidth: 1} 
                    : {...styles.input, marginBottom: 10} 
              }
              onChangeText={onChange}
              value={value}
              placeholder={`${t('Ex: 129-992-912')}`}
            />
          )}

          name="joinId"
          defaultValue=""
        />

        <View style={styles.errorView} >
            {errors.joinId && (
              <Text style={styles.errorMessage} >
              {errors.joinId?.type === 'required' ? t('required'): ''}
              </Text>)}
        </View>

        <Text style={styles.label}>{t('Display Name')}</Text>

        <Controller
          control={control}
          rules={{
           required: true,   
          }}
          render={({ field: { onChange, onBlur, value} }) => (
            <TextInput
              style={
                errors.name ? 
                    {...styles.input, borderColor: COLORS.DANGER,borderWidth: 1} 
                    : {...styles.input, marginBottom: 10} 
              }
              onChangeText={onChange}
              value={value}
              placeholder="John Doe"
            />
            )}

          name="name"
          defaultValue=""
        />

        <View style={styles.errorView} >
            {errors.name && (
              <Text style={styles.errorMessage} >
              {errors.name?.type === 'required' ? t('required'): ''}
              </Text>)}
        </View>

        <Text style={styles.textOption}>{t('Join Options')}</Text>

        <View style={{marginTop: 12, marginBottom: 42}}>
          <View style={styles.setting}>
            <Text style={styles.text}>{t('Start with Camera')}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCamera(!camera)}>
              <Image
                source={camera ? onSwitch : offSwitch}
                style={styles.switch}
              />
            </TouchableOpacity>
          </View>

          <View style={{...styles.setting, marginTop: 18}}>
            <Text style={styles.text}>{t('DontConnectAudio')}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setAudio(!audio)}>
              <Image
                source={audio ? onSwitch : offSwitch}
                style={styles.switch}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>{t('Join')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },

  backArrow: {
    position: 'absolute',
    top: 4.5,
    left: 27,
    height: 25,
    width: 25,
  },

  imageBack: {
    height: 21,
    width: 10.5,
  },

  textTitle: {
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: fonts.NunitoSansBold,
    color: COLORS.WHITE,
    lineHeight: 27,
  },

  topView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
  },

  card: {
    backgroundColor: COLORS.WHITE,
    marginTop: 30,
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  label: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 19.6,
    marginBottom: 8,
    color: '#333333',
  },

  input: {
    height: 54,
    padding: 18,
    borderRadius: 12,
    // color: COLORS.TEXTINPUT,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
  },

  textOption: {
    fontFamily: fonts.NunitoSansBold,
    letterSpacing: 0.5,
    color: COLORS.BLACK,
    fontSize: 16,
    lineHeight: 22.4,
    marginTop: 28,
  },

  text: {
    fontFamily: fonts.NunitoSansReguler,
    letterSpacing: 0.5,
    fontSize: 16,
    lineHeight: 22.4,
    color: COLORS.BLACK,
  },

  switch: {
    width: 53,
    height: 24,
  },

  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    marginTop: 41,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },

  buttonText: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 16,
    color: COLORS.WHITE,
    letterSpacing: 0.5,
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

export default JoinMeeting;
