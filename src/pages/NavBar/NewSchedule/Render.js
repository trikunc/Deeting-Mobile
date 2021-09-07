import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import closePic from '../../../assets/icons/closeBlack.png';

const windowWidth = Dimensions.get('window').width;

const catchString = email => {
  console.log('catchString: ', email);
  let matches = email.match(/\b(\w)/g);
  return matches.join('').toUpperCase().slice(0, 2);
};

export const RenderEmail = ({addEmail, callBack}) => {
  return (
    <View>
      {addEmail.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 8,
            borderRadius: 8,
            backgroundColor: '#D3ECFB',
            marginTop: 8,
            marginBottom: 4,
            width: windowWidth - 60,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#F2994A',
                height: 32,
                width: 32,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 8,
              }}>
              <Text style={{color: 'white', fontSize: 16}}>
                {catchString(item.email)}
              </Text>
            </View>
            <Text style={{marginLeft: 8}}>{item.email}</Text>
          </View>
          <TouchableOpacity onPress={() => callBack(index)}>
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
  );
};

export const RenderContact = ({addContact, callBack}) => {
  return addContact.map((item, index) => (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#D3ECFB',
        marginTop: 8,
        marginBottom: 4,
        // marginHorizontal: 5,
        width: windowWidth / 2 - 35.5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={item.picture} style={{height: 32, width: 32}} />
        <Text style={{marginLeft: 8}}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={() => callBack(index)}>
        <Image
          source={closePic}
          style={{
            height: 21,
            width: 21,
          }}
        />
      </TouchableOpacity>
    </View>
  ));
};
