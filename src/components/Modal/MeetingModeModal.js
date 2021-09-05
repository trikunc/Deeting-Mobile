import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';
import RadioButtonRN from 'radio-buttons-react-native';
import {RadioButton} from '../../components/Button/RadioButton';

import closeIcon from '../../assets/icons/close.png';
import qrCode from '../../assets/icons/qrCode.png';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

const deviceHeight = Dimensions.get('window').height;

const MeetingModeModal = ({isVisible, callBack, callBack2}) => {
  const data = [
    {
      key: 'regularMeeting',
      text: 'Regular Meeting',
    },
    {
      key: 'voiceOnly',
      text: 'Voice Only',
    },
    {
      key: 'webinar',
      text: 'Webinar',
    },
    {
      key: 'largeConferenceRoom',
      text: 'Large Conference Room',
    },
    {
      key: 'superLargeConferenceRoom',
      text: 'Super Large Conference Room',
    },
    {
      key: 'presentationTeacher',
      text: 'Presentation / Teacher',
    },
    {
      key: 'liveInterpretation',
      text: 'Live Interpretation',
    },
    {
      key: 'partyMode',
      text: 'Party Mode',
    },
    {
      key: 'advancedCustomization',
      text: 'Advanced Customization',
    },
  ];
  return (
    <GestureRecognizer
      style={{flex: 1}}
      // onSwipeUp={ () => setModalVisible(true) }
      onSwipeDown={() => callBack()}>
      <Modal
        isVisible={isVisible}
        swipeDirection={['down']}
        style={{
          height: deviceHeight,
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <View style={styles.modalLine}></View>
            <Text style={styles.modalTitle_text}>Meeting Mode</Text>
            <View style={styles.modalOption}>
              <RadioButton
                props={data}
                initial={data[0].key}
                callBack={mode => callBack2(mode)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export default MeetingModeModal;

const styles = StyleSheet.create({
  ////// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    // marginHorizontal: 0,
  },
  modalBody: {
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: 693,
    alignItems: 'center',
  },
  modalTitle_text: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 20,
    letterSpacing: 0.5,
    marginTop: 36,
    lineHeight: 1.5 * 20,
  },
  modalLine: {
    width: 64,
    borderColor: '#ADADAD',
    borderWidth: 5,
    marginTop: 20,
    borderRadius: 5,
  },
  modalOption: {
    marginTop: 35,
  },
});
