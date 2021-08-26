import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import NoContactPic from '../../assets/icons/NoContact.png';
import NoGroupPic from '../../assets/icons/NoGroup.png';
import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

export const NoContact = () => {
  return (
    <View style={styles.container}>
      <Image source={NoContactPic} style={styles.picture} />
      <Text style={styles.title}>No contact</Text>
      <Text style={styles.text}>You currently doesn’t have contact</Text>
    </View>
  );
};

export const NoGroup = () => {
  return (
    <View style={styles.container}>
      <Image source={NoGroupPic} style={styles.picture} />
      <Text style={styles.title}>No group</Text>
      <Text style={styles.text}>You currently doesn’t have group</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  picture: {
    height: 200,
    width: 236,
  },
  title: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    color: COLORS.NEUTRAL,
    marginTop: 24,
  },
  text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
    marginTop: 6,
  },
});
