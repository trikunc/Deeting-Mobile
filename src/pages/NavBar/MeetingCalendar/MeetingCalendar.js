import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import ArrowBlk from '../../../assets/icons/ArrowBlack.png';
import PlusWht from '../../../assets/icons/plus.png';

const windowWidth = Dimensions.get('window').width;

const config = {
  '2021-09-03': {
    customStyles: {
      container: {
        borderRadius: 0,
        borderBottomColor: '#999999',
        borderBottomWidth: 4,
      },
      text: {
        color: '#999999',
      },
    },
  },
  '2021-09-05': {
    customStyles: {
      container: {
        borderRadius: 0,
        borderBottomColor: '#219653',
        borderBottomWidth: 4,
      },
      text: {
        color: '#219653',
      },
    },
  },
  '2021-09-06': {
    customStyles: {
      container: {
        borderRadius: 0,
        borderBottomColor: '#F2994A',
        borderBottomWidth: 4,
      },
      text: {
        color: '#F2994A',
      },
    },
  },
  '2021-09-09': {
    customStyles: {
      container: {
        borderRadius: 0,
        borderBottomColor: '#F2994A',
        borderBottomWidth: 4,
      },
      text: {
        color: '#F2994A',
      },
    },
  },
};

const MeetingCalendar = ({navigation}) => {
  const [openCalendar, setOpenCalendar] = useState(true);

  const [yearNow, setYearNow] = useState();
  const [monthNow, setMonthNow] = useState();
  const [dayNow, setDayNow] = useState();

  useEffect(() => {
    console.log('dateNow=>', moment().month());
    setDayNow(moment().date());
    setMonthNow(moment().month() + 1);
    setYearNow(moment().year());
  }, []);

  const handleMonth = month => {
    switch (month) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return 'Error Call Month';
    }
  };

  const MeetingCalendarCard = ({title, id, start, stop, color}) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardTime}>
          <Text style={styles.cardTime_text}>{start}</Text>
          <Text style={styles.cardTime_text}>{stop}</Text>
        </View>
        <View style={styles.cardInfo}>
          <View
            style={{
              height: 60,
              width: 5,
              borderRadius: 12,
              backgroundColor: color,
            }}></View>
          <View style={styles.cardInfo_textWrap}>
            <Text style={styles.cardInfo_title}>{title}</Text>
            <Text style={styles.cardInfo_text}>Meeting ID: {id}</Text>
          </View>
        </View>
      </View>
    );
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
        <Text style={styles.topView_Text}>Meeting Calendar</Text>
      </View>

      <View style={styles.botView}>
        <ScrollView>
          <View
            style={
              openCalendar
                ? {backgroundColor: '#F9F8FC'}
                : {backgroundColor: '#FFFFFF'}
            }>
            <View style={styles.calendarHeader}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.calendarTitle}>
                  {handleMonth(monthNow)} {yearNow}
                </Text>
                <TouchableOpacity
                  style={styles.calendarArrowWrap}
                  onPress={() => setOpenCalendar(!openCalendar)}>
                  <Image
                    source={ArrowBlk}
                    style={
                      openCalendar
                        ? styles.calendarArrowPic
                        : {
                            ...styles.calendarArrowPic,
                            transform: [{rotate: '-90deg'}],
                          }
                    }
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  height: 28,
                  width: 28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 14,
                  backgroundColor: COLORS.PRIMARY,
                }}>
                <Image source={PlusWht} style={{height: 16.3, width: 16.3}} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // position: 'absolute',
                // top: 120,
                alignSelf: 'center',
                zIndex: 10,
              }}>
              {openCalendar && (
                <Calendar
                  onDayPress={day => console.log(day)}
                  monthFormat={'MMMM'}
                  onMonthChange={date => {
                    setYearNow(date.year);
                    setMonthNow(date.month);
                    setDayNow(date.day);
                    console.log('month changed', date.month);
                  }}
                  hideArrows={true}
                  // onPressArrowLeft={subtractMonth => subtractMonth()}
                  // onPressArrowRight={addMonth => addMonth()}
                  disableAllTouchEventsForDisabledDays={false}
                  enableSwipeMonths={true}
                  renderHeader={date => {
                    /*Return JSX*/
                  }}
                  style={{
                    marginTop: 24,
                    borderRadius: 12,
                    height: 330,
                    width: windowWidth - 60,
                    backgroundColor: '#F9F8FC',
                  }}
                  markingType={'custom'}
                  markedDates={config}
                  theme={{
                    backgroundColor: '#F9F8FC',
                    calendarBackground: '#F9F8FC',
                    textSectionTitleColor: COLORS.BLACK,
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#F9F8FC',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#F9F8FC',
                    arrowColor: COLORS.NEUTRAL,
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: COLORS.BLACK,
                    indicatorColor: 'blue',
                    textDayFontFamily: fonts.NunitoSansReguler,
                    textDayHeaderFontFamily: fonts.NunitoSansReguler,
                    textMonthFontFamily: fonts.NunitoSansBold,
                    textDayFontWeight: 'normal',
                    textDayHeaderFontWeight: 'normal',
                    textMonthFontWeight: '600',
                    textDayFontSize: 16,
                    textDayHeaderFontSize: 12,
                    textMonthFontSize: 18,
                  }}
                />
              )}
            </View>
          </View>

          <View style={{marginBottom: 26, marginLeft: 30}}>
            <Text style={styles.headertext}>Thursday 5</Text>
            <MeetingCalendarCard
              title="Weekly Product Meeting"
              id="123-000-781"
              start="09:00"
              stop="10:30"
              color="#219653"
            />
            <MeetingCalendarCard
              title="Design Webinar"
              id="671-910-223"
              start="15:00"
              stop="17:00"
              color="#219653"
            />
            <Text style={styles.headertext}>Friday 6</Text>
            <MeetingCalendarCard
              title="Website Discussion"
              id="541- 222-213"
              start="10:00"
              stop="12:00"
              color="#F2994A"
            />

            <Text style={styles.headertext}>Friday 9</Text>
            <MeetingCalendarCard
              title="Alex’s Meeting"
              id="341- 212-567"
              start="13:00"
              stop="15:00"
              color="#F2994A"
            />
            <MeetingCalendarCard
              title="Data Science Bootcamp"
              id="900-1230456"
              start="19:00"
              stop="20:30"
              color="#F2994A"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MeetingCalendar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
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
    // paddingHorizontal: 30,
    // backgroundColor: 'yellow',
  },
  calendarHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
    marginHorizontal: 30,
    padding: 0,
  },
  calendarTitle: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 18,
    lineHeight: 1.5 * 18,
    textAlign: 'center',
    marginRight: 24,
  },
  calendarArrowWrap: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarArrowPic: {height: 14, width: 7, transform: [{rotate: '90deg'}]},

  // Meeting Card
  headertext: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 16,
    lineHeight: 1.4 * 16,
    marginTop: 40,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    // height: 64,
  },
  cardTime: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginRight: 28,
    height: 64,
  },
  cardTime_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    textAlign: 'center',
  },
  cardInfo: {
    flexDirection: 'row',
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    width: 184,
  },
  cardInfo_textWrap: {
    justifyContent: 'space-between',
    margin: 8,
  },
  cardInfo_title: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    color: COLORS.BLACK,
  },
  cardInfo_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    color: COLORS.NEUTRAL,
  },
});
