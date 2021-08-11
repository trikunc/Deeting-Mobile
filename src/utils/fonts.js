
/* for use different platforms android or ios */

import {Platform} from 'react-native';

export const fonts = {

	NunitoSansSemiBold :  Platform.OS === 'ios' ? 'NunitoSans SemiBold' : 'NunitoSans-SemiBold',
	
};