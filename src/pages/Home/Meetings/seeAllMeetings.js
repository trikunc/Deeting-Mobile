import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SectionList,
} from 'react-native';
import moment from 'moment';

import MeetingCard from '../../../components/Card/MeetingCard';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import arrowRight from '../../../assets/icons/ArrowRightSecondary.png';
import Refresh from '../../../assets/icons/Refresh.png';

const windowHeight = Dimensions.get('window').height;

const seeAllMeetings = ({route, navigation}) => {
  const [remember, setRemember] = useState(false);
  const [dateArr, setDateArr] = useState([]);
  const [testData, setTestData] = useState([]);
  const {data, title} = route.params;

  // ///////////////
  // ///////////////
  // ///////////////

  useEffect(() => {
    let newArrObj = [];
    console.log('test data: ', data);

    for (let i = 0; i < data.length; i++) {
      const sectionExists = newArrObj.some(
        section => section.date === data[i].when,
      );
      console.log(`${data[i].when}`, sectionExists);
      if (sectionExists === false) {
        let newObj = {
          date: data[i].when,
          data: [data[i]],
        };
        newArrObj.push(newObj);
      }
      if (sectionExists === true) {
        for (let j = 0; j < newArrObj.length; j++) {
          if (newArrObj[j].date === data[i].when) {
            console.log(`${newArrObj[j].date} must change`);
            newArrObj[j].data.push(data[i]);
          }
        }
      }
    }

    setTestData([...newArrObj]);
    console.log('newArrObj:', newArrObj);
  }, []);

  // ///////////////
  // ///////////////
  // ///////////////

  console.log(testData);

  data.sort(function (a, b) {
    let c = new Date(a.when);
    let d = new Date(b.when);
    return c - d;
  });

  const convertDate = date => {
    let today = moment(date).isSame(moment(), 'day');
    let tomorrow = moment(date).isSame(moment().add(1, 'days'), 'day');
    // console.log('check', tomorrow);
    if (today) {
      return moment(date).format('[Today], DD MMMM YYYY');
    } else if (tomorrow) {
      return moment(date).format('[Tomrrow], DD MMMM YYYY');
    }
    return moment(date).format('dddd, DD MMMM YYYY');
  };
  const checkDate = date => {
    let today = moment(date).isSame(moment(), 'day');
    let tomorrow = moment(date).isSame(moment().add(1, 'days'), 'day');
    if (title == 'Upcoming Meetings') {
      if (today) {
        return 'green';
      } else {
        return 'orange';
      }
    } else {
      return 'gray';
    }
  };

  const addDateArr = item => {
    if (!dateArr.includes(item)) {
      setDateArr([...dateArr, item]);
    }
  };

  const MeetingDateFunc = ({dateCheck}) => {
    const newDateCheck = convertDate(dateCheck);
    console.log(dateArr);
    console.log(dateArr.includes(newDateCheck));
    if (dateArr.includes(dateCheck)) {
      return <Text>Test</Text>;
    } else {
      // addDateArr(newDateCheck);
      return <Text style={styles.upcomingMeet_date}>{newDateCheck}</Text>;
    }
  };

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
        <Text style={styles.topView_Text}>{title}</Text>
        {title == 'Upcoming Meetings' && (
          <TouchableOpacity style={styles.topView_refresh}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={Refresh}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.botView}>
        {/* //// Upcoming Meetings */}
        {/* <View style={styles.upcomingMeet}> */}
        <SectionList
          sections={testData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <MeetingCard
              id={item.meetingId}
              title={item.meeting_name}
              colors={checkDate(item.when)}
              callBack={() =>
                navigation.navigate('detailMeeting', {
                  id: item.meetingId,
                  title: item.meeting_name,
                })
              }
            />
          )}
          renderSectionHeader={({section: {date}}) => (
            <MeetingDateFunc dateCheck={date} />
          )}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
        {/* </View> */}
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
    height: windowHeight - 90,
    // paddingTop: 4,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  /////// upcoming Meeting
  upcomingMeet: {
    // marginTop: 84 - 58,
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
