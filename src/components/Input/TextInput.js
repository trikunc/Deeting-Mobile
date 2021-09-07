import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Switch,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {fonts} from '../../utils/fonts';
import COLORS from '../../utils/color';
import moment from 'moment';

import calendarPic from '../../assets/icons/calendar.png';
import arrowRightPic from '../../assets/icons/arrowRightBlk.png';
import closePic from '../../assets/icons/closeBlack.png';

const windowWidth = Dimensions.get('window').width;

export const TextHeader = ({title, count}) => {
  return (
    <View
      style={{
        ...styles.profile,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.profile_firstText}>{title}</Text>
      <Text style={styles.profile_countText}>({count})</Text>
    </View>
  );
};

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

export const TextInp = ({
  title,
  text,
  onChangeText,
  editable,
  placeholder,
  data,
  callBack,
}) => {
  console.log('dataTextInp:', data);
  return (
    <View style={styles.profile}>
      <Text style={styles.profile_firstText}>{title}</Text>
      {editable == false && (
        <Text style={styles.profile_note}>
          This information disable to change
        </Text>
      )}
      {data && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingVertical: 9,
            // paddingHorizontal: 7,
            flexWrap: 'wrap',
          }}>
          {data.map(item => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 8,
                borderRadius: 8,
                backgroundColor: '#D3ECFB',
                marginTop: 8,
                marginBottom: 4,
                marginHorizontal: 5,
                width: windowWidth / 2 - 40,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={item.picture} style={{height: 32, width: 32}} />
                <Text style={{marginLeft: 8}}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={params => callBack(params)}>
                <Image
                  source={closePic}
                  style={{
                    height: 21,
                    width: 21,
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <View
        style={
          editable == true
            ? {...styles.profile_wrapper}
            : {
                ...styles.profile_wrapper,
                backgroundColor: 'rgba(134, 132, 132, 0.27)',
              }
        }>
        <TextInput
          style={{...styles.profile_secondText, width: '100%'}}
          onChangeText={value => {
            console.log(value);
            onChangeText(value);
          }}
          value={text}
          placeholderTextColor={COLORS.TEXTINPUT}
          placeholder={placeholder}
          editable={editable}
          selectTextOnFocus={editable}
        />
      </View>
    </View>
  );
};

export const BtnInputDate = ({title, value, callBack}) => {
  const formatDate = value => {
    return moment(value).format('dddd, DD MMM YYYY');
  };
  return (
    <View style={styles.profile}>
      <Text style={styles.profile_firstText}>{title}</Text>
      <TouchableOpacity
        style={styles.profile_wrapper}
        onPress={() => callBack()}>
        <Text style={styles.profile_secondText}>{formatDate(value)}</Text>
        <Image source={calendarPic} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export const BtnInputTime = ({
  title1,
  value1,
  callBack1,
  title2,
  value2,
  callBack2,
}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{...styles.profile, width: 147}}>
        <Text style={styles.profile_firstText}>{title1}</Text>
        <TouchableOpacity
          style={styles.profile_wrapper}
          onPress={() => callBack1()}>
          <Text style={styles.profile_secondText}>{value1}</Text>
          <Image source={arrowRightPic} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={{...styles.profile, width: 147}}>
        <Text style={styles.profile_firstText}>{title2}</Text>
        <TouchableOpacity
          style={styles.profile_wrapper}
          onPress={() => callBack2()}>
          <Text style={styles.profile_secondText}>{value2}</Text>
          <Image source={arrowRightPic} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BtnInputOption = ({title, value, callBack}) => {
  return (
    <View style={{...styles.profile}}>
      <Text style={styles.profile_firstText}>{title}</Text>
      <TouchableOpacity
        style={styles.profile_wrapper}
        onPress={() => callBack()}>
        <Text style={{...styles.profile_secondText, width: '80%'}}>
          {value}
        </Text>
        <Image source={arrowRightPic} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export const TogleInput = ({title, value, wrap, callBack}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        ...styles.profile,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={styles.profile_firstText}>{title}</Text>
        {wrap ? (
          <View
            style={
              isEnabled
                ? {
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    backgroundColor: '#D3ECFB',
                    borderRadius: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }
                : {
                    // ...styles.profile_wrapper,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    backgroundColor: 'rgba(124, 120, 120, 0.1)',
                    borderRadius: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }
            }>
            <Text
              style={
                isEnabled
                  ? {
                      ...styles.profile_thirdText,
                      marginTop: 0,
                      color: COLORS.SECONDARY,
                    }
                  : {...styles.profile_thirdText, marginTop: 0}
              }>
              {value}
            </Text>
          </View>
        ) : (
          <Text style={styles.profile_thirdText}>{value}</Text>
        )}
      </View>

      <Switch
        trackColor={{false: '#BEBEBE', true: '#1A7842'}}
        thumbColor={isEnabled ? '#FFF' : '#FFF'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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

  profile_note: {
    fontFamily: fonts.NunitoSansLight,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    marginTop: 4,
    letterSpacing: 0.5,
  },
  profile_wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 54,
  },
  profile_countText: {
    fontFamily: fonts.NunitoSansLight,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    textAlign: 'center',
    color: COLORS.BLACK,
  },
  profile_firstText: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 14,
  },
  profile_secondText: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 16,
    color: COLORS.NEUTRAL,
    // width: '90%',
  },
  profile_thirdText: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.GRAY,
    marginTop: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
});
