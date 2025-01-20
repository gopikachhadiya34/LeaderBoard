import {Dimensions} from 'react-native';

export const Full_Height = Dimensions.get('window').height;
export const Full_Width = Dimensions.get('window').width;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export {wp, hp};

export const spacing = {
  micro: 2,
  nano: 4,
  mini: 6,
  small: 8,
  semiSmall: 10,
  base: 12,
  md: 16,
  exMd: 18,
  semiLg: 20,
  lg: 24,
  xl: 32,
  xxl: 45,
  xxxl: 72,
};

export const getFontSize = (size: any) => {
  return size;
};

export const font = {
  size: {
    micro: getFontSize(10),
    nano: getFontSize(11),
    mini: getFontSize(12),
    small: getFontSize(13),
    base: getFontSize(14),
    semi: getFontSize(15),
    md: getFontSize(16),
    semiMd: getFontSize(17),
    lg: getFontSize(18),
    semiLg: getFontSize(20),
    xl: getFontSize(22),
    xxl: getFontSize(24),
    xxxl: getFontSize(26),
  },
};
