import { StyleSheet, Dimensions, StatusBar } from "react-native";
import {
    responsiveHeight, responsiveWidth, responsiveFontSize,
    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import COLORS from "../../component/library/colors_library";
import { getFontSize } from "../../component/helper/helper";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    mid_container: {
        height: responsiveScreenHeight(95),
        width: responsiveScreenWidth(100),
        // backgroundColor: "pink",
        // justifyContent: 'flex-end',
        justifyContent: "center",
        // marginTop: responsiveHeight(10),
        alignItems: 'center'
    },

    title_container: {
        // alignItems: "center",
        marginBottom: responsiveScreenHeight(7),
        // backgroundColor: 'pink',
        width: responsiveScreenWidth(94)

    },
    form_container: {
        width: responsiveScreenWidth(100),
        // marginHorizontal: responsiveScreenWidth(5),
        alignItems: 'center'
    },

    form_style: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderRadius: responsiveScreenHeight(50),
        marginVertical: 4.5,

        borderWidth: 1,
        borderColor: "grey",
        marginBottom: 16,
        // backgroundColor: 'cyan'

    },
    icon_style: {
        width: getFontSize(16),
        height: getFontSize(16),
        tintColor: COLORS.grey_1,
    },
    icon_style_2: {
        width: 25,
        height: 25,
        tintColor: COLORS.primary,
    },
    image_container: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'grey',
    },
    input_container: {
        // backgroundColor: "yellow",
        width: "70%",
        height: "100%",
        justifyContent: "center",
    },
    input_style: {
        fontFamily: "Manrope-Regular",
        color: "black",
        fontSize: getFontSize(12),
        // backgroundColor: 'pink',
        height: 48

    },
    show_container: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: COLORS.abusoft,
        // opacity: 0.5,
    },

});

export default styles;