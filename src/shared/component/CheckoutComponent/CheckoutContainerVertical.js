import React, { useEffect, useRef, useState } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from '../../enum/colors_library';
import { getFontSize } from '../../helper/helper';
import FontStyle from '../../style/FontStyle';

const CheckoutContainerVertical = ({ label, title, paddingLeft, }) => {

    return (
        <View style={{
            ...styles.rowSolid,
            paddingLeft: responsiveScreenWidth(paddingLeft ? paddingLeft : 0)
        }}>
            <Text style={FontStyle.NunitoSans_Regular_14}>{title}</Text>
            <Text style={{ ...FontStyle.Manrope_Bold_14_Cyan, marginTop: getFontSize(7) }}>{label}</Text>
        </View>
    );
};

export default CheckoutContainerVertical;

const styles = StyleSheet.create({
    rowSolid: {
        // backgroundColor: 'red',
        width: responsiveScreenWidth(40),
        paddingVertical: responsiveScreenWidth(3),
        justifyContent: 'center',
    },

});

