import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import COLORS from "../library/colors_library";
import { getFontSize } from "../helper/helper";

const ButtonPurple = ({ onPress, title, ButtonWidth, ButtonHeight, BorderRadius, Button,
    ButtonMarginVertical, ButtonMarginHorizontal, ButtonMarginTop,
    ButtonMarginBottom, ButtonMarginLeft, ButtonMarginRight,
}) => {
    return (
        <TouchableOpacity style={[styles.btn, {
            width: ButtonWidth ? responsiveScreenWidth(ButtonWidth) : responsiveScreenWidth(94),
            height: ButtonHeight ? ButtonHeight : 50,
            marginVertical: ButtonMarginVertical,
            marginHorizontal: ButtonMarginHorizontal,
            marginTop: ButtonMarginTop,
            marginBottom: ButtonMarginBottom,


            // shadowColor: "#000",
            // shadowOffset: { width: 0, height: 4 },
            // shadowOpacity: 1,
            // shadowRadius: 1,
            // elevation: 1,

        }]} onPress={onPress}>

            <Text style={styles.btnTitle}>{title ? title : 'Button'}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        // width: responsiveScreenWidth(76),
        // marginVertical: responsiveScreenHeight(1),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveScreenWidth(100),
        flexDirection: 'row',
        backgroundColor: COLORS.purple,
        minHeight: 48
    },

    btnTitle: {
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(16),
        color: COLORS.white,
        // textTransform: 'uppercase'
        // marginRight: responsiveScreenWidth(2)
    },
});

export default ButtonPurple;
