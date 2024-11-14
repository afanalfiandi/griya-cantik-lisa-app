import React, { useEffect, useRef, useState } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, StyleSheet, Animated } from 'react-native';
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from '../../enum/colors_library';
import { getFontSize } from '../../helper/helper';
import FontStyle from '../../style/FontStyle';
import ICONS from '../../enum/icon_library';
import { useNavigation } from '@react-navigation/native';

const HeaderTop = ({ title, NavigateTo }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.headerButtonLeft} onPress={() => navigation.navigate(NavigateTo ? NavigateTo : 'Home_Screen')}>
                <Image style={styles.btnImage} source={ICONS.icon_left} />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
                <Text style={FontStyle.Manrope_Bold_16}>{title}</Text>
            </View>
        </View>
    );
};

export default HeaderTop;

const styles = StyleSheet.create({
    //header custom container style
    headerContainer: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(8),
        flexDirection: 'row',
        alignItems: 'center',


        elevation: 4,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    headerButtonLeft: {
        // backgroundColor: 'pink',
        width: responsiveScreenWidth(15),
        // height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitleContainer: {
        // backgroundColor: 'yellow',
        width: responsiveScreenWidth(70),
        // height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnImage: {
        width: responsiveScreenWidth(7),
        height: responsiveScreenWidth(7),
        tintColor: COLORS.cyan
    },

});

