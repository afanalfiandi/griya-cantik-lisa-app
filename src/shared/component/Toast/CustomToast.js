import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ICONS from "../../consts/icon.const";
import { getFontSize } from "../../helper/helper";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";

export const CustomToast = (toast, message) => {

    toast.show(message, {
        type: "warning",
        placement: "bottom",
        duration: 4000,
        offset: 70,
        animationType: "zoom-in",
        renderToast: (toast) => (
            <View style={styles.toastContainer}>

                <Text style={styles.toastText}>{toast.message}</Text>
            </View>
        ),
    });
};

const styles = StyleSheet.create({
    toastContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#333", // Warna latar belakang.
        padding: getFontSize(15),
        borderRadius: 300,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: responsiveScreenHeight(2),

    },
    icon: {
        marginRight: 10,
        width: getFontSize(20),
        height: getFontSize(20),
        tintColor: 'white'
    },
    toastText: {
        color: "white",
        fontSize: getFontSize(12),
        fontFamily: 'Manrope-Regular'
    },
});
