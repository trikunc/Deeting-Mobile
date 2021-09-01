import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';
import {
  ButtonPrimary,
  ButtonBorder,
} from '../../../components/Button/ButtonComponent';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import profilePic from '../../../assets/images/profile.png';
import editPic from '../../../assets/icons/EditPhoto.png';

const EditProfile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.topView_arrowLeft}>
          <Image
            style={{
              width: 10.5,
              height: 21,
            }}
            source={ArrowLeft}
          />
        </TouchableOpacity>
        <Text style={styles.topView_Text}>Edit My Profile</Text>
      </View>
      <View style={styles.profile_picContainer}>
        <View style={styles.profile_picBorder}>
          <Image source={profilePic} />
          <TouchableOpacity style={styles.profile_picBadge}>
            <Image source={editPic} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.personInfo}>
            <Text style={styles.personInfo_text}>Personal Information</Text>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>First Name</Text>
            <View style={styles.profile_wrapper}>
              <TextInput
                style={styles.profile_secondText}
                onChangeText={setFirstName}
                value={firstName}
                placeholderTextColor={COLORS.TEXTINPUT}
                placeholder="John"
              />
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Last Name</Text>
            <View style={styles.profile_wrapper}>
              <TextInput
                style={styles.profile_secondText}
                onChangeText={setLastName}
                value={lastName}
                placeholderTextColor={COLORS.TEXTINPUT}
                placeholder="Doe"
              />
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Display Name</Text>
            <View style={styles.profile_wrapper}>
              <TextInput
                style={styles.profile_secondText}
                onChangeText={setDisplayName}
                value={displayName}
                placeholderTextColor={COLORS.TEXTINPUT}
                placeholder="John Doe"
              />
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Personal Meeting ID</Text>
            <Text style={styles.profile_note}>
              This information disable to change
            </Text>
            <View
              style={{
                ...styles.profile_wrapper,
                backgroundColor: 'rgba(134, 132, 132, 0.27)',
              }}>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                style={styles.profile_secondText}
                value={'110-989-541'}
              />
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Email</Text>
            <View style={styles.profile_wrapper}>
              <TextInput
                style={styles.profile_secondText}
                onChangeText={setEmail}
                value={email}
                placeholderTextColor={COLORS.TEXTINPUT}
                placeholder="johndoe@gmail.com"
              />
            </View>
          </View>

          <View style={{marginTop: 30}}>
            <ButtonPrimary text="Save" />
            <ButtonBorder text="Cancel" callBack={() => navigation.goBack()} />
          </View>
          <View
            style={{
              height: Platform.OS === 'ios' ? 250 : 150,
              display: 'flex',
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: Platform.OS === 'ios' ? 0 : 1,
  },

  topView: {
    height: Platform.OS === 'ios' ? 115 : 150,
    // height: '18%',
    display: 'flex',
    alignItems: 'center',
  },

  topView_arrowLeft: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 23.5 : 40,
    left: 27,
    width: 10.5,
    height: 21,
  },

  topView_Text: {
    color: COLORS.WHITE,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansBold,
    fontSize: 18,
    top: Platform.OS === 'ios' ? 23.5 : 40,
    letterSpacing: 0.5,
  },

  profile_picContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 110 : 90,
    width: '100%',
    alignItems: 'center',
    zIndex: 100,
  },
  profile_picBorder: {
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF9F9',
    borderRadius: 55,
    elevation: Platform.OS === 'ios' ? 2 : 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  profile_picBadge: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 0,
    bottom: 10,
  },
  botView: {
    backgroundColor: COLORS.WHITE,
    // flex: 1,
    paddingTop: 58,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  personInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 86 - 58,
  },
  personInfo_text: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: COLORS.BLACK,
    letterSpacing: 0.5,
  },

  profile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
    marginBottom: 4,
  },
  profile_firstText: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 14,
    letterSpacing: 0.5,
  },
  profile_note: {
    fontFamily: fonts.NunitoSansLight,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    marginTop: 4,
    letterSpacing: 0.5,
  },
  profile_wrapper: {
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
    paddingHorizontal: Platform.OS === 'ios' ? 12 : 0,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 12,
    marginTop: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
  },
  profile_secondText: {
    fontFamily: fonts.NunitoSansReguler,
    letterSpacing: 0.5,
    fontSize: 16,
    width: '100%',
  },
  profile_langWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  profile_flag: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  profile_arrowDown: {
    width: 20,
    height: 20,
    marginRight: 12,
  },

  button_danger: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    padding: 12,
    height: 46,
    borderRadius: 12,

    backgroundColor: COLORS.DANGER,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  button_primary: {
    color: COLORS.WHITE,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
});
