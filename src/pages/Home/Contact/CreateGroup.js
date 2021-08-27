import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';

import RenderHeader from '../../../components/Contact/RenderHeader';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import ClosePic from '../../../assets/icons/closeGray.png';
import searchBar from '../../../assets/icons/Search.png';
import ArrowRight from '../../../assets/icons/ArrowRightBG.png';

import {contactList} from '../../../dumyData';

const CreateGroup = ({navigation}) => {
  const [dataArray, setDataArray] = useState(contactList);
  const [dataFilter, setDataFilter] = useState(contactList);
  const [arrayPeople, setArrayPeople] = useState([]);
  const [refreshFlatlist, setRefreshFlatList] = useState(false);

  const [value, setValue] = useState();

  const searchUser = text => {
    setDataFilter(
      dataArray.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const addPeople = item => {
    for (let i = 0; i < arrayPeople.length; i++) {
      if (arrayPeople[i].id == item.id) {
        return;
      }
    }
    setArrayPeople(arrayPeople => [...arrayPeople, item]);
    console.log(arrayPeople);
  };

  const deletePeople = index => {
    arrayPeople.splice(index, 1);
    setArrayPeople(arrayPeople);
    setRefreshFlatList(!refreshFlatlist);
  };

  const RenderContacts = (item, index, section) => {
    return (
      <TouchableOpacity
        style={styles.contact_list}
        onPress={() => {
          addPeople(item);
        }}>
        <View style={styles.contact_listHero}>
          <View style={styles.contact_profilPic}>
            <Image source={item.picture} style={{height: 28, width: 28}} />
          </View>
          <Text style={styles.contact_name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const RenderPeople = params => {
    return (
      <View style={styles.botView_peopleBody}>
        <View style={styles.botView_peoplePic}>
          <Image source={params.item.picture} style={{height: 44, width: 44}} />
          <TouchableOpacity onPress={() => deletePeople(params.index)}>
            <Image source={ClosePic} style={styles.botView_closePic} />
          </TouchableOpacity>
        </View>
        <Text style={styles.botView_peopleText}>{params.item.name}</Text>
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
        <Text style={styles.topView_Text}>Create Group</Text>
      </View>

      <View style={styles.botView}>
        <View style={styles.botView_participants}>
          <Text>Add Participants</Text>
          <Text>{`(${arrayPeople.length}/50)`}</Text>
        </View>

        {/* Add People */}
        {arrayPeople.length > 0 && (
          <View style={styles.botView_peopleList}>
            <FlatList
              data={arrayPeople}
              renderItem={RenderPeople}
              keyExtractor={item => item.id}
              horizontal={true}
              extraData={refreshFlatlist}
            />
          </View>
        )}

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

        <TouchableOpacity style={styles.nextButton}>
          <Image source={ArrowRight} style={{height: 48, width: 48}} />
        </TouchableOpacity>

        <View
          style={{
            height: 6,
            display: 'flex',
          }}></View>
      </View>
    </SafeAreaView>
  );
};

export default CreateGroup;

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
    height: '100%',
    paddingBottom: 56,
  },

  //  Add People
  botView_participants: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 20,
    marginTop: 24,
    paddingHorizontal: 30,
  },
  botView_peopleList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    width: '100%',
    marginTop: 12,
    paddingHorizontal: 30,
  },
  botView_peopleBody: {
    alignItems: 'center',
    marginRight: 24,
  },
  botView_peoplePic: {},
  botView_closePic: {
    height: 16,
    width: 16,
    position: 'absolute',
    right: -16 / 2,
    bottom: 0,
  },
  botView_peopleText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 1.4 * 12,
    marginTop: 4,
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

  // Next Button
  nextButton: {
    position: 'absolute',
    right: 30,
    bottom: 102,
  },

  // botView_email: {
  //   height: 54,
  //   padding: 18,
  //   width: '100%',
  //   borderRadius: 12,
  //   backgroundColor: 'rgba(124, 120, 120, 0.1)',
  //   marginBottom: 24,
  // },
  // button_submit: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start',
  //   marginTop: 28,
  //   padding: 12,
  //   height: 46,
  //   color: '#fff',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   borderRadius: 12,
  // },
  // button_cancel: {
  //   borderWidth: 1,
  //   borderColor: COLORS.PRIMARY,
  // },
  // button_text: {
  //   fontFamily: fonts.NunitoSansReguler,
  //   fontWeight: '600',
  //   fontSize: 16,
  // },
});
