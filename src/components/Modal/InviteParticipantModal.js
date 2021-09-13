import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

import {SearchInput} from '../../components/Input/TextInput';
import {BtnBlueText} from '../../components/Button/ButtonComponent';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const InviteParticipantModal = ({isVisible, callBack1, callBack2}) => {
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={{alignItems: 'center', marginTop: 28, marginHorizontal: 35 / 2}}>
        <Image source={item.image} style={{height: 48, width: 48}} />
        <Text
          style={{
            fontFamily: fonts.NunitoSansReguler,
            fontSize: 11,
            lineHeight: 1.4 * 11,
            marginTop: 4,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <GestureRecognizer
      style={{flex: 1}}
      // onSwipeUp={ () => setModalVisible(true) }
      onSwipeDown={() => callBack1()}>
      <Modal
        isVisible={isVisible}
        swipeDirection={['down']}
        style={{
          height: deviceHeight,
          margin: 0,
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <View style={styles.modalLine}></View>
            <Text style={styles.modalTitle_text}>Invite Participants</Text>
            <View style={{marginHorizontal: 30}}>
              <SearchInput placeholder="Search Participant .." />
              <BtnBlueText
                text="Add from contacts"
                callBack={() => alert('Add from contacts')}
              />
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export default InviteParticipantModal;

const styles = StyleSheet.create({
  ////// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBody: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: 336,
    alignItems: 'center',
  },
  modalLine: {
    width: 64,
    // height: 5,
    // backgroundColor: '#ADADAD',
    borderColor: '#ADADAD',
    borderWidth: 2.5,
    marginTop: 16,
    borderRadius: 2.5,
  },
  modalTitle_text: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 20,
    letterSpacing: 0.5,
    marginTop: 28,
    lineHeight: 1.5 * 20,
  },
  modalLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: deviceWidth - 15 * 2,
    height: 62,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7E4E4',
    borderRadius: 12,
    marginTop: 32,
  },
  modalLink_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    marginRight: 20,
  },
});
