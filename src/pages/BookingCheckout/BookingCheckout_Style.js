import { StyleSheet } from 'react-native';
import { getFontSize } from '../../component/helper/helper';
import COLORS from '../../component/library/colors_library';
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
        // flex: 1,
        // marginTop: 15,
        alignItems: 'center',
        backgroundColor: 'pink',
        // paddingBottom: getFontSize(35),
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
        height: responsiveScreenHeight(60),
        borderRadius: responsiveScreenWidth(5),
        // borderTopRightRadius: responsiveScreenWidth(50),
        // borderTopLeftRadius: responsiveScreenWidth(50),
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    checkoutBox_Content: {
        backgroundColor: 'yellow',
        width: responsiveScreenWidth(94),
        // height: responsiveScreenHeight(20),
        borderRadius: responsiveScreenWidth(5),
        // borderTopRightRadius: responsiveScreenWidth(50),
        // borderTopLeftRadius: responsiveScreenWidth(50),
        alignItems: 'center'

    },
    paddingContainer: {
        backgroundColor: COLORS.blue_bg,
        width: responsiveScreenWidth(94),
        height: responsiveScreenHeight(5),
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
        borderStyle: 'dashed', // garis putus-putus
    },
    paddingRight: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(5),
        height: '100%',
        borderTopLeftRadius: responsiveScreenWidth(50),
        borderBottomLeftRadius: responsiveScreenWidth(50)
    },
    row: {
        backgroundColor: 'grey',
        width: responsiveScreenWidth(80),
        // height: responsiveScreenHeight(5),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    rowSolid: {
        backgroundColor: 'red',
        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2: {
        backgroundColor: 'pink',
        width: responsiveScreenWidth(80),
        height: responsiveScreenHeight(5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },



});

export default styles;
