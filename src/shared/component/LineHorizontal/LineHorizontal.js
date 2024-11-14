import React, { useEffect, useRef, useState } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from '../../enum/colors_library';
import { getFontSize } from '../../helper/helper';
import FontStyle from '../../style/FontStyle';

const LineHorizontal = ({ isSolid, width, isRounded, marginVertical, height }) => {

    return (
        <View style={{
            ...styles.paddingContainer,
            marginVertical: responsiveScreenHeight(marginVertical ? marginVertical : 0),
            height: responsiveScreenHeight(height ? height : 2)
        }}>
            <View style={{ ...styles.paddingLeft, backgroundColor: isRounded ? 'white' : 'transparent' }} />
            <View style={{
                ...styles.paddingCenter,
                borderStyle: isSolid ? 'solid' : 'dashed'
            }} />
            <View style={{ ...styles.paddingRight, backgroundColor: isRounded ? 'white' : 'transparent' }} />
        </View>
    );
};

export default LineHorizontal;

const styles = StyleSheet.create({
    paddingContainer: {
        backgroundColor: COLORS.blue_bg,
        width: responsiveScreenWidth(94),
        // height: responsiveScreenHeight(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    paddingLeft: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(5),
        height: '100%',
        borderTopRightRadius: responsiveScreenWidth(50),
        borderBottomRightRadius: responsiveScreenWidth(50)
    },
    paddingCenter: {
        // backgroundColor: 'grey',
        width: responsiveScreenWidth(80),
        height: 1,
        borderWidth: 1,
        borderColor: COLORS.grey2, // warna garis
    },
    paddingRight: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(5),
        height: '100%',
        borderTopLeftRadius: responsiveScreenWidth(50),
        borderBottomLeftRadius: responsiveScreenWidth(50)
    },

});

