import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const RenderHeader = params => {
  return (
    <View style={styles.contats_alphabet}>
      <Text style={styles.contats_title}>{params.key}</Text>
    </View>
  );
};

export default RenderHeader;

const styles = StyleSheet.create({
  contats_alphabet: {
    justifyContent: 'center',
    height: 38,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    paddingHorizontal: 30,
  },
  contats_title: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    color: COLORS.WHITE,
  },
});
