import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import SectionListContacts from 'react-native-sectionlist-contacts';

import RenderHeader from '../../components/Contact/RenderHeader';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import ClosePic from '../../assets/icons/closeGray.png';
import searchBar from '../../assets/icons/Search.png';
import checklistPic from '../../assets/icons/checklistContact.png';
import checklistCircle from '../../assets/icons/checklistCirclepng.png';

import {contactList} from '../../dumyData';

const deviceHeight = Dimensions.get('window').height;

const AddContactModal = ({isVisible, callBack, callBack2}) => {
  const [dataArray, setDataArray] = useState(contactList);
  const [dataFilter, setDataFilter] = useState(contactList);
  const [arrayPeople, setArrayPeople] = useState([]);
  const [refreshFlatlist, setRefreshFlatList] = useState(false);

  const [value, setValue] = useState(); // text input

  useEffect(() => {
    let newDataArr = [];
    dataFilter.map(data => {
      let newData = {...data, value: false, test: false};
      newDataArr = [...newDataArr, newData];
    });
    setDataFilter(newDataArr);
  }, []);

  const searchUser = text => {
    setDataFilter(
      dataArray.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const addPeople = item => {
    let newArr = [...dataFilter];
    for (let i = 0; i < arrayPeople.length; i++) {
      if (arrayPeople[i].id == item.id) {
        return;
      }
    }
    let newItem = {...item, value: true};
    setArrayPeople(arrayPeople => [...arrayPeople, newItem]);

    for (let i = 0; i < dataFilter.length; i++) {
      if (dataFilter[i].id == item.id) {
        newArr[i].test = true;
      }
    }
    setDataFilter(newArr);
  };

  const deletePeople = params => {
    // console.log('deletePeople:', params.item.name);
    arrayPeople.splice(params.index, 1);
    setArrayPeople(arrayPeople);
    setRefreshFlatList(!refreshFlatlist);
    let newArr = [...dataFilter];
    for (let i = 0; i < dataFilter.length; i++) {
      if (dataFilter[i].id == params.item.id) {
        newArr[i].value = false;
        newArr[i].test = false;
        // console.log(newArr);
      }
    }
    setDataFilter(newArr);
  };

  const onChangeValue = (item, index) => {
    const newData = dataFilter.map(newItem => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          value: true,
        };
      }
      return {
        ...newItem,
        // value: false,
      };
    });
    // console.log(newData);
    setDataFilter(newData);
  };

  const handleValue = (item, index) => {
    for (let i = 0; i < arrayPeople.length; i++) {
      if (arrayPeople[i].id == item.id) {
        return arrayPeople.value;
      }
      return false;
    }
  };

  const RenderContacts = item => {
    return (
      <TouchableOpacity
        style={styles.contact_list}
        onPress={() => {
          addPeople(item);
        }}>
        <View style={styles.contact_listHero}>
          <View style={styles.contact_profilPic}>
            <Image source={item.picture} style={{height: 28, width: 28}} />
            {item.test && (
              <View style={styles.checkbox}>
                <Image source={checklistPic} style={{height: 16, width: 16}} />
              </View>
            )}
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
          <TouchableOpacity onPress={() => deletePeople(params)}>
            <Image source={ClosePic} style={styles.botView_closePic} />
          </TouchableOpacity>
        </View>
        <Text style={styles.botView_peopleText}>{params.item.name}</Text>
      </View>
    );
  };

  return (
    <GestureRecognizer
      style={{flex: 1}}
      // onSwipeUp={ () => setModalVisible(true) }
      onSwipeDown={() => callBack()}>
      <Modal
        isVisible={isVisible}
        swipeDirection={['down']}
        style={{
          height: deviceHeight,
          margin: 0,
        }}>
        <View style={styles.modalBody}>
          <View style={styles.topView}>
            <TouchableOpacity
              style={styles.topView_arrowLeft}
              onPress={() => callBack()}>
              <Image
                style={{
                  width: 10.5,
                  height: 21,
                }}
                source={ArrowLeft}
              />
            </TouchableOpacity>
            <Text style={styles.topView_Text}>Add From Contacts</Text>
          </View>

          {/* <View style={styles.modalOption}>
            <RadioButton
              props={data}
              initial={data[0].key}
              callBack={mode => callBack2(mode)}
            />
          </View> */}
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

            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                // let newArrayPeople = [];
                // arrayPeople.map(person => newArrayPeople.push(person.name));
                // callBack2(newArrayPeople);
                callBack2(arrayPeople);
                callBack();
                // console.log(newArrayPeople);
              }}>
              <Image source={checklistCircle} style={{height: 48, width: 48}} />
            </TouchableOpacity>

            <View
              style={{
                height: 6,
                display: 'flex',
              }}></View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export default AddContactModal;

const styles = StyleSheet.create({
  ////// Modal
  modalBody: {
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    // backgroundColor: COLORS.WHITE,
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',

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
    top: 48.5,
    left: 27,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 18,
    top: 48.5,
    letterSpacing: 0.5,
  },
  // modalTitle_text: {
  //   fontFamily: fonts.NunitoSansSemiBold,
  //   fontSize: 20,
  //   letterSpacing: 0.5,
  //   marginTop: 36,
  //   lineHeight: 1.5 * 20,
  // },
  // modalLine: {
  //   width: 64,
  //   borderColor: '#ADADAD',
  //   borderWidth: 5,
  //   marginTop: 20,
  //   borderRadius: 5,
  // },
  // modalOption: {
  //   marginTop: 35,
  // },

  botView: {
    backgroundColor: COLORS.WHITE,
    // height: '100%',
    flex: 1,
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
    paddingLeft: 30,
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

  checkbox: {
    position: 'absolute',
    right: -8,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
