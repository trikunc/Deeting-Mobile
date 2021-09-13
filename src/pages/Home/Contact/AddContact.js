import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import {ButtonPrimary} from '../../../components/Button/ButtonComponent';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import {TextInput} from 'react-native-gesture-handler';

const AddContact = ({navigation}) => {
  const [email, setEmail] = useState('');
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
        <Text style={styles.topView_Text}>Add Contact</Text>
      </View>

      <View style={styles.midView}>
        <Text style={styles.midView_text}>
          With just an email address you and your contact can make a video call,
          a audio call or message each other immediately
        </Text>
      </View>

      <View style={styles.botView}>
        <View style={styles.botView_email}>
          <TextInput
            style={styles.botView_emailInput}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Enter email address"
          />
        </View>

        <ButtonPrimary
          text="Add to Contact"
          callBack={() => alert('Add to Contact')}
        />
        <ButtonPrimary
          text="Cancel"
          callBack={() => navigation.goBack()}
          border={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddContact;

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
    top: Platform.OS === 'ios' ? 23.5 : 40,
    left: 27,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 18,
    top: Platform.OS === 'ios' ? 23.5 : 40,
    letterSpacing: 0.5,
  },

  midView: {
    // width: 375,
    height: 100,
    backgroundColor: '#9E8DE6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midView_text: {
    width: 304,
    marginHorizontal: 35,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 1.4 * 14,
    textAlign: 'center',
    color: COLORS.NEUTRAL,
  },

  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingTop: 58,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  botView_email: {
    height: 54,
    padding: 18,
    width: '100%',
    borderRadius: 12,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    marginBottom: 24,
  },
});
