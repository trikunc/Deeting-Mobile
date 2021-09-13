import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

import {
  ButtonDanger,
  ButtonNoBg,
} from '../../components/Button/ButtonComponent';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import closeIcon from '../../assets/icons/close.png';

const deviceHeight = Dimensions.get('window').height;

export const DangerInfoModal = ({
  title,
  text,
  isVisible,
  callBack1,
  callBack2,
}) => {
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
          // margin: 0,
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal2Body}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10.3, top: 10.3}}
              onPress={() => callBack1()}>
              <Image source={closeIcon} />
            </TouchableOpacity>
            <Text style={styles.modalTitle_text}>{title}</Text>
            <Text style={styles.modalTitle_desc}>{text}</Text>
            <View style={styles.modal_buttonWrapper}>
              <View style={{width: 76}}>
                <ButtonDanger text="Yes" callBack={() => callBack2()} />
              </View>
              <View style={{width: 76}}>
                <ButtonNoBg text="No" callBack={() => callBack1()} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  //// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  modal2Body: {
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '26%',
    alignItems: 'center',
  },
  modal_buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalTitle_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0.5,
    marginTop: 28,
    lineHeight: 1.4 * 24,
  },
  modalTitle_desc: {
    fontFamily: fonts.NunitoSansLight,
    fontWeight: '300',
    fontSize: 18,
    letterSpacing: 0.5,
    color: COLORS.BLACK,
    marginTop: 4,
    lineHeight: 1.5 * 18,
  },
});
