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
import newSchedule from '../../assets/icons/newSchedule.png';
import addIcon from '../../assets/icons/Add.png';

const Contacts = ({navigation}) => {
  const [isContacts, setIsContacts] = useState(true);
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
              <Image source={newSchedule} style={styles.meetingNav_icon.img} />
              <Text style={styles.meetingNav_text}>New Schedule</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer_left}>
              <TouchableOpacity
                style={isContacts ? styles.buttonOn : styles.buttonOff}
                onPress={() => setIsContacts(true)}>
                <Text
                  style={
                    isContacts ? styles.buttonOn_text : styles.buttonOff_text
                  }>
                  Contacts
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={isContacts ? styles.buttonOff : styles.buttonOn}
                onPress={() => setIsContacts(false)}>
                <Text
                  style={
                    isContacts ? styles.buttonOff_text : styles.buttonOn_text
                  }>
                  Groups
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer_right}>
              <Image style={{height: 21, width: 21}} source={addIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 115,
    display: 'flex',
    paddingHorizontal: 30,
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    height: 38,
  },
  buttonContainer_left: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 38,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 16,
  },
  buttonOn_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.WHITE,
  },
  buttonOff: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 38,
    borderRadius: 16,
  },
  buttonOff_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: '#999999',
  },
  buttonContainer_right: {
    marginRight: 5,
  },

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
