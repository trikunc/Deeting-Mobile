import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import meetingNow from '../../assets/icons/meetingNow.png';
import joinMeeting from '../../assets/icons/joinMeeting.png';
import newSchedule from '../../assets/icons/newSchedule.png';

const HomeNav = ({navigation}) => {
  return (
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
            <Image source={newSchedule} style={styles.meetingNav_icon.img} />
            <Text style={styles.meetingNav_text}>New Schedule</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  //////// Nav
  meetingNav: {
    position: 'absolute',
    top: 110,
    width: '100%',
    // alignItems: 'center',
    zIndex: 100,
  },
  meetingNav_body: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 116,
    marginHorizontal: 20,

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
