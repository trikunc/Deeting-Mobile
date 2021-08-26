import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import closeIcon from '../../assets/icons/close.png';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const deviceHeight = Dimensions.get('window').height;

const SignOutModal = ({isVisible, callBack}) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['down']}
      style={{
        height: deviceHeight,
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <TouchableOpacity
            style={{position: 'absolute', right: 10.3, top: 10.3}}
            onPress={() => callBack()}>
            <Image source={closeIcon} />
          </TouchableOpacity>
          <Text style={styles.modalTitle_text}>Sign Out</Text>
          <Text style={styles.modalTitle_desc}>
            Are you sure want to sign out?
          </Text>
          <View style={styles.modal_buttonWrapper}>
            <TouchableOpacity style={{...styles.button_danger, width: 76}}>
              <Text style={styles.button_primary}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_cancel}
              onPress={() => callBack(false)}>
              <Text style={styles.button_secondary}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;

const styles = StyleSheet.create({
  ////// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
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
  modalBody: {
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '26%',
    alignItems: 'center',
  },
  modal_buttonWrapper: {
    width: 76 * 2,
    display: 'flex',
    flexDirection: 'row',
  },
  button_danger: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    padding: 12,
    height: 46,
    borderRadius: 12,

    backgroundColor: COLORS.DANGER,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  button_cancel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    padding: 12,
    height: 46,
    borderRadius: 12,
  },
  button_primary: {
    color: COLORS.WHITE,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
  button_secondary: {
    color: COLORS.BLACK,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
});
