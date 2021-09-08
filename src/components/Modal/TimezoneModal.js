import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import arrowPic from '../../assets/icons/arrowRightBlk.png';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const windowWidth = Dimensions.get('window').width;

const TimezoneModal = ({isVisible, callBack, callBack2}) => {
  const [value, setValue] = useState('');

  const data = [
    {
      key: 'osakaSapporoTokyo',
      text: 'Osaka, Sapporo, Tokyo',
      time: 'GMT-11:00',
    },
    {
      key: 'darwin',
      text: 'Darwin',
      time: 'GMT+09:30',
    },
    {
      key: 'adelaide',
      text: 'Adelaide',
      time: 'GMT+09:30',
    },
    {
      key: 'vladivostok',
      text: 'Vladivostok',
      time: 'GMT+10:00',
    },
    {
      key: 'brisbane',
      text: 'Brisbane',
      time: 'GMT+10:00',
    },
    {
      key: 'guam',
      text: 'Guam',
      time: 'GMT+10:00',
    },
    {
      key: 'canberraMelbourne',
      text: 'Canberra, Melbourne',
      time: 'GMT+10:00',
    },
  ];

  const convertZone = (text, time) => {
    return `${time}, ${text}`;
  };
  return (
    <View style={styles.modalOption}>
      <TouchableOpacity>
        <Image source={arrowPic} style={styles.arrowUp} />
      </TouchableOpacity>
      {data.map(res => {
        return (
          <TouchableOpacity
            key={res.key}
            onPress={() => {
              setValue(res.key);
              callBack2(convertZone(res.text, res.time));
            }}
            style={
              value === res.key
                ? {
                    ...styles.container,
                    backgroundColor: '#A7D9F8',
                  }
                : styles.container
            }>
            <Text>{res.text}</Text>
            <Text>{res.time}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity>
        <Image source={arrowPic} style={styles.arrowDown} />
      </TouchableOpacity>
    </View>
  );
};

export default TimezoneModal;

const styles = StyleSheet.create({
  ////// Modal

  modalOption: {
    position: 'absolute',
    top: 460,
    // right: '1%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    alignSelf: 'center',
    width: windowWidth - 60,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    zIndex: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 9,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15.5,
    marginVertical: 5,
  },
  arrowUp: {
    height: 28,
    width: 28,
    marginTop: 16,
    marginBottom: 4,
    alignSelf: 'center',
    transform: [{rotate: '-90deg'}],
  },
  arrowDown: {
    height: 28,
    width: 28,
    marginTop: 4,
    marginBottom: 16,
    alignSelf: 'center',
    transform: [{rotate: '90deg'}],
  },
});
