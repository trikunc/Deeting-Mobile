import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../utils/fonts';

export const TextDisplay = ({title, text, bold}) => {
  return (
    <View style={styles.profile}>
      <Text style={styles.profile_firstText}>{title}</Text>
      <View
        style={
          !bold
            ? {...styles.profile_wrapper}
            : {
                ...styles.profile_wrapper,
                backgroundColor: 'rgba(134, 132, 132, 0.27)',
              }
        }>
        <Text style={styles.profile_secondText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
    marginBottom: 4,
  },
  profile_firstText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 14,
  },
  profile_wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 12,
    marginTop: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
  },
  profile_secondText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '400',
    fontSize: 16,
  },
});
