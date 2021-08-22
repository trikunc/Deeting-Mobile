import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';

import RenderHeader from '../../components/Contact/RenderHeader';
import {OnlineDevice} from '../../components/Contact/OnlineDevice';
import {NoContact, NoGroup} from '../../components/NotFound/NotFoundComponent';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import meetingNow from '../../assets/icons/meetingNow.png';
import joinMeeting from '../../assets/icons/joinMeeting.png';
import newSchedule from '../../assets/icons/newSchedule.png';
import addIcon from '../../assets/icons/Add.png';
import searchBar from '../../assets/icons/Search.png';

import {contactList, groupList} from '../../dumyData';

const Contacts = ({navigation}) => {
  const [isContacts, setIsContacts] = useState(true);
  const [dataArray, setDataArray] = useState(contactList);
  const [dataFilter, setDataFilter] = useState(contactList);

  const [dataArray2, setDataArray2] = useState(groupList);
  const [dataFilter2, setDataFilter2] = useState(groupList);

  const [value, setValue] = useState();

  RenderContacts = (item, index, section) => {
    return (
      <TouchableOpacity
        style={styles.contact_list}
        onPress={() =>
          navigation.navigate('ContactDetail', {
            pictureOl: item.picture,
            nameOl: item.name,
            statusOl: item.onlineStatus,
          })
        }>
        <View style={styles.contact_listHero}>
          <View style={styles.contact_profilPic}>
            <Image source={item.picture} style={{height: 28, width: 28}} />
          </View>
          <Text style={styles.contact_name}>{item.name}</Text>
        </View>
        <OnlineDevice statusOl={item.onlineStatus} />
      </TouchableOpacity>
    );
  };

  RenderGroup = (item, index, section) => {
    console.log('groubItem', item.name);
    return (
      <TouchableOpacity style={styles.contact_list}>
        <View style={styles.contact_listHero}>
          <View
            style={{
              ...styles.contact_profilPic,
              backgroundColor: COLORS.ORANGE,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: COLORS.WHITE}}>AT</Text>
          </View>
          <Text style={styles.contact_name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const searchUser = text => {
    isContacts
      ? setDataFilter(
          dataArray.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase()),
          ),
        )
      : setDataFilter2(
          dataArray2.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase()),
          ),
        );
  };

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
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer_left}>
            <TouchableOpacity
              style={isContacts ? styles.buttonOn : styles.buttonOff}
              onPress={() => {
                setIsContacts(true);
              }}>
              <Text
                style={
                  isContacts ? styles.buttonOn_text : styles.buttonOff_text
                }>
                Contacts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isContacts ? styles.buttonOff : styles.buttonOn}
              onPress={() => {
                setIsContacts(false);
              }}>
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
            onChangeText={text => searchUser(text)}
          />
        </View>

        {isContacts ? (
          dataFilter.length < 1 ? (
            <NoContact />
          ) : (
            <View style={styles.contact_container}>
              <SectionListContacts
                ref={s => (sectionList = s)}
                sectionListData={dataFilter}
                initialNumToRender={dataFilter.length}
                otherAlphabet="#"
                renderHeader={RenderHeader}
                renderItem={RenderContacts}
                letterViewStyle={styles.letterView}
                letterTextStyle={styles.letterText}
                showAlphabet={false}
              />
            </View>
          )
        ) : dataFilter2.length < 1 ? (
          <NoGroup />
        ) : (
          <View style={styles.contact_container}>
            <SectionListContacts
              ref={s => (sectionList = s)}
              sectionListData={dataFilter2}
              initialNumToRender={dataFilter2.length}
              otherAlphabet="#"
              renderHeader={RenderHeader}
              renderItem={RenderGroup}
              letterViewStyle={styles.letterView}
              letterTextStyle={styles.letterText}
              showAlphabet={false}
            />
          </View>
        )}
        <View
          style={{
            height: 170,
            display: 'flex',
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Contacts;

const GroubList = ({nameOl}) => {
  return (
    <View style={styles.contact_list}>
      <View style={styles.contact_listHero}>
        <View
          style={{
            ...styles.contact_profilPic,
            backgroundColor: COLORS.ORANGE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.WHITE}}>AT</Text>
        </View>
        <Text style={styles.contact_name}>{nameOl}</Text>
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
    overflow: 'hidden',
  },
  searchBar_textInput: {
    marginLeft: 9.87,
    width: '90%',
  },

  //////// Contacts
  contact_container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  contact_list: {
    marginHorizontal: 30,
    height: 38,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contact_listHero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact_profilPic: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
  contact_name: {
    marginLeft: 20,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
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
