import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import moment from 'moment';

import HomeNav from '../../components/Navigation/HomeNav';
import MeetingCard from '../../components/Card/MeetingCard';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import arrowRight from '../../assets/icons/ArrowRightSecondary.png';
import bellNotif from '../../assets/icons/bellNotif.png';
import noMeeting from '../../assets/images/NoMeeting.png';

import {meetingList} from '../../dumyData';

const seeAllMeetings = ({navigation}) => {
  const [isMeeting, setIsMeeting] = useState({});
  const [todayArr, setTodayArr] = useState([]);
  const [tomorrowArr, setTomorrowArr] = useState([]);
  const [beforeDayArr, setBeforeDayArr] = useState([]);
  const [afterDayArr, setAfterDayArr] = useState([]);
  const [newItemTest, setNewItemTest] = useState([]);
  const [newArr1, setNewArr1] = useState([]);
  const [newArr2, setNewArr2] = useState([]);

  useEffect(() => {
    meetingList.map(item => {
      const date = moment(item.when);
      let newItem;
      date.calendar(null, {
        sameDay: function () {
          let check_arr = todayArr.filter(
            check => check.meetingId === item.meetingId,
          );
          if (check_arr.length === 0) {
            setTodayArr(todayArr => [...todayArr, item]);
            setNewArr1(newArr1 => [...newArr1, item]);
          }
        },
        nextDay: () => {
          let check_arr = tomorrowArr.filter(
            check => check.meetingId === item.meetingId,
          );
          if (check_arr.length === 0) {
            setTomorrowArr(tomorrowArr => [...tomorrowArr, item]);
            setNewArr1(newArr1 => [...newArr1, item]);
          }
        },
        nextWeek: () => {
          let check_arr = afterDayArr.filter(
            check => check.meetingId === item.meetingId,
          );
          if (check_arr.length === 0) {
            setAfterDayArr(afterDayArr => [...afterDayArr, item]);
            setNewArr1(newArr1 => [...newArr1, item]);
          }
        },
        lastDay: () => {
          let check_arr = beforeDayArr.filter(
            check => check.meetingId === item.meetingId,
          );
          if (check_arr.length === 0) {
            setBeforeDayArr(beforeDayArr => [...beforeDayArr, item]);
            setNewArr2(newArr2 => [...newArr2, item]);
          }
        },
        lastWeek: () => {
          let check_arr = beforeDayArr.filter(
            check => check.meetingId === item.meetingId,
          );
          if (check_arr.length === 0) {
            setBeforeDayArr(beforeDayArr => [...beforeDayArr, item]);
            setNewArr2(newArr2 => [...newArr2, item]);
          }
        },
        sameElse: () => {
          // console.log(date.isBefore(moment()));
          if (date.isBefore(moment())) {
            let check_arr = beforeDayArr.filter(
              check => check.meetingId === item.meetingId,
            );
            if (check_arr.length === 0) {
              setBeforeDayArr(beforeDayArr => [...beforeDayArr, item]);
              setNewArr2(newArr2 => [...newArr2, item]);
            }
          } else {
            let check_arr = afterDayArr.filter(
              check => check.meetingId === item.meetingId,
            );
            if (check_arr.length === 0) {
              setAfterDayArr(afterDayArr => [...afterDayArr, item]);
              setNewArr1(newArr1 => [...newArr1, item]);
            }
          }
        },
      });
    });
  }, []);

  console.log('newArr1=>', newArr1);

  const convertDate = item => {
    return moment(item[0]['when']).format('DD MMMM YYYY');
  };

  console.log('======================================');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.topView_header}>
          <View style={styles.topView_headerName}>
            <Text
              style={{
                ...styles.topView_text,
                fontFamily: fonts.NunitoSansReguler,
              }}>
              Hi,{' '}
            </Text>
            <Text style={styles.topView_text}>John Doe</Text>
          </View>
          <TouchableOpacity style={styles.topView_headerNotif}>
            <Image source={bellNotif} style={{height: 24, width: 20}} />
          </TouchableOpacity>
        </View>
      </View>

      <HomeNav navigation={navigation} />

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
            {todayArr.length > 0 && (
              <Text style={styles.upcomingMeet_date}>Today, test</Text>
            )}

            {todayArr.map(item => (
              <MeetingCard
                key={item.meetingId}
                id={item.meetingId}
                title={item.meeting_name}
                colors="green"
                callBack={() =>
                  navigation.navigate('detailMeeting', {
                    id: item.meetingId,
                    title: item.meeting_name,
                  })
                }
              />
            ))}

            {tomorrowArr.length > 0 && (
              <Text style={styles.upcomingMeet_date}>
                Tomorrow, {convertDate(tomorrowArr)}
              </Text>
            )}

            {tomorrowArr.map(item => (
              <MeetingCard
                key={item.meetingId}
                id={item.meetingId}
                title={item.meeting_name}
                colors="orange"
                callBack={() =>
                  navigation.navigate('detailMeeting', {
                    id: item.meetingId,
                    title: item.meeting_name,
                  })
                }
              />
            ))}

            <TouchableOpacity
              style={styles.seeAll}
              onPress={() =>
                navigation.navigate('seeAllMeetings', {
                  data: newArr1,
                  title: 'Upcoming Meetings',
                })
              }>
              <View style={styles.seeAll_body}>
                <Text style={styles.seeAll_text}>See all</Text>
                <Image source={arrowRight} style={styles.seeAll_image} />
              </View>
            </TouchableOpacity>
          </View>

          {/* ////Previous Meetings */}
          <View style={styles.upcomingMeet}>
            <Text style={styles.upcomingMeet_title}>Previous Meetings</Text>

            {beforeDayArr.length > 0 && (
              <Text style={styles.upcomingMeet_date}>
                Tuesday, {convertDate(beforeDayArr)}
              </Text>
            )}

            {beforeDayArr.map(item => (
              <MeetingCard
                key={item.meetingId}
                id={item.meetingId}
                title={item.meeting_name}
                colors="gray"
                callBack={() =>
                  navigation.navigate('detailMeeting', {
                    id: item.meetingId,
                    title: item.meeting_name,
                  })
                }
              />
            ))}

            <TouchableOpacity
              style={styles.seeAll}
              onPress={() =>
                navigation.navigate('seeAllMeetings', {
                  data: newArr2,
                  title: 'Previous Meetings',
                })
              }>
              <View style={styles.seeAll_body}>
                <Text style={styles.seeAll_text}>See all</Text>
                <Image source={arrowRight} style={styles.seeAll_image} />
              </View>
            </TouchableOpacity>
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

  topView_header: {
    top: Platform.OS === 'ios' ? 23.5 : 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: 30,
  },
  topView_headerName: {
    flexDirection: 'row',
  },

  topView_text: {
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
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 7,
    borderRadius: 12,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  meetingInfo_time: {
    width: 48,
    height: 54,
    marginLeft: 4,

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
