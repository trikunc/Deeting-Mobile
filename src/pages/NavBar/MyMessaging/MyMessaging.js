import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

import {BtnBlueText} from '../../../components/Button/ButtonComponent';

import COLORS from '../../../utils/color';
import {fonts} from '../../../utils/fonts';

import ArrowLeft from '../../../assets/icons/ArrowLeft.png';
import {SearchInput} from '../../../components/Input/TextInput';

import {messages} from '../../../dumyData';

const windowWidth = Dimensions.get('window').width;
const MAX_LENGTH = 24;

const MyMessaging = ({navigation}) => {
  const [dataArray, setDataArray] = useState(messages);
  const [dataFilter, setDataFilter] = useState(messages);
  const [value, setValue] = useState();

  const searchUser = text => {
    setDataFilter(
      dataArray
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter(item => item.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const RenderMessage = params => {
    console.log('renderMessage', params);
    return (
      <View style={styles.message}>
        <View style={styles.message_img}>
          <Image source={params.item.userImg} style={{height: 40, width: 40}} />
          {params.item.status === 'online' && (
            <View style={styles.message_online}></View>
          )}
        </View>
        <View style={styles.message_info}>
          <View style={styles.message_wrap}>
            <Text style={styles.message_name}>{params.item.userName}</Text>
            <Text style={styles.message_time}>{params.item.messageTime}</Text>
          </View>
          <View style={styles.message_wrap}>
            <Text style={styles.message_text}>
              {`${params.item.messageText.substring(0, MAX_LENGTH)}...`}
            </Text>
            {params.item.notification > 0 && (
              <View style={styles.message_notif}>
                <Text style={styles.message_notifText}>
                  {params.item.notification}
                </Text>
              </View>
            )}
          </View>
        </View>
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
        <Text style={styles.topView_Text}>My Messaging</Text>
      </View>

      <View style={styles.botView}>
        <SearchInput
          value={value}
          placeholder="Search Message .."
          callBack={text => searchUser(text)}
        />
        <BtnBlueText
          text="Favorite messages"
          callBack={() => alert('Favorite messages')}
        />

        <FlatList
          data={dataFilter}
          renderItem={RenderMessage}
          keyExtractor={item => item.id.toString()}
          // extraData={refreshFlatlist}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyMessaging;

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

  // Message Card
  message: {
    marginTop: 28,
    flexDirection: 'row',
    width: windowWidth - 30 * 2,
  },
  message_img: {
    marginRight: 11,
    borderRadius: 20,
  },
  message_online: {
    position: 'absolute',
    top: 5,
    right: -3,
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.GREEN,
  },
  message_info: {
    // justifyContent: 'space-between',
  },
  message_wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 111,
  },
  message_name: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 16,
    lineHeight: 1.4 * 16,
  },
  message_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontSize: 16,
    lineHeight: 1.4 * 16,
    color: COLORS.NEUTRAL,
    marginTop: 4,
  },
  message_notif: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.SECONDARY,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  message_notifText: {
    color: COLORS.WHITE,
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 16,
    lineHeight: 1.4 * 12,
  },
});
