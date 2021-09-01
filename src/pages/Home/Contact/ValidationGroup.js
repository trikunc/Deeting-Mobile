import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  ButtonBorder,
  ButtonPrimary,
} from '../../../components/Button/ButtonComponent';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import camera from '../../../assets/icons/camera.png';
import ClosePic from '../../../assets/icons/closeGray.png';

const ValidationGroup = ({route, navigation}) => {
  const [groupName, setGroupName] = useState('');
  const {payload} = route.params;
  console.log('payload=>', payload);

  const RenderPeople = params => {
    console.log('renderPeople', params);
    return (
      <View style={styles.botView_peopleBody}>
        <View style={styles.botView_peoplePic}>
          <Image source={params.item.picture} style={{height: 44, width: 44}} />
          <TouchableOpacity onPress={() => deletePeople(params)}>
            <Image source={ClosePic} style={styles.botView_closePic} />
          </TouchableOpacity>
        </View>
        <Text style={styles.botView_peopleText}>{params.item.name}</Text>
      </View>
    );
  };
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
        <Text style={styles.topView_Text}>Create Group</Text>
      </View>

      <View style={styles.botView}>
        <View style={styles.groupInfo}>
          <View style={styles.groupInfo_picture}>
            <Image source={camera} style={{height: 20, width: 20}} />
          </View>
          <View style={styles.groupInfo_name}>
            <TextInput
              style={styles.profile_secondText}
              onChangeText={setGroupName}
              // value={displayName}
              placeholderTextColor={COLORS.TEXTINPUT}
              placeholder=" Enter group name"
            />
          </View>
        </View>

        <Text style={styles.participat}>{payload.length} Participants</Text>
        <View style={styles.participat_wrap}>
          <FlatList
            data={payload}
            renderItem={RenderPeople}
            keyExtractor={item => item.id}
            numColumns={5}
            // scrollEnabled={false}
            // extraData={selectedId}
          />
        </View>
        <View style={{marginTop: 30}}>
          <ButtonPrimary text="Done" />
          <ButtonBorder text="Cancel" callBack={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ValidationGroup;

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
  groupInfo: {
    marginTop: 28,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  groupInfo_picture: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 52,
    borderRadius: 26,
    backgroundColor: '#C4C4C4',
    marginRight: 12,
  },
  groupInfo_name: {
    width: '80%',
    justifyContent: 'center',
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  profile_secondText: {
    fontFamily: fonts.NunitoSansReguler,
    letterSpacing: 0.5,
    fontSize: 16,
    width: '100%',
    height: 22,
    padding: 0,
    lineHeight: 1.4 * 16,
  },
  participat: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 18,
    lineHeight: 1.5 * 18,
    color: COLORS.BLACK,
    marginTop: 24,
    marginBottom: 7,
  },
  participat_wrap: {
    // flex: 1,
    height: 220,
    marginTop: 0,
  },
  botView_peopleBody: {
    alignItems: 'center',
    marginTop: 17,
    marginRight: 24,
  },
  botView_peoplePic: {},
  botView_closePic: {
    height: 16,
    width: 16,
    position: 'absolute',
    right: -16 / 2,
    bottom: 0,
  },
  botView_peopleText: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 1.4 * 12,
    marginTop: 4,
  },
});
