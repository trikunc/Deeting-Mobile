import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import changePic from '../../assets/icons/Change.png';
import trashPic from '../../assets/icons/Trash.png';
import qrPic from '../../assets/icons/qr_icon.png';
import mailPic from '../../assets/icons/mail_icon.png';

export const ChangePicModal = ({callBack1, callBack2}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper} onPress={() => callBack1()}>
        <Image source={changePic} style={styles.icon} />
        <Text style={styles.text}>Change Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper} onPress={() => callBack2()}>
        <Image source={trashPic} style={styles.icon} />
        <Text style={styles.text}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export const AddContactModal = ({callBack1, callBack2}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        // onPress={() => callBack1()}
      >
        <Image source={qrPic} style={styles.icon} />
        <Text style={styles.text}>Add by QR code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper} onPress={() => callBack2()}>
        <Image source={mailPic} style={styles.icon} />
        <Text style={styles.text}>Add by email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 185,
    height: 104,
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 15,
    width: 14.27,
    marginRight: 14.5,
  },
  text: {
    fontFamily: fonts.NunitoSansReguler,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
  },
});
