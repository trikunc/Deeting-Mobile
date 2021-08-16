import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import ArrowDown from '../../assets/icons/ArrowDown.png';
import enGB from '../../assets/icons/en-GB.png';
import profilePic from '../../assets/images/profile.png';
import editPic from '../../assets/icons/Edit Photo.png';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.arrowLeft} source={ArrowLeft} />
        <Text style={styles.topView_Text}>Profile</Text>
      </View>
      <View style={styles.profile_picContainer}>
        <Image source={profilePic} />
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>First Name</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>John</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Last Name</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>Doe</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Display Name</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>John Doe</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Personal Meeting ID</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>110-989-541</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Email</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>johndoe@gmail.com</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Language</Text>
            <View style={styles.profile_wrapper}>
              <View style={styles.profile_langWrapper}>
                <Image source={enGB} style={styles.profile_flag} />
                <Text>en-GB</Text>
              </View>
              <Image source={ArrowDown} style={styles.profile_arrowDown} />
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_thirdText}>Change Password</Text>
            <Text style={styles.profile_thirdText}>See My Profile QR COde</Text>
          </View>

          <TouchableOpacity style={styles.profile_signOut}>
            <Text style={styles.profile_signOutText}>Sign Out</Text>
          </TouchableOpacity>

          <View
            style={{
              height: 350,
              // backgroundColor: 'yellow',
              display: 'flex',
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 115,
    display: 'flex',
    // paddingTop: 48.5,
    alignItems: 'center',
  },

  arrowLeft: {
    position: 'absolute',
    top: 23.5,
    left: 27,
    width: 10.5,
    height: 21,
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

  profile_picContainer: {
    position: 'absolute',
    top: 110,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    zIndex: 100,
    // left: '50%',
  },

  botView: {
    backgroundColor: COLORS.WHITE,
    // flex: 1,
    paddingTop: 58,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
  },
  profile_firstText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 14,
  },
  profile_wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 12,
    marginTop: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_secondText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '400',
    fontSize: 16,
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

  profile_thirdText: {
    fontFamily: fonts.NunitoSans,
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.SECONDARY,
    marginBottom: 12,
  },
  profile_signOut: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 28,
    padding: 12,
    height: 46,

    color: '#fff',

    backgroundColor: COLORS.DANGER,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 12,
  },
  profile_signOutText: {
    color: COLORS.WHITE,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
});
