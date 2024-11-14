import { StyleSheet } from 'react-native';
import { getFontSize } from '../../shared/helper/helper';
import COLORS from '../../shared/enum/colors_library';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 30,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    image_bg: {
        flex: 1,
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        // justifyContent: "center",
        alignItems: "center",

    },
    contentContainer: {
        backgroundColor: COLORS.blackTransparent,
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(100),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    content: {
        // backgroundColor: COLORS.blackTransparent,
        width: responsiveScreenWidth(94),
        height: responsiveScreenHeight(50),

        alignItems: 'center',
        justifyContent: 'center'

    },
    headerStyle: {
        // backgroundColor: 'pink',
        width: responsiveScreenWidth(94),
        height: responsiveScreenHeight(18),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: responsiveScreenHeight(3),
        marginBottom: responsiveScreenHeight(4)
    }


});

export default styles;
