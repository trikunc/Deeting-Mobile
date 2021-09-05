import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import {TimePicker} from 'react-native-simple-time-picker';

import {
  TextInp,
  BtnInputDate,
  BtnInputTime,
  BtnInputOption,
  TogleInput,
} from '../../../components/Input/TextInput';
import {
  ButtonPrimary,
  ButtonBorder,
} from '../../../components/Button/ButtonComponent';

import TimezoneModal from '../../../components/Modal/TimezoneModal';
import MeetingModeModal from '../../../components/Modal/MeetingModeModal';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import {RadioButton} from '../../../components/Button/RadioButton';

const windowWidth = Dimensions.get('window').width;

const NewSchedule = ({navigation}) => {
  // const [state, setState] = useState({
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   displayName: 'John Doe',
  //   email: 'john.doe@test.com',
  // });

  // let {firstName, lastName, displayName, email} = state;
  const [roomName, setRoomName] = useState('');
  const [dateMeet, setDateMeet] = useState(moment().format('YYYY-MM-DD'));
  const [selectedHours1, setSelectedHours1] = useState(0);
  const [selectedMinutes1, setSelectedMinutes1] = useState(0);
  const [selectedHours2, setSelectedHours2] = useState(0);
  const [selectedMinutes2, setSelectedMinutes2] = useState(0);
  const [timezoneMode, setTimezoneMode] = useState(
    'GMT+9:30, Australian Central Standard Time',
  );
  const [meetingMode, setMeetingMode] = useState('Regular Meeting');
  const [repeatMode, setRepeatMode] = useState('Never');

  const [showDate, setShowDate] = useState(false);
  const [showTime1, setShowTime1] = useState(false);
  const [showTime2, setShowTime2] = useState(false);
  const [showTimezone, setShowTimezone] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const radioData = [
    {
      key: 'never',
      text: 'Never',
    },
    {
      key: 'everyDay',
      text: 'Every Day',
    },
    {
      key: 'everyWeek',
      text: 'Every Week',
    },
    {
      key: 'everyMonth',
      text: 'Every Month',
    },
  ];

  const handleDateMeet = day => {
    // console.log(day.dateString);
    // console.log(dateMeet);
    setDateMeet(day.dateString);
    setShowDate(!showDate);
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
        <Text style={styles.topView_Text}>New Schedule</Text>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: 30,
            }}>
            <TextInp
              title="Room’s Name"
              text={roomName}
              onChangeText={roomName => setRoomName(roomName)}
              editable={true}
              placeholder="John Doe’s Meeting"
            />
            <BtnInputDate
              title="Date"
              value={dateMeet}
              callBack={() => setShowDate(!showDate)}
            />
          </View>

          {showDate && (
            <View
              style={{
                position: 'absolute',
                top: 220,
                alignSelf: 'center',
                zIndex: 10,
              }}>
              <Calendar
                onDayPress={day => handleDateMeet(day)}
                monthFormat={'MMMM'}
                onMonthChange={month => {
                  console.log('month changed', month);
                }}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                disableAllTouchEventsForDisabledDays={false}
                enableSwipeMonths={true}
                style={{
                  marginTop: 5,

                  borderRadius: 12,
                  height: 362,
                  width: windowWidth - 60,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.25,
                  elevation: -1,
                }}
                theme={{
                  backgroundColor: '#ffffff',
                  calendarBackground: '#ffffff',
                  textSectionTitleColor: COLORS.BLACK,
                  textSectionTitleDisabledColor: '#d9e1e8',
                  selectedDayBackgroundColor: '#00adf5',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#00adf5',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  dotColor: '#00adf5',
                  selectedDotColor: '#ffffff',
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
            </View>
          )}

          <View
            style={{
              paddingHorizontal: 30,
            }}>
            <BtnInputTime
              title1="From"
              value1={`${selectedHours1}:${selectedMinutes1}`}
              callBack1={() => setShowTime1(!showTime1)}
              title2="To"
              value2={`${selectedHours2}:${selectedMinutes2}`}
              callBack2={() => setShowTime2(!showTime2)}
            />
          </View>

          {showTime1 && (
            <View
              style={{
                position: 'absolute',
                left: 30,
                top: 330,
                backgroundColor: COLORS.WHITE,
                borderRadius: 12,
                height: 240,
                width: 147,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.25,
                zIndex: 10,
              }}>
              <TimePicker
                selectedHours={selectedHours1}
                selectedMinutes={selectedMinutes1}
                onChange={hours => {
                  setSelectedHours1(hours.hours);
                  setSelectedMinutes1(hours.minutes);
                }}
              />
            </View>
          )}
          {showTime2 && (
            <View
              style={{
                position: 'absolute',
                right: 30,
                top: 330,
                backgroundColor: COLORS.WHITE,
                borderRadius: 12,
                height: 240,
                width: 147,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.25,
                zIndex: 10,
              }}>
              <TimePicker
                selectedHours={selectedHours2}
                selectedMinutes={selectedMinutes2}
                onChange={hours => {
                  setSelectedHours2(hours.hours);
                  setSelectedMinutes2(hours.minutes);
                }}
              />
            </View>
          )}

          <View
            style={{
              paddingHorizontal: 30,
            }}>
            <BtnInputOption
              title="Time Zone"
              value={timezoneMode}
              callBack={() => setShowTimezone(!showTimezone)}
            />
          </View>

          {showTimezone && (
            <TimezoneModal
              isVisible={showTimezone}
              callBack={() => setShowTimezone(false)}
              callBack2={mode => setTimezoneMode(mode)}
            />
          )}

          <View
            style={{
              paddingHorizontal: 30,
            }}>
            <BtnInputOption
              title="Mode"
              value={meetingMode}
              callBack={() => setShowMode(true)}
            />
            <MeetingModeModal
              isVisible={showMode}
              callBack={() => setShowMode(false)}
              callBack2={mode => setMeetingMode(mode)}
            />
            <BtnInputOption
              title="Repeat"
              value={repeatMode}
              callBack={() => setShowRepeat(!showRepeat)}
            />
          </View>
          {showRepeat && (
            <View
              style={{
                position: 'absolute',
                top: 680,
                // right: '1%',
                backgroundColor: COLORS.WHITE,
                borderRadius: 12,
                alignSelf: 'center',
                width: windowWidth - 60,
                padding: 38,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.25,
                zIndex: 10,
              }}>
              <RadioButton
                props={radioData}
                initial={radioData[0].key}
                callBack={repeat => setRepeatMode(repeat)}
              />
            </View>
          )}

          <View
            style={{
              paddingHorizontal: 30,
            }}>
            <TogleInput
              title="Use Personal Meeting ID"
              value="110-989-541"
              //  callBack={() => setShowTime1(!showTime1)}
            />
            <TogleInput
              title="Use Passode"
              value="xaeh4Tg"
              wrap={true}
              //  callBack={() => setShowTime1(!showTime1)}
            />

            <TextInp
              title="Invite Participants"
              text={roomName}
              onChangeText={roomName => setRoomName(roomName)}
              editable={true}
              placeholder="Enter participant email"
            />
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: fonts.NunitoSansBold,
                  fontSize: 16,
                  color: COLORS.SECONDARY,
                  marginTop: 8,
                }}>
                + Add from contacts
              </Text>
            </TouchableOpacity>
            <TogleInput
              title="Add to Calendar"
              // value="xaeh4Tg"
              // wrap={true}
              //  callBack={() => setShowTime1(!showTime1)}
            />
          </View>

          <View style={{marginTop: 30, paddingHorizontal: 30}}>
            <ButtonPrimary text="Done" />
            <ButtonBorder text="Cancel" callBack={() => navigation.goBack()} />
          </View>
          <View
            style={{
              height: Platform.OS === 'ios' ? 100 : 0,
              display: 'flex',
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewSchedule;

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
  },
});
