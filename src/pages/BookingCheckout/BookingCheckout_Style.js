import { StyleSheet } from 'react-native';
import { getFontSize } from '../../shared/helper/helper';
import COLORS from '../../shared/enum/colors_library';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        // paddingBottom: getFontSize(35)
    },
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
    contentContainer: {
        alignItems: 'center',
        // backgroundColor: 'pink',
        paddingVertical: 10
    },

    FloatingBottomContainer: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(100),
        // height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingTop: responsiveScreenHeight(2),
        paddingBottom: responsiveScreenHeight(4)
    },
    FloatingBottomLeft: {
        // backgroundColor: 'yellow',
        width: responsiveScreenWidth(40),
        // height: 100,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    FloatingBottomRight: {
        // backgroundColor: 'cyan',
        width: responsiveScreenWidth(53),
        // height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },


    checkoutBox: {
        backgroundColor: COLORS.blue_bg,
        width: responsiveScreenWidth(94),
        // height: responsiveScreenHeight(60),
        borderRadius: responsiveScreenWidth(5),
        // borderTopRightRadius: responsiveScreenWidth(50),
        // borderTopLeftRadius: responsiveScreenWidth(50),
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveScreenWidth(5)
    },
    checkoutBox_Content: {
        // backgroundColor: 'yellow',
        width: responsiveScreenWidth(94),
        borderRadius: responsiveScreenWidth(5),
        alignItems: 'center'
    },

    row: {
        // backgroundColor: 'grey',
        width: responsiveScreenWidth(80),
        // height: responsiveScreenHeight(5),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    Pembayaran: {
        borderColor: COLORS.cyan,
        borderWidth: 1,
        width: responsiveScreenWidth(80),
        // height: 100,
        borderRadius: responsiveScreenWidth(50),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'white'
    },
    PembayaranImg: {
        width: responsiveScreenWidth(20),
        height: 80,
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    pembayaranDetail: {
        width: responsiveScreenWidth(35),
        // height: 80,
        // backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    pembayaranSalin: {
        width: responsiveScreenWidth(16),
        // height: 80,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    payImgStyle: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    }


});

export default styles;
