import React, {useState, useRef} from 'react'
import { 
	TouchableOpacity,
	SafeAreaView, 
	View, 
	Text, 
	StyleSheet, 
	Image 
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Popover, { Rect } from 'react-native-popover-view';

import { fonts } from '../../utils/fonts';
import  COLORS  from '../../utils/color';

const ArrowDown = '../../assets/icons/ArrowDown.png';
const ArrowUp = '../../assets/icons/ArrowUp.png';

const enGB    = '../../assets/icons/en-GB.png';
const enUS    = '../../assets/icons/en-US.png';
const ina     = '../../assets/icons/ina.png';

    
const Landing  = ({navigation}) => {

    const insets = useSafeAreaInsets();
    const touchable = useRef();
    const [ showPopover, setShowPopover] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }} >

            <View style={{ alignItems: 'flex-end', marginTop: 50, marginRight: 37 }} >
                
                <View style={{ flexDirection: 'row' }} >
                    
                    <TouchableOpacity ref={touchable} onPress={() => setShowPopover(!showPopover)} >
                    <View style={{ flexDirection: 'row', marginRight: 13.87 }} >
                        <Image source={require(enGB)} style={styles.flag} />
                        <Text style={{ ...styles.text, color: COLORS.PRIMARY, marginTop: '-9%' }} >en-GB</Text>
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
                    // mode="tooltip"
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
                    <Text style={{...styles.text, color: '#000000', marginHorizontal: 10}} >Choose Language</Text>
                    <View style={{ borderWidth: 0.2, backgroundColor: '#E7E4E4', marginVertical: 10 }} />

                    <View style={{ marginHorizontal: 10 }} >
                        
                        <TouchableOpacity onPress={() => setShowPopover(false) } >
                            <View style={{ flexDirection: 'row' , marginBottom: 15 }} >
                                <Image source={require(enUS)} style={{...styles.flag, marginTop: 2}} />
                                <Text style={styles.language} >English (en-US)</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setShowPopover(false) } >
                            <View style={{ flexDirection: 'row' , marginBottom: 15 }} >
                                <Image source={require(enGB)} style={{...styles.flag, marginTop: 2 }} />
                                <Text style={{...styles.language, fontFamily: fonts.NunitoSansSemiBold, color: COLORS.PRIMARY}} >English (en-GB))</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setShowPopover(false) } >
                            <View style={{ flexDirection: 'row' , marginBottom: 15 }} >
                                <Image source={require(ina)} style={{...styles.flag, marginTop: 2}} />
                                <Text style={styles.language} >Indonesian (id)</Text>
                            </View>
                        </TouchableOpacity>

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
            		<Text style={styles.text} >Join a Meeting</Text>
            	</TouchableOpacity>
            	<TouchableOpacity 
                    activeOpacity={0.9} 
                    style={{...styles.button, marginTop: 16}} 
                    onPress={() => navigation.navigate('SignIn') }
                >
            		<Text style={styles.text} >Sign In</Text>
            	</TouchableOpacity>
            </View>

            <View style={styles.boxSignUp} >
            	<Text style={{ 
            			...styles.text,
            			fontFamily: fonts.NunitoSansReguler, 
            			color: COLORS.BLACK  
            		}} >
            		Don’t have an account?
            	</Text>
            	<TouchableOpacity activeOpacity={0.9} style={{ marginTop: 4}} 
                    onPress={() => navigation.navigate('Register')}
                >
            		<Text style={{ ...styles.text, fontFamily: fonts.NunitoSansBold, color: COLORS.PRIMARY }} >Sign Up Free</Text>
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

	boxSignUp:{ marginTop: 92, alignItems: 'center' },

    flag:{ width: 20, height: 20, marginRight: 8, marginTop: '-6%' },

    language : {
        fontFamily: fonts.NunitoSansReguler, 
        fontSize: 16,
        color: COLORS.NEUTRAL, 
        letterSpacing: 0.5,
    },

});

export default Landing;
