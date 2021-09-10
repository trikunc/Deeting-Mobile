import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import moment from 'moment';

import {
  TextInp,
  BtnInputDate,
  BtnInputTime,
  BtnInputOption,
  TogleInput,
  TextHeader,
} from '../../../components/Input/TextInput';
import {
  ButtonPrimary,
  ButtonBorder,
} from '../../../components/Button/ButtonComponent';

import TimezoneModal from '../../../components/Modal/TimezoneModal';
import MeetingModeModal from '../../../components/Modal/MeetingModeModal';
import AddContactModal from '../../../components/Modal/AddContactModal';
import AddEmailModal from '../../../components/Modal/AddEmailModal';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';

import {RenderEmail, RenderContact} from './Render';
import {RepeatMode, ShowCalendar, TimePick} from './Show';

const NewSchedule = ({navigation}) => {
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
  const [addContact, setAddContact] = useState([]);
  const [addEmail, setAddEmail] = useState([]);

  const [showDate, setShowDate] = useState(false);
  const [showTime1, setShowTime1] = useState(false);
  const [showTime2, setShowTime2] = useState(false);
  const [showTimezone, setShowTimezone] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [showAddEmail, setShowAddEmail] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);

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
    setDateMeet(day.dateString);
    setShowDate(!showDate);
  };

  const deleteEmail = index => {
    // console.log('deleteEmail:', index);
    addEmail.splice(index, 1);
    let newArr = addEmail;
    // console.log('newArr==>', newArr);
    setAddEmail([...newArr]);
    // console.log('addContact:', addEmail);
  };

  const deleteContact = index => {
    // console.log('deletePeople:', index);
    addContact.splice(index, 1);
    let newArr = addContact;
    // console.log('newArr==>', newArr);
    setAddContact([...newArr]);
    // console.log('addContact:', addContact);
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
          style={{height: '100%'}}>
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

            {showDate && <ShowCalendar callBack={day => handleDateMeet(day)} />}

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
              <TimePick
                hour={selectedHours1}
                minute={selectedMinutes1}
                callBack1={hour => setSelectedHours1(hour)}
                callBack2={minute => setSelectedMinutes1(minute)}
                left
              />
            )}
            {showTime2 && (
              <TimePick
                hour={selectedHours2}
                minute={selectedMinutes2}
                callBack1={hour => setSelectedHours2(hour)}
                callBack2={minute => setSelectedMinutes2(minute)}
              />
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
              {/* <BtnInputOption
              title="Mode"
              value={meetingMode}
              callBack={() => setShowMode(true)}
            />
            <MeetingModeModal
              isVisible={showMode}
              callBack={() => setShowMode(false)}
              callBack2={mode => setMeetingMode(mode)}
            /> */}
              <BtnInputOption
                title="Repeat"
                value={repeatMode}
                callBack={() => setShowRepeat(!showRepeat)}
              />
            </View>
            {showRepeat && (
              <RepeatMode
                data={radioData}
                firstData={radioData[0].key}
                callBack={repeat => setRepeatMode(repeat)}
              />
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

              {/* Invite Participants */}
              <TextHeader
                title="Invite Participants"
                count={addEmail.length + addContact.length}
              />

              <View>
                <RenderEmail
                  addEmail={addEmail}
                  callBack={index => deleteEmail(index)}
                />
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                <RenderContact
                  addContact={addContact}
                  callBack={index => deleteContact(index)}
                />
              </View>

              <TouchableOpacity onPress={() => setShowAddEmail(true)}>
                <Text
                  style={{
                    fontFamily: fonts.NunitoSansBold,
                    fontSize: 16,
                    color: COLORS.SECONDARY,
                    marginTop: 8,
                  }}>
                  + Add with email
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setShowAddContact(true)}>
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

              <AddEmailModal
                isVisible={showAddEmail}
                callBack={() => setShowAddEmail(false)}
                callBack2={email => setAddEmail(email)}
              />

              <AddContactModal
                isVisible={showAddContact}
                callBack={() => setShowAddContact(false)}
                callBack2={contact => setAddContact(contact)}
              />

              <TogleInput
                title="Add to Calendar"
                // value="xaeh4Tg"
                // wrap={true}
                //  callBack={() => setShowTime1(!showTime1)}
              />
            </View>

            <View style={{marginTop: 30, paddingHorizontal: 30}}>
              <ButtonPrimary text="Done" />
              <ButtonBorder
                text="Cancel"
                callBack={() => navigation.goBack()}
              />
            </View>
            <View
              style={{
                height: Platform.OS === 'ios' ? 100 : 0,
                display: 'flex',
              }}></View>
          </ScrollView>
        </KeyboardAvoidingView>
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
    paddingTop: 4,
    paddingBottom: 100,
  },
});
