import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

export const ButtonPrimary = ({text, callBack, border}) => {
  return (
    <TouchableOpacity
      onPress={() => callBack()}
      style={
        border
          ? {...styles.button_submit, ...styles.button_cancelPrimary}
          : {...styles.button_submit, backgroundColor: COLORS.PRIMARY}
      }>
      <Text
        style={
          border
            ? {...styles.button_text, color: COLORS.PRIMARY}
            : {...styles.button_text, color: COLORS.WHITE}
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const ButtonDanger = ({text, callBack, border}) => {
  return (
    <TouchableOpacity
      onPress={() => callBack()}
      style={
        border
          ? {...styles.button_submit, ...styles.button_cancelDanger}
          : {...styles.button_submit, backgroundColor: COLORS.DANGER}
      }>
      <Text
        style={
          border
            ? {...styles.button_text, color: COLORS.RED}
            : {...styles.button_text, color: COLORS.WHITE}
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const ButtonNoBg = ({text, callBack, border}) => {
  return (
    <TouchableOpacity
      onPress={() => callBack()}
      style={
        border
          ? {...styles.button_submit, ...styles.button_cancelBlk}
          : {...styles.button_submit}
      }>
      <Text
        style={
          border
            ? {...styles.button_text, color: COLORS.BLACK}
            : {...styles.button_text, color: COLORS.BLACK}
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const BtnBlueText = ({text, callBack}) => {
  return (
    <TouchableOpacity onPress={() => callBack()}>
      <Text style={styles.blueText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_submit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 16,
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
  button_cancelPrimary: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  button_cancelDanger: {
    borderWidth: 1,
    borderColor: COLORS.RED,
  },
  button_cancelBlk: {
    borderWidth: 1,
    borderColor: COLORS.BLACK,
  },
  button_text: {
    fontFamily: fonts.NunitoSansSemiBold,
    letterSpacing: 0.5,
    fontSize: 16,
  },

  blueText: {
    fontFamily: fonts.NunitoSans,
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.SECONDARY,
    marginBottom: 12,
  },
});
