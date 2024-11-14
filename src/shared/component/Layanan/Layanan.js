import React, { useEffect, useRef, useState } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from '../../enum/colors_library';
import { getFontSize } from '../../helper/helper';
import FontStyle from '../../style/FontStyle';



const Layanan = ({ onPress, iconLayanan, labelLayanan, }) => {


    return (
        <TouchableOpacity style={styles.LayananStyle}
            onPress={onPress}
        >
            <View style={[styles.LayananIcon_Container]}>
                <Image source={iconLayanan} style={styles.LayananIcon} />

            </View>
            <Text style={{ ...styles.LayananLabel, textAlign: 'center' }} numberOfLines={2}>{labelLayanan}</Text>


        </TouchableOpacity>
    );
};

export default Layanan;

const styles = StyleSheet.create({
    LayananStyle: {
        // backgroundColor: 'yellow',
        width: responsiveScreenWidth(20),
        // height: responsiveScreenWidth(20),
        minHeight: 48,
        // borderRadius: responsiveScreenHeight(70),
        // borderWidth: 1.5,
        // borderColor: COLORS.grey_soft,
        // justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        // paddingLeft: responsiveScreenWidth(2),
        marginTop: 10,

    },

    LayananIcon_Container: {
        backgroundColor: COLORS.blue_bg,
        width: responsiveScreenWidth(16.5),
        height: responsiveScreenWidth(16.5),
        borderRadius: getFontSize(100),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3

    },
    LayananIcon: {
        width: '60%', height: '60%', tintColor: COLORS.grey_icon
    },
    LayananLabel: FontStyle.Manrope_Medium_14_Cyan,

});

