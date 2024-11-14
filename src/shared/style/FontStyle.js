import { StyleSheet } from 'react-native';
import COLORS from '../enum/colors_library';
import { getFontSize } from '../helper/helper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const FontStyle = StyleSheet.create({
    Manrope_Bold_24: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(24)
    },
    Manrope_Bold_20: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(20)
    },
    Manrope_Bold_16: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(16)
    },
    Manrope_Bold_14: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(14)
    },
    Manrope_Bold_14_Cyan: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(14),
        color: COLORS.cyan_font
    },
    Manrope_Bold_10_Cyan: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(10),
        color: COLORS.cyan_font
    },
    Manrope_Bold_16_Cyan: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(16),
        color: COLORS.cyan_font
    },
    Manrope_Bold_24_Cyan: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(24),
        color: COLORS.cyan_font
    },
    Manrope_Bold_24_White: {
        fontFamily: 'Manrope-Bold',
        fontSize: getFontSize(24),
        color: COLORS.white
    },
    Manrope_Medium_16: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(16)
    },
    Manrope_Medium_12: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(12)
    },

    Manrope_Medium_16_Cyan: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(16),
        color: COLORS.cyan_font
    },
    Manrope_Medium_14_Cyan: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(14),
        color: COLORS.cyan_font
    },
    Manrope_Medium_14_: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(14),
        color: COLORS.black_font
    },
    Manrope_Medium_12_Cyan: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(12),
        color: COLORS.cyan_font
    },
    Manrope_Medium_10_Cyan: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(10),
        color: COLORS.cyan_font
    },

    Manrope_Regular_14: {
        fontFamily: 'Manrope-Regular',
        fontSize: getFontSize(14),
        color: COLORS.black_font
    },





    NunitoSans_Regular_12_grey: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: getFontSize(12),
        color: COLORS.grey_font
    },
    NunitoSans_Regular_14: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: getFontSize(14),
        color: COLORS.grey_font
    },

    NunitoSans_Regular_16_cyan: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: getFontSize(14),
        color: COLORS.cyan_font
    },

    NunitoSans_Regular_16: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: getFontSize(16),
        color: COLORS.black_font
    },

});

export default FontStyle;
