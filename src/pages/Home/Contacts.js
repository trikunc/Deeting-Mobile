import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';

import RenderHeader from '../../components/Contact/RenderHeader';
import {OnlineDevice} from '../../components/Contact/OnlineDevice';
import {NoContact, NoGroup} from '../../components/NotFound/NotFoundComponent';
import HomeNav from '../../components/Navigation/HomeNav';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

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
    console.log('section=>', section);
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
        <Text style={styles.topView_View}>
          <Text
            style={{
              ...styles.topView_Text,
              fontFamily: fonts.NunitoSansReguler,
            }}>
            Hi,{' '}
          </Text>
          <Text style={styles.topView_Text}>John Doe</Text>
        </Text>
      </View>

      <HomeNav navigation={navigation} />

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
            onPress={() =>
              isContacts
                ? navigation.navigate('AddContact')
                : navigation.navigate('CreateGroup')
            }>
            <Image style={{height: 21, width: 21}} source={addIcon} />
          </TouchableOpacity>
        </View>

        {/* // Search bar */}
        <View
          style={
            Platform.OS === 'ios' ? styles.searchBar : styles.searchBarAndroid
          }>
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
            height: Platform.OS === 'ios' ? 170 : 250,
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
    height: Platform.OS === 'ios' ? 115 : 150,
    display: 'flex',
  },

  topView_View: {
    top: Platform.OS === 'ios' ? 23.5 : 40,
    marginLeft: 30,
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
    fontFamily: fonts.NunitoSansBold,
    letterSpacing: 0.5,
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
    fontFamily: fonts.NunitoSansBold,
    letterSpacing: 0.5,
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

  searchBarAndroid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 20,
    height: 54,
    // paddingVertical: 12.5,
    paddingHorizontal: 9.88,
    marginHorizontal: 30,
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
});
