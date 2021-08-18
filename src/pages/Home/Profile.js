import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import ArrowDown from '../../assets/icons/ArrowDown.png';
import enGB from '../../assets/icons/en-GB.png';
import profilePic from '../../assets/images/profile.png';
import editPic from '../../assets/icons/EditPhoto.png';
import closeIcon from '../../assets/icons/close.png';
import qrCode from '../../assets/icons/qrCode.png';

const deviceHeight = Dimensions.get('window').height;

const Profile = ({navigation}) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
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
        <Text style={styles.topView_Text}>Profile</Text>
      </View>
      <View style={styles.profile_picContainer}>
        <View style={styles.profile_picBorder}>
          <Image source={profilePic} />
          <TouchableOpacity style={styles.profile_picBadge}>
            <Image source={editPic} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>First Name</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>John</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Last Name</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>Doe</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Display Name</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>John Doe</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Personal Meeting ID</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>110-989-541</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Email</Text>
            <View style={styles.profile_wrapper}>
              <Text style={styles.profile_secondText}>johndoe@gmail.com</Text>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.profile_firstText}>Language</Text>
            <View style={styles.profile_wrapper}>
              <View style={styles.profile_langWrapper}>
                <Image source={enGB} style={styles.profile_flag} />
                <Text>en-GB</Text>
              </View>
              <Image source={ArrowDown} style={styles.profile_arrowDown} />
            </View>
          </View>
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}>
              <Text style={styles.profile_thirdText}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModal1(true)}>
              <Text style={styles.profile_thirdText}>
                See My Profile QR COde
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setModal2(true)}
            style={styles.profile_signOut}>
            <Text style={styles.button_primary}>Sign Out</Text>
          </TouchableOpacity>

          <Modal
            isVisible={modal1}
            swipeDirection={['down']}
            style={{
              height: deviceHeight,
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalBody}>
                <TouchableOpacity
                  style={{position: 'absolute', right: 10.3, top: 10.3}}
                  onPress={() => setModal1(false)}>
                  <Image source={closeIcon} />
                </TouchableOpacity>
                <Text style={styles.modalTitle_text}>QR Code</Text>
                <Text style={styles.modalTitle_desc}>Let’s connect!</Text>
                <View style={styles.modalQrContainer}>
                  <Image source={qrCode} />
                </View>
                <Text style={styles.modal_name}>John Doe</Text>
                <Text style={styles.modal_idTitle}>Personal Meeting ID:</Text>
                <Text style={styles.modal_id}>110-989-541</Text>
              </View>
            </View>
          </Modal>

          <Modal
            isVisible={modal2}
            swipeDirection={['down']}
            style={{
              height: deviceHeight,
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.modal2Body}>
                <TouchableOpacity
                  style={{position: 'absolute', right: 10.3, top: 10.3}}
                  onPress={() => setModal2(false)}>
                  <Image source={closeIcon} />
                </TouchableOpacity>
                <Text style={styles.modalTitle_text}>Sign Out</Text>
                <Text style={styles.modalTitle_desc}>
                  Are you sure want to sign out?
                </Text>
                <View style={styles.modal_buttonWrapper}>
                  <TouchableOpacity
                    style={{...styles.profile_signOut, width: 76}}>
                    <Text style={styles.button_primary}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profile_cancel}
                    onPress={() => setModal2(false)}>
                    <Text style={styles.button_secondary}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <View
            style={{
              height: 250,
              display: 'flex',
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const QRCodeModal = (isVisible, deviceHeight) => {
  return (
    <Modal
      isVisible={modal2}
      swipeDirection={['down']}
      style={{
        height: deviceHeight,
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modal2Body}>
          <TouchableOpacity
            style={{position: 'absolute', right: 10.3, top: 10.3}}
            onPress={() => setModal2(false)}>
            <Image source={closeIcon} />
          </TouchableOpacity>
          <Text style={styles.modalTitle_text}>Sign Out</Text>
          <Text style={styles.modalTitle_desc}>
            Are you sure want to sign out?
          </Text>
          <View style={styles.modal_buttonWrapper}>
            <TouchableOpacity style={{...styles.profile_signOut, width: 76}}>
              <Text style={styles.button_primary}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_cancel}
              onPress={() => setModal2(false)}>
              <Text style={styles.button_secondary}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
  },

  topView: {
    height: 115,
    display: 'flex',
    alignItems: 'center',
  },

  topView_arrowLeft: {
    position: 'absolute',
    top: 23.5,
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
    top: 23.5,
    letterSpacing: 0.5,
  },

  profile_picContainer: {
    position: 'absolute',
    top: 110,
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
    right: 0,
    bottom: 10,
  },
  botView: {
    backgroundColor: COLORS.WHITE,
    // flex: 1,
    paddingTop: 58,
    paddingBottom: 56,
    paddingHorizontal: 30,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
  },
  profile_firstText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 14,
  },
  profile_wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(124, 120, 120, 0.1)',
    borderRadius: 12,
    marginTop: 8,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_secondText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '400',
    fontSize: 16,
  },
  profile_langWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  profile_flag: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  profile_arrowDown: {
    width: 20,
    height: 20,
    marginRight: 12,
  },

  profile_thirdText: {
    fontFamily: fonts.NunitoSans,
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.SECONDARY,
    marginBottom: 12,
  },
  profile_signOut: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    padding: 12,
    height: 46,
    borderRadius: 12,

    backgroundColor: COLORS.DANGER,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  profile_cancel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    padding: 12,
    height: 46,
    borderRadius: 12,
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

  ////// Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  modalBody: {
    borderRadius: 16,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '60%',
    alignItems: 'center',
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
  modalQrContainer: {
    width: 150,
    height: 148.51,
    borderRadius: 12,
    backgroundColor: COLORS.WHITE,
    marginTop: 33.5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  modal_name: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 1.4 * 24,
    letterSpacing: 0.5,
    color: COLORS.BLACK,
    marginTop: 56,
  },
  modal_idTitle: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: COLORS.BLACK,
    marginTop: 8,
  },
  modal_id: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: '#6C51E1',
    marginTop: 4,
  },

  //////// Modal 2
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
});
