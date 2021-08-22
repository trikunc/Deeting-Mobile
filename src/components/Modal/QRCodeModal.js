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
import qrCode from '../../assets/icons/qrCode.png';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const deviceHeight = Dimensions.get('window').height;

const QRCodeModal = ({isVisible, callBack}) => {
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
          <Text style={styles.modalTitle_text}>QR Code</Text>
          <Text style={styles.modalTitle_desc}>Let’s connect!</Text>
          <View style={styles.modalQrContainer}>
            <Image source={qrCode} />
          </View>
          <Text style={styles.modal_name}>John Doe</Text>
          <Text style={styles.modal_idTitle}>Personal Meeting ID:</Text>
          <Text style={styles.modal_id}>110-989-541</Text>
        </View>
      </View>
    </Modal>
  );
};

export default QRCodeModal;

const styles = StyleSheet.create({
  ////// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  modalBody: {
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '60%',
    alignItems: 'center',
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
  modalQrContainer: {
    width: 150,
    height: 148.51,
    borderRadius: 12,
    backgroundColor: COLORS.WHITE,
    marginTop: 33.5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  modal_name: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    letterSpacing: 0.5,
    color: COLORS.BLACK,
    marginTop: 56,
  },
  modal_idTitle: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: COLORS.BLACK,
    marginTop: 8,
  },
  modal_id: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: '#6C51E1',
    marginTop: 4,
  },
});
