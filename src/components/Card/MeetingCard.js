import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const MeetingCard = ({id, title, colors, callBack}) => {
  return (
    <TouchableOpacity style={styles.meetingInfo} onPress={() => callBack()}>
      <View
        style={
          colors == 'green'
            ? styles.meetingInfo_line
            : colors == 'orange'
            ? {...styles.meetingInfo_line, backgroundColor: COLORS.ORANGE}
            : {...styles.meetingInfo_line, backgroundColor: COLORS.DARKGRAY}
        }></View>
      <Text
        style={
          colors == 'green'
            ? styles.meetingInfo_time
            : colors == 'orange'
            ? {...styles.meetingInfo_time, color: COLORS.ORANGE}
            : {...styles.meetingInfo_time, color: COLORS.DARKGRAY}
        }>
        09:00 AM
      </Text>
      <View style={styles.meetingInfo_textBody}>
        <Text style={styles.meetingInfo_text}>{title}</Text>
        <Text style={styles.meetingInfo_textId}>Meeting ID: {id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MeetingCard;

const styles = StyleSheet.create({
  meetingInfo: {
    width: '100%',
    height: 82,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 7,
    borderRadius: 12,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  meetingInfo_line: {
    backgroundColor: COLORS.GREEN,
    width: 8,
    height: '100%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  meetingInfo_time: {
    width: 48,
    height: 54,
    marginLeft: 4,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    textAlign: 'right',
    color: COLORS.GREEN,
  },
  meetingInfo_textBody: {
    display: 'flex',
    flexDirection: 'column',
    width: 188,
    height: 48,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  meetingInfo_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
  },
  meetingInfo_textId: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.GRAY,
    marginTop: 4,
  },
});
