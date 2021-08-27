import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import CallIcon from '../../../assets/icons/Call.png';
import MessageIcon from '../../../assets/icons/Message.png';

import {OnlineStatus} from '../../../components/Contact/OnlineDevice';

const ContactDetail = ({route, navigation}) => {
  const {pictureOl, nameOl, statusOl} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.topView_arrowLeft}>
          <Image
            style={{
              width: 10.5,
              height: 21,
            }}
            source={ArrowLeft}
          />
        </TouchableOpacity>
        <Text style={styles.topView_Text}>Detail</Text>
      </View>

      <View style={styles.profile_picContainer}>
        <View style={styles.profile_picBorder}>
          <Image source={pictureOl} style={{height: 100, width: 100}} />
          <View style={styles.profile_picBadge}>
            <OnlineStatus statusOl={statusOl} />
          </View>
        </View>
      </View>

      <View style={styles.botView}>
        <View style={styles.name}>
          <Text style={styles.name_text}>{nameOl}</Text>
        </View>

        <View style={styles.detailInfo}>
          <View style={styles.detailInfo_left}>
            <Text style={styles.detailInfo_title}>Personal Meeting ID</Text>
            <Text style={styles.detailInfo_text}>124-919-241</Text>
          </View>
          <View style={styles.detailInfo_right}>
            <Image
              source={CallIcon}
              style={{height: 36, width: 36, marginRight: 16}}
            />
            <Image source={MessageIcon} style={{height: 36, width: 36}} />
          </View>
        </View>
        <View style={styles.detailInfo}>
          <View style={styles.detailInfo_left}>
            <Text style={styles.detailInfo_title}>Phone</Text>
            <Text style={styles.detailInfo_text}>+62 818-872-1012</Text>
          </View>
        </View>
        <View style={styles.detailInfo}>
          <View style={styles.detailInfo_left}>
            <Text style={styles.detailInfo_title}>Email</Text>
            <Text style={styles.detailInfo_text}>andira321@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: Platform.OS === 'ios' ? 115 : 150,
    display: 'flex',
    alignItems: 'center',
  },

  topView_arrowLeft: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 23.5 : 40,
    left: 27,
    width: 10.5,
    height: 21,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 18,
    top: Platform.OS === 'ios' ? 23.5 : 40,
    letterSpacing: 0.5,
  },

  profile_picContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 110 : 90,
    width: '100%',
    alignItems: 'center',
    zIndex: 100,
  },
  profile_picBorder: {
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF9F9',
    borderRadius: 55,
    elevation: Platform.OS === 'ios' ? 2 : 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  profile_picBadge: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: Platform.OS === 'ios' ? -8 : -6,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingTop: Platform.OS === 'ios' ? 70 : 65,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 66 - 58,
  },
  name_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: COLORS.BLACK,
    marginBottom: 19,
    letterSpacing: 0.5,
  },
  detailInfo: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E7E4E4',
  },
  detailInfo_left: {},
  detailInfo_title: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 14,
    lineHeight: 1.4 * 14,
    color: COLORS.BLACK,
    letterSpacing: 0.5,
  },
  detailInfo_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    marginTop: 8,
    color: COLORS.BLACK,
    letterSpacing: 0.5,
  },
  detailInfo_right: {
    flexDirection: 'row',
  },
});
