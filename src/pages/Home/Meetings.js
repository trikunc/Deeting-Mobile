import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import meetingNow from '../../assets/icons/meetingNow.png';
import joinMeeting from '../../assets/icons/joinMeeting.png';
import newSchedule from '../../assets/icons/newSchedule.png';
import arrowRight from '../../assets/icons/ArrowRightSecondary.png';
import noMeeting from '../../assets/images/NoMeeting.png';

const seeAllMeetings = ({navigation}) => {
  const [isMeeting, setIsMeeting] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.topView_View} >
          <Text style={{...styles.topView_Text, fontFamily: fonts.NunitoSansReguler}}>Hi, {' '}</Text>
          <Text style={styles.topView_Text}>
            John Doe
          </Text>
        </Text>
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
              <Image source={newSchedule} style={styles.meetingNav_icon.img} />
              <Text style={styles.meetingNav_text}>New Schedule</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {!isMeeting && (
            <View style={{alignItems: 'center'}}>
              <Image source={noMeeting} style={styles.botView_img} />
              <Text style={styles.botView_text}>No meeting</Text>
              <Text style={styles.botView_desc}>
                You currently doesn’t have meeting
              </Text>
            </View>
          )}

          {/* //// Upcoming Meetings */}
          <View style={styles.upcomingMeet}>
            <Text style={styles.upcomingMeet_title}>Upcoming Meetings</Text>
            <Text style={styles.upcomingMeet_date}>Today, 5 August 2021</Text>
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingInfo_time}>09:00 AM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>
                  Weekly Product Meeting
                </Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 123-000-781
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.meetingInfo}
              onPress={() => navigation.navigate('detailMeeting')}>
              <Text style={styles.meetingInfo_time}>03:00 PM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>Design Webinar</Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 671-910-223
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.upcomingMeet_date}>
              Tomorrow, 6 August 2021
            </Text>
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingInfo_time}>10:00 AM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>Website Discussion</Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 541-222-213
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.seeAll}
              onPress={() => navigation.navigate('seeAllMeetings')}>
              <View style={styles.seeAll_body}>
                <Text style={styles.seeAll_text}>See all</Text>
                <Image source={arrowRight} style={styles.seeAll_image} />
              </View>
            </TouchableOpacity>
          </View>

          {/* ////Previous Meetings */}
          <View style={styles.upcomingMeet}>
            <Text style={styles.upcomingMeet_title}>Previous Meetings</Text>
            <Text style={styles.upcomingMeet_date}>
              Tuesday, 3 August 2021{' '}
            </Text>
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingInfo_time}>09:00 AM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>
                  Weekly Product Meeting
                </Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 123-000-781
                </Text>
              </View>
            </View>
            <View style={styles.seeAll}>
              <View style={styles.seeAll_body}>
                <Text style={styles.seeAll_text}>See all</Text>
                <Image source={arrowRight} style={styles.seeAll_image} />
              </View>
            </View>
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

export default seeAllMeetings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: Platform.OS === 'ios' ? 0 : 1,
  },

  topView: {
    height: Platform.OS === 'ios' ? 115 : 150,
    display: 'flex',
    paddingHorizontal: 30,
  },

  topView_View: {
    top: Platform.OS === 'ios' ? 23.5 : 40,
    // marginLeft: 30,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansBold,
    fontSize: 18,
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

  ////////// See All Buttons below
  seeAll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 12,
  },
  seeAll_body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 59,
    height: 17,
    justifyContent: 'space-between',
  },
  seeAll_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 1.4 * 12,

    textAlign: 'center',
    color: COLORS.SECONDARY,
  },
  seeAll_image: {
    width: 14,
    height: 9,
  },

  ////////// Meeting Info
  meetingInfo: {
    // width: 315,
    width: '100%',
    height: 82,
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    borderRadius: 10,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  meetingInfo_time: {
    width: 48,
    height: 54,
    marginLeft: 12,

    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    textAlign: 'right',
    color: COLORS.BLACK,
  },
  meetingInfo_textBody: {
    display: 'flex',
    flexDirection: 'column',
    width: 188,
    height: 48,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  meetingInfo_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
  },
  meetingInfo_textId: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.GRAY,
    marginTop: 4,
  },

  //////// Nav
  meetingNav: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 110 : 90,
    width: '100%',
    // alignItems: 'center',
    zIndex: 100,
  },
  meetingNav_body: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 116,
    marginHorizontal: 20,
    elevation: Platform.OS === 'ios' ? 2 : 9,
    backgroundColor: COLORS.WHITE,
     shadowColor: 'rgba(0, 0, 0, 0.25)',
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
