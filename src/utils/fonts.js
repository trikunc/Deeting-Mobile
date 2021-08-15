
/* for use different platforms android or ios */

import {Platform} from 'react-native';

export const fonts = {

	NunitoSansReguler  : Platform.OS === 'ios' ? 'NunitoSans-Regular' : 'NunitoSans-Regular',
	NunitoSansSemiBold : Platform.OS === 'ios' ? 'NunitoSans-SemiBold' : 'NunitoSans-SemiBold',
	NunitoSansBold     : Platform.OS === 'ios' ? 'NunitoSans-Bold' : 'NunitoSans-Bold',
	NunitoSansLight    : Platform.OS === 'ios' ? 'NunitoSans-Light' : 'NunitoSans-Light'
};