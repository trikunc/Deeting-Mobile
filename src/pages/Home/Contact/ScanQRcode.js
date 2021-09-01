import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import qrCode from '../../../assets/icons/qrCode.png';
import profilePic from '../../../assets/images/profile.png';

const ScanQRcode = ({navigation}) => {
  const [isQR, setIsQR] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.topView_arrowLeft}>
          <Image
            style={{
              width: 10.5,
              height: 21,
            }}
            source={ArrowLeft}
          />
        </TouchableOpacity>
        <Text style={styles.topView_Text}>Scan QR Code</Text>
      </View>

      <View style={styles.botView}>
        <View style={styles.navButton}>
          <TouchableOpacity
            onPress={() => setIsQR(true)}
            style={
              isQR
                ? {...styles.button, backgroundColor: COLORS.WHITE}
                : styles.button
            }>
            <Text
              style={
                isQR
                  ? {...styles.buttonText, color: COLORS.PRIMARY}
                  : {...styles.buttonText, color: COLORS.WHITE}
              }>
              My QR Code
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsQR(false)}
            style={
              isQR
                ? styles.button
                : {...styles.button, backgroundColor: COLORS.WHITE}
            }>
            <Text
              style={
                isQR
                  ? {...styles.buttonText, color: COLORS.WHITE}
                  : {...styles.buttonText, color: COLORS.PRIMARY}
              }>
              Add to Contact
            </Text>
          </TouchableOpacity>
        </View>

        {isQR ? (
          <View style={styles.QRCodeModal}>
            <View style={styles.modal_picture}>
              <Image source={profilePic} style={{height: 70, width: 70}} />
            </View>
            <View style={styles.modal_QrContainer}>
              <Image source={qrCode} />
            </View>
            <Text style={styles.modal_name}>John Doe</Text>
            <Text style={styles.modal_idTitle}>Personal Meeting ID:</Text>
            <Text style={styles.modal_id}>110-989-541</Text>
          </View>
        ) : (
          <View>
            <Text>Scan QR</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ScanQRcode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: Platform.OS === 'ios' ? 115 : 150,
    display: 'flex',
    alignItems: 'center',
  },

  topView_arrowLeft: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 23.5 : 40,
    left: 27,
    width: 10.5,
    height: 21,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 18,
    top: Platform.OS === 'ios' ? 23.5 : 40,
    letterSpacing: 0.5,
  },

  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    // paddingTop: Platform.OS === 'ios' ? 70 : 65,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  navButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -38,
    height: 38,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 162,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  buttonText: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 16,
    lineHeight: 1.4 * 16,
  },

  // Modal
  QRCodeModal: {
    alignItems: 'center',
    width: 315,
    height: 515,
    marginTop: 21,
    borderRadius: 16,
    // backgroundColor: 'yellow',
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    elevation: 8,
  },
  modal_picture: {
    marginTop: 50,
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF9F9',
    borderRadius: 55,
    elevation: Platform.OS === 'ios' ? 2 : 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  modal_QrContainer: {
    width: 150,
    height: 148.51,
    borderRadius: 12,
    backgroundColor: COLORS.WHITE,
    marginTop: 37,

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
