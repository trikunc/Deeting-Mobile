import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import arrowRight from '../../../assets/icons/ArrowRightSecondary.png';
import Refresh from '../../../assets/icons/Refresh.png';
import Share from '../../../assets/icons/Share.png';
import Invite from '../../../assets/icons/Invite.png';
import closeIcon from '../../../assets/icons/close.png';

const deviceHeight = Dimensions.get('window').height;

const meetingDetail = ({navigation}) => {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={styles.topView_arrowLeft}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 10.5,
              height: 21,
            }}
            source={ArrowLeft}
          />
        </TouchableOpacity>
        <Text style={styles.topView_Text}>Meeting Details</Text>
      </View>

      <View style={styles.botView}>
        <View style={styles.title}>
          <View style={styles.title_photoBody}>
            <View style={styles.title_photoEllipse}>
              <Text style={styles.title_photoText}>DW</Text>
            </View>
          </View>
          <View style={styles.title_info}>
            <Text style={styles.title_infoText}>Design Webinar</Text>
            <View style={styles.title_infoIcon}>
              <Image
                source={Share}
                style={{height: 28, width: 28, marginRight: 16}}
              />
              <Image source={Invite} style={{height: 28, width: 28}} />
            </View>
          </View>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoCard_title}>When</Text>
          <Text style={styles.infoCard_text}>Today, 5 August 2021</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoCard_title}>Time</Text>
          <Text style={styles.infoCard_text}>09:00 AM - 10:30 AM</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoCard_title}>Duration</Text>
          <Text style={styles.infoCard_text}>90 minutes</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoCard_title}>Meeting ID</Text>
          <Text style={styles.infoCard_text}>123-000-781</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoCard_title}>Passcode</Text>
          <Text style={styles.infoCard_text}>r8agtx</Text>
        </View>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: COLORS.PRIMARY}}>
          <Text style={styles.button_text}>Start Meeting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: COLORS.RED}}
          onPress={() => setModal(true)}>
          <Text style={styles.button_text}>Delete Meeting</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={modal}
        swipeDirection={['down']}
        style={{
          height: deviceHeight,
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal2Body}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10.3, top: 10.3}}
              onPress={() => setModal(false)}>
              <Image source={closeIcon} />
            </TouchableOpacity>
            <Text style={styles.modalTitle_text}>Delete Meeting</Text>
            <Text style={styles.modalTitle_desc}>
              Are you sure want to delete?
            </Text>
            <View style={styles.modal_buttonWrapper}>
              <TouchableOpacity
                style={{
                  ...styles.button,
                  width: 76,
                  backgroundColor: COLORS.RED,
                }}>
                <Text style={styles.button_primary}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.button, width: 76}}
                onPress={() => setModal(false)}>
                <Text style={styles.button_secondary}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default meetingDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 96,
    display: 'flex',
    // paddingTop: 48.5,
    alignItems: 'center',
  },

  topView_arrowLeft: {
    position: 'absolute',
    top: 23.5,
    left: 27,
  },

  topView_Text: {
    color: COLORS.WHITE,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 18,
    top: 23.5,
    letterSpacing: 0.5,
  },

  botView: {
    backgroundColor: COLORS.WHITE,
    height: '100%',
    paddingTop: 4,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },

  // Title
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 78,
    marginTop: 32 - 4,
    marginBottom: 36,
    overflow: 'hidden',
  },
  title_photoBody: {
    height: 75,
    width: 75,
  },
  title_photoEllipse: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.RED,
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_photoText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    color: COLORS.WHITE,
  },
  title_info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    marginLeft: 20,
  },
  title_infoText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    color: COLORS.BLACK,
  },
  title_infoIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },

  //// Info Card
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    height: 54,
    marginBottom: 24,
  },
  infoCard_title: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.4 * 14,
  },
  infoCard_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 1.4 * 16,
    marginTop: 8,
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    height: 46,
    borderRadius: 12,
  },
  button_text: {
    color: COLORS.WHITE,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },

  //// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  modal2Body: {
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '26%',
    alignItems: 'center',
  },
  modal_buttonWrapper: {
    width: 76 * 2,
    display: 'flex',
    flexDirection: 'row',
  },
  modalTitle_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 0.5,
    marginTop: 28,
    lineHeight: 1.4 * 24,
  },
  modalTitle_desc: {
    fontFamily: fonts.NunitoSansLight,
    fontWeight: '300',
    fontSize: 18,
    letterSpacing: 0.5,
    color: COLORS.BLACK,
    marginTop: 4,
    lineHeight: 1.5 * 18,
  },
  button_primary: {
    color: COLORS.WHITE,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
  button_secondary: {
    color: COLORS.BLACK,
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 16,
  },
});
