import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

export const RadioButton = ({props, initial, callBack}) => {
  const [value, setValue] = useState(initial);
  return (
    <View
      style={
        {
          // width: 315,
        }
      }>
      {props.map(res => {
        return (
          <TouchableOpacity
            key={res.key}
            onPress={() => {
              setValue(res.key);
              callBack(res.text);
            }}
            style={
              value === res.key
                ? {
                    ...styles.container,
                    borderWidth: 1,
                    borderColor: COLORS.PRIMARY,
                  }
                : styles.container
            }>
            <View
              style={
                value === res.key
                  ? {...styles.radioCircle, borderColor: COLORS.PRIMARY}
                  : styles.radioCircle
              }>
              {value === res.key && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>{res.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    marginVertical: 5,
  },
  radioText: {
    marginLeft: 12,
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.BLACK,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});
