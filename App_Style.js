import { StyleSheet, Text, View, PixelRatio, Image } from 'react-native';
import { getFontSize } from './src/component/helper/helper';
import COLORS from './src/component/library/colors_library';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonicon: {
        alignItems: "center",
        // backgroundColor: 'pink',
        justifyContent: 'center',
        bottom: getFontSize(5)

    },
    bgbtnicon: {
        alignItems: "center",
        justifyContent: 'center',
        // backgroundColor: COLORS.purple,
        // width: responsiveScreenWidth(15),
        // paddingHorizontal: getFontSize(12),
        // paddingVertical: getFontSize(3),
        alignItems: 'center',
        // borderRadius: getFontSize(10)

    },
    iconStyle:
    {
        alignItems: "center",
        justifyContent: 'center',
        width: getFontSize(22),
        height: getFontSize(22),

    },
    dotStyle:
    {
        backgroundColor: COLORS.purple,
        width: getFontSize(5),
        height: getFontSize(5),
        borderRadius: getFontSize(10),
        marginTop: getFontSize(5)

    },

    tabBar_Style:
    {
        backgroundColor: "#fff",
        // opacity: 0.9,
        // position: "absolute",
        // bottom: 15,
        // marginHorizontal: 20,
        elevation: 5,
        // borderRadius: 15,
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        borderTopWidth: 1,
        borderTopColor: "#FAFAFA",
        height: getFontSize(70),

        // ...styles.shadow,
    }
});

export default styles;
