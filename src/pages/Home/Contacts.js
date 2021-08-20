import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import meetingNow from '../../assets/icons/meetingNow.png';
import joinMeeting from '../../assets/icons/joinMeeting.png';
import newSchedule from '../../assets/icons/newSchedule.png';
import addIcon from '../../assets/icons/Add.png';
import searchBar from '../../assets/icons/Search.png';

import pic1 from '../../assets/images/profilPic/pic1.png';
import pic2 from '../../assets/images/profilPic/pic2.png';
import pic3 from '../../assets/images/profilPic/pic3.png';
import pic4 from '../../assets/images/profilPic/pic4.png';
import pic5 from '../../assets/images/profilPic/pic5.png';

import mobileOl from '../../assets/icons/mobileOnline.png';

const dumyData = [
  {pictureOl: pic1, nameOl: 'Andira', statusOl: 'desktop'},
  {pictureOl: pic2, nameOl: 'Alex', statusOl: 'busy'},
  {pictureOl: pic3, nameOl: 'Alvian', statusOl: 'mobile'},
  {pictureOl: pic4, nameOl: 'Aurora', statusOl: 'mobile'},
  {pictureOl: pic5, nameOl: 'Azura', statusOl: 'mobile'},
];

const Contacts = ({navigation}) => {
  const [isContacts, setIsContacts] = useState(true);
  const [value, setValue] = useState();
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
            <TouchableOpacity
              style={styles.buttonContainer_right}
              onPress={() => navigation.navigate('AddContact')}>
              <Image style={{height: 21, width: 21}} source={addIcon} />
            </TouchableOpacity>
          </View>

          {/* // Search bar */}
          <View style={styles.searchBar}>
            <View>
              <Image source={searchBar} style={{height: 13, width: 16.25}} />
            </View>
            <TextInput
              value={value}
              placeholder="Search"
              style={styles.searchBar_textInput}
            />
          </View>

          {isContacts ? (
            <View style={styles.contats}>
              <View style={styles.contats_container}>
                <View style={styles.contats_alphabet}>
                  <Text style={styles.contats_title}>A</Text>
                </View>
                {dumyData.map(item => (
                  <ContactList
                    pictureOl={item.pictureOl}
                    nameOl={item.nameOl}
                    statusOl={item.statusOl}
                  />
                ))}
              </View>
            </View>
          ) : (
            <View style={styles.contats}>
              <View style={styles.contats_container}>
                <View style={styles.contats_alphabet}>
                  <Text style={styles.contats_title}>A</Text>
                </View>
                <GroubList nameOl="Alvaro Teams" />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Contacts;

const ContactList = ({pictureOl, nameOl, statusOl}) => {
  return (
    <View style={styles.contats_list}>
      <View style={styles.contats_listHero}>
        <View style={styles.contats_profilPic}>
          <Image source={pictureOl} style={{height: 28, width: 28}} />
        </View>
        <Text style={styles.contats_name}>{nameOl}</Text>
      </View>
      <StatusOnline statusOl={statusOl} />
    </View>
  );
};

const StatusOnline = ({statusOl}) => {
  if (statusOl == 'desktop') {
    return (
      <View style={styles.contats_onlineStatus}>
        <Text style={styles.contats_onlineText}>Desktop</Text>
        <View style={styles.contats_onlineDevice}></View>
      </View>
    );
  }
  if (statusOl == 'busy') {
    return (
      <View style={styles.contats_onlineStatus}>
        <Text style={{...styles.contats_onlineText, color: COLORS.DANGER}}>
          Busy
        </Text>
        <View
          style={{
            ...styles.contats_onlineDevice,
            backgroundColor: COLORS.DANGER,
          }}></View>
      </View>
    );
  }
  if (statusOl == 'mobile') {
    return (
      <View style={styles.contats_onlineStatus}>
        <Text style={styles.contats_onlineText}>Mobile</Text>
        <Image source={mobileOl} style={{height: 13.33, width: 8}} />
      </View>
    );
  }
};

const GroubList = ({nameOl}) => {
  return (
    <View style={styles.contats_list}>
      <View style={styles.contats_listHero}>
        <View
          style={{
            ...styles.contats_profilPic,
            backgroundColor: COLORS.ORANGE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.WHITE}}>AT</Text>
        </View>
        <Text style={styles.contats_name}>{nameOl}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 115,
    display: 'flex',
    // paddingHorizontal: 30,
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
    paddingHorizontal: 30,
  },
  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingTop: 58,
    paddingBottom: 56,
    // paddingHorizontal: 30,
    // justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    height: 38,
    marginHorizontal: 30,
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

  //////// Search Bar
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 28,
    paddingVertical: 12.5,
    paddingHorizontal: 9.88,
    marginHorizontal: 30,
  },
  searchBar_textInput: {
    marginLeft: 9.87,
  },

  //////// Contacts
  contats: {
    // backgroundColor: 'yellow',
  },
  // contats_container{

  // },
  contats_alphabet: {
    justifyContent: 'center',
    height: 38,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    paddingHorizontal: 30,
  },
  contats_title: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    color: COLORS.WHITE,
  },
  contats_list: {
    marginHorizontal: 30,
    height: 38,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contats_listHero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contats_profilPic: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
  contats_name: {
    marginLeft: 20,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
  },
  contats_onlineStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contats_onlineText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 1.4 * 12,
    color: COLORS.GREEN,
    marginRight: 8,
  },
  contats_onlineDevice: {
    backgroundColor: COLORS.GREEN,
    height: 8,
    width: 8,
    borderRadius: 4,
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
