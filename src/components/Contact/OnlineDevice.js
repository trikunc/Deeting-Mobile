import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import mobileOl from '../../assets/icons/mobileOnline.png';

export const OnlineDevice = ({statusOl}) => {
  if (statusOl == 'desktop') {
    return (
      <View style={styles.contats_online}>
        <Text style={styles.contats_onlineText}>Desktop</Text>
        <View style={styles.contats_onlineDevice}></View>
      </View>
    );
  }
  if (statusOl == 'busy') {
    return (
      <View style={styles.contats_online}>
        <Text style={{...styles.contats_onlineText, color: COLORS.DANGER}}>
          Busy
        </Text>
        <View
          style={{
            ...styles.contats_onlineDevice,
            backgroundColor: COLORS.DANGER,
          }}></View>
      </View>
    );
  }
  if (statusOl == 'mobile') {
    return (
      <View style={styles.contats_online}>
        <Text style={styles.contats_onlineText}>Mobile</Text>
        <Image source={mobileOl} style={{height: 13.33, width: 8}} />
      </View>
    );
  }
};

export const OnlineStatus = ({statusOl}) => {
  if (statusOl == 'desktop') {
    return <View style={styles.contats_onlineStatus}></View>;
  }
  if (statusOl == 'busy') {
    return (
      <View
        style={{
          ...styles.contats_onlineStatus,
          backgroundColor: COLORS.DANGER,
        }}></View>
    );
  }
  if (statusOl == 'mobile') {
    return (
      // <Image source={mobileOl} style={{height: 26.7, width: 16}} />
      <View style={styles.contats_onlineStatus}></View>
    );
  }
};

const styles = StyleSheet.create({
  // Online Status
  contats_online: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contats_onlineText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 1.4 * 12,
    color: COLORS.GREEN,
    marginRight: 8,
  },
  contats_onlineDevice: {
    backgroundColor: COLORS.GREEN,
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  contats_onlineStatus: {
    backgroundColor: COLORS.GREEN,
    height: 16,
    width: 16,
    borderRadius: 8,
  },
});
