import React, {useState, useRef, useEffect} from 'react'
import { 
	TouchableOpacity,
	SafeAreaView, 
	View, 
	Text, 
	StyleSheet, 
	Image 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Popover, { Rect } from 'react-native-popover-view';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { chooseLanguage, getLocalLanguage } from '../../action/index';

import { fonts } from '../../utils/fonts';
import  COLORS  from '../../utils/color';

const ArrowDown = '../../assets/icons/ArrowDown.png';
const ArrowUp = '../../assets/icons/ArrowUp.png';

import { enGB, enUS, ina, zhCN, checklist } from '../../assets/index';

    
const Landing  = ({navigation}) => {


    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.getItem('chooseLang')
          .then(userString => {
            if (userString) {
         
              userObject = JSON.parse(userString)
              dispatch(getLocalLanguage(userObject));
            }

          })
          .catch(err => {
            console.log(err);
          })

    }, []);
    

    const { language, choose }  = useSelector((state) => state);


    const insets = useSafeAreaInsets();
    const touchable = useRef();
    const [ showPopover, setShowPopover] = useState(false);

    function chooseLanguageFunction(row) {
        dispatch(chooseLanguage(row));
        setShowPopover(false)
        i18n.changeLanguage(row.code)
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }} >

            <View style={{ alignItems: 'flex-end', marginTop: 50, marginRight: 37 }} >
                
                <View style={{ flexDirection: 'row' }} >
                    
                    <TouchableOpacity ref={touchable} onPress={() => setShowPopover(!showPopover)} >
                    <View style={{ flexDirection: 'row', marginRight: 13.87 }} >
                        <Image source={choose.code == 'id' ? ina : choose.code == 'en' ? enGB : zhCN} style={styles.flag} />
                        <Text style={{ ...styles.text, color: COLORS.PRIMARY, marginTop: '-10%' }} >{choose.text}</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity ref={touchable} onPress={() => setShowPopover(!showPopover)} >
                        <Image 
                            source={ showPopover ? require(ArrowUp) : require(ArrowDown) } 
                            style={{ width: 17.25, height: 9.75 }} 
                        />
                    </TouchableOpacity>
                </View>


                <Popover
                    from={new Rect(100, 30, 310, 40)}
                    isVisible={showPopover}
                    onRequestClose={() => setShowPopover(false)}
                    displayAreaInsets={insets}
                    arrowStyle={{ backgroundColor: 'transparent' }}
                    popoverStyle={{
                        height: 250,
                        width: 200,
                        borderRadius: 8,
                        paddingVertical: 10,
                    }}
                >
                    <Text style={{...styles.text, color: '#000000', marginHorizontal: 10}} >
                        {t('Choose Language')}
                    </Text>
                    <View style={{ borderWidth: 0.2, backgroundColor: '#E7E4E4', marginVertical: 10 }} />

                    <View style={{ marginHorizontal: 10 }} >
                        
                        {
                            language.map((row) => {

                                const image = row.code == 'id' ? ina : row.code == 'en' ? enGB : zhCN ;

                                if(row.code == choose.code) {
                                    return (
                                        <TouchableOpacity onPress={() => chooseLanguageFunction(row) } key={row.id} >
                                            <View style={{ flexDirection: 'row' , marginBottom: 15 }} >
                                                <Image source={image} style={{...styles.flag, marginTop: 2}} />
                                                <Text style={{...styles.language, fontFamily: fonts.NunitoSansSemiBold, color: COLORS.PRIMARY}} >
                                                    {row.name} ({row.text})
                                                </Text>
                                                <Image source={checklist} style={styles.checklist} />
                                                  
                                            </View>
                                        </TouchableOpacity>
                                    );

                                } else {
                                     return (
                                        <TouchableOpacity onPress={() => chooseLanguageFunction(row) } key={row.id} >
                                            <View style={{ flexDirection: 'row' , marginBottom: 15 }} >
                                                <Image source={image} style={{...styles.flag, marginTop: 2}} />
                                                <Text style={styles.language} >
                                                    {row.name} ({row.text})
                                                </Text>
                                                 
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }

                            })
                        }

                    </View>

                </Popover>

            </View>

            <View style={styles.boxLogo} >
            	<Image
              		source={require("../../assets/images/logoSmall.png")}
              		style={styles.logo}
            	/>
            </View>

            <View style={{ marginTop: 150}} >
            	<TouchableOpacity activeOpacity={0.9} style={{...styles.button, backgroundColor: COLORS.GREEN}} >
            		<Text style={styles.text} >
                        {t('Join a Meeting')}
                    </Text>
            	</TouchableOpacity>
            	<TouchableOpacity 
                    activeOpacity={0.9} 
                    style={{...styles.button, marginTop: 16}} 
                    onPress={() => navigation.navigate('SignIn') }
                >
            		<Text style={styles.text} > {t('Sign In')} </Text>
            	</TouchableOpacity>
            </View>

            <View style={styles.boxSignUp} >
            	<Text style={{ 
            			...styles.text,
            			fontFamily: fonts.NunitoSansReguler, 
            			color: COLORS.BLACK  
            		}} >
            		{t('Donthaveaccount')}
            	</Text>
            	<TouchableOpacity activeOpacity={0.9} style={{ marginTop: 4}} 
                    onPress={() => navigation.navigate('Register')}
                >
            		<Text style={{ ...styles.text, fontFamily: fonts.NunitoSansBold, color: COLORS.PRIMARY }} >
                        {t('Sign Up Free')}
                    </Text>
            	</TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	boxLogo:{ 
		alignItems: 'center', 
		marginTop: 160 
	},

	logo:{
		width: 220,
		height: 60.5,
	},

	text:{ 
		fontFamily: fonts.NunitoSansSemiBold, 
		fontSize: 16,
		color: COLORS.WHITE, 
		letterSpacing: 0.5,
	},

	button:{
		marginHorizontal: 30,
		backgroundColor: COLORS.PRIMARY,
		paddingVertical: 12,
		alignItems: 'center', 
		borderRadius: 12,
	},

	boxSignUp:{ 
        marginTop: 92, 
        alignItems: 'center' 
    },

    flag:{ 
        width: 20, 
        height: 20, 
        marginRight: 8, 
        marginTop: '-6%' 
    },

    language : {
        fontFamily: fonts.NunitoSansReguler, 
        fontSize: 16,
        color: COLORS.NEUTRAL, 
        letterSpacing: 0.5,
    },

    checklist:{ 
        height: 12.77, 
        width: 15,
        marginTop: '2%',
        marginLeft: 12 
    }

});

export default Landing;
