import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {TextDisplayLight} from '../../../components/Input/TextInput';
import {
  ButtonPrimary,
  ButtonDanger,
} from '../../../components/Button/ButtonComponent';
import {DangerInfoModal} from '../../../components/Modal/InfoModal';
import ShareMeetingModal from '../../../components/Modal/ShareMeetingModal';
import InviteParticipantModal from '../../../components/Modal/InviteParticipantModal';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import Share from '../../../assets/icons/Share.png';
import Invite from '../../../assets/icons/Invite.png';

const deviceHeight = Dimensions.get('window').height;

const meetingDetail = ({route, navigation}) => {
  const {id, title} = route.params;
  const [deleteModal, setDeleteModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [inviteModal, setInviteModal] = useState(false);

  let str = title;
  let matches = str.match(/\b(\w)/g);
  let acronym = matches.join('').slice(0, 2);

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
              <Text style={styles.title_photoText}>{acronym}</Text>
            </View>
          </View>
          <View style={styles.title_info}>
            <Text style={styles.title_infoText}>{title}</Text>
            <View style={styles.title_infoIcon}>
              <TouchableOpacity onPress={() => setShareModal(true)}>
                <Image
                  source={Share}
                  style={{height: 28, width: 28, marginRight: 16}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setInviteModal(true)}>
                <Image source={Invite} style={{height: 28, width: 28}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TextDisplayLight title="When" text="Today, 5 August 2021" />
        <TextDisplayLight title="Time" text="09:00 AM - 10:30 AM" />
        <TextDisplayLight title="Duration" text="90 minutes" />
        <TextDisplayLight title="Meeting ID" text={id} />
        <TextDisplayLight title="Passcode" text="r8agtx" />

        <ButtonPrimary
          text="Start Meeting"
          callBack={() => alert('Start meeting')}
        />
        <ButtonDanger
          text="Delete Meeting"
          callBack={() => setDeleteModal(true)}
          border={true}
        />
      </View>

      <DangerInfoModal
        title="Delete Meeting"
        text="Are you sure want to delete?"
        isVisible={deleteModal}
        callBack1={() => setDeleteModal(false)}
        callBack2={() => alert('Delete Yes')}
      />

      <ShareMeetingModal
        isVisible={shareModal}
        callBack1={() => setShareModal(false)}
      />
      <InviteParticipantModal
        isVisible={inviteModal}
        callBack1={() => setInviteModal(false)}
      />
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
});
