import React, {useState} from 'react';
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

import meetingNow from '../../assets/icons/meetingNow.png';
import joinMeeting from '../../assets/icons/joinMeeting.png';

import noMeeting from '../../assets/images/NoMeeting.png';

const Meetings = ({navigation}) => {
  const [isMeeting, setIsMeeting] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topView_Text}>Hi, John Doe</Text>
      </View>

      <View style={styles.meetingNav}>
        <View style={styles.meetingNav_body}>
          <View style={styles.meetingNav_wrapper}>
            <View style={styles.meetingNav_icon}>
              <Image source={meetingNow} style={styles.meetingNav_icon.img} />
              <Text style={styles.meetingNav_text}>Meeting Now</Text>
            </View>
            <View style={styles.meetingNav_icon}>
              <Image source={joinMeeting} style={styles.meetingNav_icon.img} />
              <Text style={styles.meetingNav_text}>Join Meeting</Text>
            </View>
            <View style={styles.meetingNav_icon}>
              <Image source={meetingNow} style={styles.meetingNav_icon.img} />
              <Text style={styles.meetingNav_text}>Meeting Now</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.botView}>
        {!isMeeting && (
          <View style={{alignItems: 'center'}}>
            <Image source={noMeeting} style={styles.botView_img} />
            <Text style={styles.botView_text}>No meeting</Text>
            <Text style={styles.botView_desc}>
              You currently doesn’t have meeting
            </Text>
          </View>
        )}
        <View style={styles.upcomingMeet}>
          <Text style={styles.upcomingMeet_title}>Upcoming Meetings</Text>
          <Text style={styles.upcomingMeet_date}>Today, 5 August 2021</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Meetings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 115,
    display: 'flex',
    paddingHorizontal: 30,
  },

  topView_arrowLeft: {
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
  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingTop: 58,
    paddingBottom: 56,
    paddingHorizontal: 30,
    // justifyContent: 'center',
  },
  botView_img: {
    marginTop: 125 - 58,
  },
  botView_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    textAlign: 'center',
    color: COLORS.NEUTRAL,
    marginTop: 24,
  },
  botView_desc: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    textAlign: 'center',
    color: COLORS.GRAY,
    marginTop: 6,
  },

  /////// upcoming Meeting
  upcomingMeet: {
    marginTop: 84 - 58,
  },
  upcomingMeet_title: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 24,
    lineHeight: 1.4 * 24,
    color: COLORS.BLACK,
  },
  upcomingMeet_date: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.PRIMARY,
    marginTop: 24,
  },

  //////// Nav
  meetingNav: {
    position: 'absolute',
    top: 110,
    width: '100%',
    alignItems: 'center',
    zIndex: 100,
  },
  meetingNav_body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 116,

    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    borderRadius: 10,
  },
  meetingNav_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    width: 223,
    height: 88,
  },
  meetingNav_icon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 50,
    height: 88,
  },

  meetingNav_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 1.4 * 12,
    marginTop: 4,
    textAlign: 'center',
    color: COLORS.BLACK,
  },
});
