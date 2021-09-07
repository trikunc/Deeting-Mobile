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

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import closePic from '../../assets/icons/closeBlack.png';
import addPic from '../../assets/icons/Add.png';
import checklistCircle from '../../assets/icons/checklistCirclepng.png';

const deviceHeight = Dimensions.get('window').height;

const AddContactModal = ({isVisible, callBack, callBack2}) => {
  const [dataEmail, setDataEmail] = useState('');
  const [arrayEmail, setArrayEmail] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      email: 'danielhuengzin@gmail.com',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      email: 'veronicarosie@gmail.com',
    },
  ]);
  const [refreshFlatlist, setRefreshFlatList] = useState(false);

  const [value, setValue] = useState(); // text input

  const checkEmail = text => {
    setDataEmail(text);
    console.log(dataEmail);
  };

  const addEmail = () => {
    let newArr = [...arrayEmail];
    let newObj = {id: `${value}${arrayEmail.length}`, email: value};

    newArr.push(newObj);
    console.log(newArr);

    setArrayEmail(newArr);
    setValue('');
  };

  const catchString = email => {
    let matches = email.match(/\b(\w)/g);
    return matches.join('').toUpperCase().slice(0, 2);
  };

  const deletePeople = params => {
    arrayEmail.splice(params.index, 1);
    setArrayEmail(arrayEmail);
    setRefreshFlatList(!refreshFlatlist);
  };

  const RenderEmail = params => {
    console.log('paramsEmail:', params);
    return (
      <View style={styles.botView_peopleBody}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#F2994A',
              height: 32,
              width: 32,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8,
            }}>
            <Text style={{color: 'white', fontSize: 16}}>
              {catchString(params.item.email)}
            </Text>
          </View>
          <Text style={styles.botView_peopleText}>{params.item.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.closePic}
          onPress={() => deletePeople(params)}>
          <Image source={closePic} style={styles.botView_closePic} />
        </TouchableOpacity>
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
            <Text style={styles.topView_Text}>Add With Email</Text>
          </View>

          <View style={styles.botView}>
            <View style={styles.botView_participants}>
              <Text>Invite Participants</Text>
              <Text>{`(${arrayEmail.length}/50)`}</Text>
            </View>

            {/* // Search bar */}
            <View style={styles.searchBar}>
              <TextInput
                value={value}
                placeholder="Enter Participat Email"
                style={styles.searchBar_textInput}
                onChangeText={text => setValue(text)}
              />
              <TouchableOpacity onPress={() => addEmail()}>
                <Image source={addPic} style={{height: 17.25, width: 17.25}} />
              </TouchableOpacity>
            </View>

            {/* Add Email List */}
            {arrayEmail.length > 0 && (
              <View style={styles.botView_peopleList}>
                <FlatList
                  data={arrayEmail}
                  renderItem={RenderEmail}
                  keyExtractor={item => item.id}
                  // extraData={refreshFlatlist}
                />
              </View>
            )}

            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                // let newArrayPeople = [];
                // arrayPeople.map(person => newArrayPeople.push(person.name));
                // callBack2(newArrayPeople);
                callBack2(arrayEmail);
                callBack();
                // console.log(newArrayPeople);
              }}>
              <Image
                source={checklistCircle}
                style={{
                  height: 48,
                  width: 48,
                  backgroundColor: COLORS.WHITE,
                  borderRadius: 24,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                height: 160,
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

  botView: {
    backgroundColor: COLORS.WHITE,
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
    paddingHorizontal: 30,
    // flex: 1,
    // height: '100%',
  },
  botView_peopleBody: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#D3ECFB',
    borderRadius: 8,
  },
  botView_peoplePic: {},
  botView_closePic: {
    height: 16,
    width: 16,
  },
  botView_peopleText: {
    fontFamily: fonts.NunitoSansLight,
    fontSize: 16,
    lineHeight: 1.4 * 16,
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

  closePic: {
    // backgroundColor: 'yellow',
  },

  // Next Button
  nextButton: {
    position: 'absolute',
    right: 30,
    bottom: 72,
  },

  checkbox: {
    position: 'absolute',
    right: -8,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
