import React, { useEffect, useRef, useState } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from '../../library/colors_library';
import { getFontSize } from '../../helper/helper';
import FontStyle from '../../style/FontStyle';



const Layanan_Horizontal = ({ onPress, iconLayanan, labelLayanan, isFocus }) => {


    return (
        <TouchableOpacity style={{
            ...styles.LayananStyle,
            backgroundColor: isFocus ? COLORS.white : COLORS.blue_bg,
            borderWidth: isFocus ? 1 : 0,
            borderColor: isFocus ? COLORS.cyan : null,
        }} onPress={onPress} >
            <View style={[styles.LayananIcon_Container]}>
                <Image source={iconLayanan} style={styles.LayananIcon} />
            </View>
            <Text style={{
                ...styles.LayananLabel,
                width: responsiveScreenWidth(25),
                //  backgroundColor: 'yellow' 
            }} numberOfLines={2}>{labelLayanan}</Text>
        </TouchableOpacity>
    );
};

export default Layanan_Horizontal;

const styles = StyleSheet.create({
    LayananStyle: {
        backgroundColor: COLORS.blue_bg,
        width: responsiveScreenWidth(43),
        // height: responsiveScreenWidth(20),
        // minHeight: 48,
        borderRadius: responsiveScreenHeight(10),
        // borderWidth: 1.5,
        // borderColor: COLORS.grey_soft,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingLeft: responsiveScreenWidth(2),
        marginTop: 10,
        paddingVertical: responsiveScreenWidth(2),
        marginRight: responsiveScreenWidth(2)

    },

    LayananIcon_Container: {
        // backgroundColor: COLORS.pink_bg,
        width: responsiveScreenWidth(16),
        height: responsiveScreenWidth(9),
        // borderRadius: getFontSize(100),
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: responsiveScreenWidth(2),
        marginRight: responsiveScreenWidth(2)
    },
    LayananIcon: {
        width: responsiveScreenWidth(8), height: responsiveScreenWidth(8), tintColor: COLORS.cyan
    },
    LayananLabel: FontStyle.Manrope_Medium_14_Cyan,

});

