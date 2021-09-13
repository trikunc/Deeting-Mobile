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

import {ButtonPrimary} from '../../components/Button/ButtonComponent';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import LinkPic from '../../assets/icons/link.png';
import Whatsapp from '../../assets/icons/social_whatsapp.png';
import Instagram from '../../assets/icons/social_instagram.png';
import Twitter from '../../assets/icons/social_twitter.png';
import Facebook from '../../assets/icons/social_facebook.png';
import Email from '../../assets/icons/social_email.png';
import Line from '../../assets/icons/social_line.png';
import Discord from '../../assets/icons/social_discord.png';
import Linkedin from '../../assets/icons/social_linkedin.png';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const ShareMeetingModal = ({isVisible, callBack1, callBack2}) => {
  const data = [
    {
      id: 1,
      name: 'Whatsapp',
      image: Whatsapp,
    },
    {
      id: 2,
      name: 'Instagram',
      image: Instagram,
    },
    {
      id: 3,
      name: 'Twitter',
      image: Twitter,
    },
    {
      id: 4,
      name: 'Facebook',
      image: Facebook,
    },
    {
      id: 5,
      name: 'Email',
      image: Email,
    },
    {
      id: 6,
      name: 'Line',
      image: Line,
    },
    {
      id: 7,
      name: 'Discord',
      image: Discord,
    },
    {
      id: 8,
      name: 'Linkedin',
      image: Linkedin,
    },
  ];

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
            <Text style={styles.modalTitle_text}>Share Meeting</Text>
            <View style={styles.modalLink}>
              <Image
                source={LinkPic}
                style={{height: 20, width: 20, marginRight: 8}}
              />
              <Text style={styles.modalLink_text}>
                https://deeting.ai/123-000-781
              </Text>
              <View style={{marginTop: -16}}>
                <ButtonPrimary text="Copy!" callBack={() => alert('Copy!')} />
              </View>
            </View>
            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={4}
              />
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export default ShareMeetingModal;

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
    height: 414,
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
