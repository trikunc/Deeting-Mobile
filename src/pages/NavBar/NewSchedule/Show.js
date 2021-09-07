import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {TimePicker} from 'react-native-simple-time-picker';

import {RadioButton} from '../../../components/Button/RadioButton';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

const windowWidth = Dimensions.get('window').width;

export const ShowCalendar = ({callBack}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 220,
        alignSelf: 'center',
        zIndex: 10,
      }}>
      <Calendar
        onDayPress={day => callBack(day)}
        monthFormat={'MMMM'}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={false}
        enableSwipeMonths={true}
        style={{
          marginTop: 5,

          borderRadius: 12,
          height: 362,
          width: windowWidth - 60,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.25,
          elevation: -1,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: COLORS.BLACK,
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: COLORS.NEUTRAL,
          disabledArrowColor: '#d9e1e8',
          monthTextColor: COLORS.BLACK,
          indicatorColor: 'blue',
          textDayFontFamily: fonts.NunitoSansReguler,
          textDayHeaderFontFamily: fonts.NunitoSansReguler,
          textMonthFontFamily: fonts.NunitoSansBold,
          textDayFontWeight: 'normal',
          textDayHeaderFontWeight: 'normal',
          textMonthFontWeight: '600',
          textDayFontSize: 16,
          textDayHeaderFontSize: 12,
          textMonthFontSize: 18,
        }}
      />
    </View>
  );
};

export const TimePick = ({hour, minute, callBack1, callBack2, left}) => {
  return (
    <View
      style={
        left ? {...styles.timePic, left: 30} : {...styles.timePic, right: 30}
      }>
      <TimePicker
        selectedHours={hour}
        selectedMinutes={minute}
        onChange={hours => {
          callBack1(hours.hours);
          callBack2(hours.minutes);
          // setSelectedHours1(hours.hours);
          // setSelectedMinutes1(hours.minutes);
        }}
      />
    </View>
  );
};

export const RepeatMode = ({data, firstData, callBack}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 680,
        // right: '1%',
        backgroundColor: COLORS.WHITE,
        borderRadius: 12,
        alignSelf: 'center',
        width: windowWidth - 60,
        padding: 38,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.25,
        zIndex: 10,
      }}>
      <RadioButton
        props={data}
        initial={firstData}
        callBack={repeat => callBack(repeat)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePic: {
    position: 'absolute',

    top: 330,
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    height: 240,
    width: 147,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    zIndex: 10,
  },
});
