import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import SignOutModal from '../../components/Modal/SignOutModal';
import QRCodeModal from '../../components/Modal/QRCodeModal';
import {ButtonDanger} from '../../components/Button/ButtonComponent';
import {TextDisplay} from '../../components/Input/TextInput';
import {ChangePicModal} from '../../components/Modal/PopUpModal';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import ArrowLeft from '../../assets/icons/ArrowLeft.png';
import profilePic from '../../assets/images/profile.png';
import editPic from '../../assets/icons/EditPhoto.png';
import changePic from '../../assets/icons/Change.png';
import trashPic from '../../assets/icons/Trash.png';
import userNoPic from '../../assets/icons/userNoPic.png';

const Profile = ({navigation}) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [profilPic, setProfilPic] = useState(profilePic);
  const [changePic, setChangePic] = useState(false);

  const removePicture = () => {
    setProfilPic(userNoPic);
    setChangePic(false);
  };
  const addPicture = () => {
    setProfilPic(profilePic);
    setChangePic(false);
  };
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
          <Image source={profilPic} style={{height: 100, width: 100}} />
          <TouchableOpacity
            style={styles.profile_picBadge}
            onPress={() => setChangePic(!changePic)}>
            <Image source={editPic} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.botView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.personInfo}>
            <Text style={styles.personInfo_text}>Personal Information</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.personInfo_edit}>Edit</Text>
            </TouchableOpacity>
          </View>

          <TextDisplay title="First Name" text="John" />
          <TextDisplay title="Last Name" text="Doe" />
          <TextDisplay title="Display Name" text="John Doe" />
          <TextDisplay title="Personal Meeting ID" text="110-989-541" bold />
          <TextDisplay title="Email" text="johndoe@gmail.com" />
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}>
              <Text style={styles.profile_blueText}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModal1(true)}>
              <Text style={styles.profile_thirdText}>
                See My Profile QR Code
              </Text>
            </TouchableOpacity>
          </View>

          <ButtonDanger text="Sign Out" callBack={() => setModal2(true)} />

          <QRCodeModal isVisible={modal1} callBack={() => setModal1(false)} />
          <SignOutModal isVisible={modal2} callBack={() => setModal2(false)} />

          <View
            style={{
              height: Platform.OS === 'ios' ? 250 : 150,
              display: 'flex',
            }}></View>
        </ScrollView>
      </View>
      {changePic && (
        <View style={{position: 'absolute', right: 30, top: '27%'}}>
          <ChangePicModal
            callBack1={() => addPicture()}
            callBack2={() => removePicture()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: Platform.OS === 'ios' ? 0 : 1,
  },

  topView: {
    height: Platform.OS === 'ios' ? 115 : 150,
    // height: '18%',
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
    fontFamily: fonts.NunitoSansBold,
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
  personInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 86 - 58,
  },
  personInfo_text: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: COLORS.BLACK,
    letterSpacing: 0.5,
  },
  personInfo_edit: {
    fontFamily: fonts.NunitoSansBold,
    letterSpacing: 0.5,
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.SECONDARY,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 24,
    marginBottom: 4,
  },

  profile_blueText: {
    fontFamily: fonts.NunitoSans,
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.SECONDARY,
    marginBottom: 12,
  },
});
