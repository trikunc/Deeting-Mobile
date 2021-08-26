import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import arrowRight from '../../../assets/icons/ArrowRightSecondary.png';
import Refresh from '../../../assets/icons/Refresh.png';

const seeAllMeetings = ({navigation}) => {
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
        <Text style={styles.topView_Text}>Upcoming Meetings</Text>
        <TouchableOpacity style={styles.topView_refresh}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={Refresh}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* //// Upcoming Meetings */}
          <View style={styles.upcomingMeet}>
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
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingInfo_time}>03:00 PM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>Design Webinar</Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 671-910-223
                </Text>
              </View>
            </View>
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
            <Text style={styles.upcomingMeet_date}>Monday, 9 August 2021</Text>
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingInfo_time}>13:00 PM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>Alex’s Meeting</Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 341-214-567
                </Text>
              </View>
            </View>
            <View style={styles.meetingInfo}>
              <Text style={styles.meetingInfo_time}>19:00 PM</Text>
              <View style={styles.meetingInfo_textBody}>
                <Text style={styles.meetingInfo_text}>
                  Data Science Bootcamp
                </Text>
                <Text style={styles.meetingInfo_textId}>
                  Meeting ID: 900-123-456
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default seeAllMeetings;

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
  topView_refresh: {
    position: 'absolute',
    top: 23.5,
    right: 27,
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
    paddingTop: 4,
    paddingBottom: 56,
    paddingHorizontal: 30,
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
});
