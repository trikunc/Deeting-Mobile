import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import COLORS from '../../utils/color';
import {fonts} from '../../utils/fonts';

import meetingNow from '../../assets/icons/meetingNow.png';
import joinMeeting from '../../assets/icons/joinMeeting.png';
import newSchedule from '../../assets/icons/newSchedule.png';
import myRecordings from '../../assets/icons/myRecordings.png';
import webinarList from '../../assets/icons/webinarList.png';
import myMessaging from '../../assets/icons/myMessaging.png';
import meetingCalendar from '../../assets/icons/meetingCalender.png';
import Arrow from '../../assets/icons/ArrowBlack.png';

// const SliderWidth = Dimensions.get('screen').width;

export default function CustomNav({navigation}) {
  const carouselRef = useRef(null);
  const [activeIndex, setActivateIndex] = useState(0);
  const [carouselState, setCarouselState] = useState([
    {
      title: meetingNow,
      text: 'Meeting Now',
      navigateTo: 'MeetingNow',
    },
    {
      title: joinMeeting,
      text: 'Join Meeting',
      navigateTo: 'JoinMeeting',
    },
    {
      title: newSchedule,
      text: 'New Schedule',
      navigateTo: 'NewSchedule',
    },
    {
      title: myRecordings,
      text: 'My Recordings',
      navigateTo: 'MyRecordings',
    },
    {
      title: webinarList,
      text: 'Webinar List',
      navigateTo: 'WebinarList',
    },
    {
      title: myMessaging,
      text: 'My Messaging',
      navigateTo: 'MyMessaging',
    },
    {
      title: meetingCalendar,
      text: 'Meeting Calendar',
      navigateTo: 'MeetingCalendar',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.navigateTo)}
        style={styles.meetingNav_icon}>
        <Image source={item.title} style={{height: 50, width: 50}} />
        <Text style={styles.meetingNav_text}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.meetingNav}>
      <View style={styles.meetingNav_body}>
        {activeIndex > 0 && (
          <TouchableOpacity
            style={styles.meetingNav_arrowLeft}
            onPress={() => {
              this._carousel.snapToPrev();
            }}>
            <Image source={Arrow} style={{height: 14.89, width: 8.78}} />
          </TouchableOpacity>
        )}
        {activeIndex < 4 && (
          <TouchableOpacity
            style={styles.meetingNav_arrowRight}
            onPress={() => {
              this._carousel.snapToNext();
            }}>
            <Image
              source={Arrow}
              style={{
                height: 14.89,
                width: 8.78,
                transform: [{rotate: '180deg'}],
              }}
            />
          </TouchableOpacity>
        )}

        <View style={styles.meetingNav_wrapper}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={carouselState}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            sliderWidth={232}
            itemWidth={85}
            itemHeight={88}
            renderItem={_renderItem}
            activeSlideAlignment="start"
            maxToRenderPerBatch={4}
            onSnapToItem={index => setActivateIndex(index)}
            useExperimentalSnap={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //////// Nav
  meetingNav: {
    position: 'absolute',
    top: 110,
    width: '100%',
    zIndex: 100,
  },
  meetingNav_body: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 116,
    marginHorizontal: 20,

    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    borderRadius: 10,
  },
  meetingNav_arrowLeft: {
    position: 'absolute',
    left: 23.2,
  },
  meetingNav_arrowRight: {
    position: 'absolute',
    right: 23.2,
  },
  meetingNav_wrapper: {
    alignItems: 'center',
    paddingHorizontal: 24,
    width: 232,
    height: 88,
  },

  meetingNav_icon: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 63,
    height: '100%',
    marginRight: 36,
  },

  meetingNav_text: {
    fontFamily: fonts.NunitoSansReguler,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 1.4 * 12,
    marginTop: 4,
    textAlign: 'center',
    color: COLORS.BLACK,
  },
});
