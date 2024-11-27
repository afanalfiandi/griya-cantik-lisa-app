import { StyleSheet } from "react-native";
import { getFontSize } from "../../shared/helper/helper";
import COLORS from "../../shared/consts/colors.const";
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 30,
        alignItems: "center",
        backgroundColor: "white",
        paddingBottom: getFontSize(35),
    },
    kategoriBox: {
        backgroundColor: "#fff",
        width: responsiveScreenWidth(92),
        justifyContent: "center",
        // alignItems: "center",
        marginTop: responsiveScreenWidth(4),
        borderRadius: 15,
        elevation: 2,
        paddingVertical: responsiveScreenWidth(3),
        paddingHorizontal: responsiveScreenWidth(4)
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    laynanHorizontal: {
        flexDirection: 'row',
        width: responsiveScreenWidth(84),
        marginVertical: responsiveScreenHeight(1),

    },
    LayananItem: {
        borderWidth: 1,
        borderColor: COLORS.grey,
        paddingVertical: getFontSize(5),
        paddingHorizontal: getFontSize(10),
        borderRadius: getFontSize(200),
        marginRight: responsiveScreenWidth(1.5),
        marginBottom: 1
    }
});

export default styles;
