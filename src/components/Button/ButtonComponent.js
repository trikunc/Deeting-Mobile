import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

export const ButtonPrimary = ({text, callBack}) => {
  return (
    <TouchableOpacity
      // onPress={() => callBack()}
      style={{...styles.button_submit, backgroundColor: COLORS.PRIMARY}}>
      <Text style={{...styles.button_text, color: COLORS.WHITE}}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonDanger = ({text, callBack}) => {
  return (
    <TouchableOpacity
      onPress={() => callBack()}
      style={{...styles.button_submit, backgroundColor: COLORS.DANGER}}>
      <Text style={{...styles.button_text, color: COLORS.WHITE}}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ButtonBorder = ({text, callBack}) => {
  return (
    <TouchableOpacity
      onPress={() => callBack()}
      style={{...styles.button_submit, ...styles.button_cancel}}>
      <Text style={{...styles.button_text, color: COLORS.PRIMARY}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_submit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 28,
    padding: 12,
    height: 46,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 12,
  },
  button_cancel: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  button_text: {
    fontFamily: fonts.NunitoSansSemiBold,
    letterSpacing: 0.5,
    fontSize: 16,
  },
});
