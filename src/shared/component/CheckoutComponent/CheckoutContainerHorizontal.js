import React, { useEffect, useRef, useState } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from '../../enum/colors_library';
import { getFontSize } from '../../helper/helper';
import FontStyle from '../../style/FontStyle';

const CheckoutContainerHorizontal = ({ label, title, paddingLeft, }) => {

    return (
        <View style={styles.row2}>
            <Text style={FontStyle.Manrope_Bold_14}>{title}t</Text>
            <Text style={FontStyle.Manrope_Bold_14_Cyan}>{label}</Text>
        </View>
    );
};

export default CheckoutContainerHorizontal;

const styles = StyleSheet.create({
    row2: {
        // backgroundColor: 'pink',
        width: responsiveScreenWidth(80),
        // height: responsiveScreenHeight(5),
        paddingVertical: responsiveScreenHeight(1),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

});

