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
    contentContainer: {
        // flex: 1,
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: getFontSize(35)
    },
    TopContainer: {
        // backgroundColor: 'pink',
        width: responsiveScreenWidth(94),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveScreenHeight(2)
    },
    TopContainer_Left: {
        // backgroundColor: 'cyan',
        width: responsiveScreenWidth(80),
    },
    TopContainer_Right: {
        // backgroundColor: 'yellow',
        width: responsiveScreenWidth(8),
    },
    PalingDicariContainer: {
        marginTop: 20,
        // height: 150,
        width: responsiveScreenWidth(94),
    },
    LayananList_Horizontal: {
        width: responsiveScreenWidth(100),
        // paddingLeft: responsiveScreenWidth(3),
        // marginVertical: responsiveScreenHeight(1),
        paddingLeft: responsiveScreenWidth(3)


    },

    KategoriContainer: {
        width: responsiveScreenWidth(100),
        paddingLeft: responsiveScreenWidth(3),
        marginVertical: responsiveScreenHeight(1),
        paddingRight: responsiveScreenWidth(2),
        // backgroundColor: 'pink',
        // marginBottom: getFontSize(60),
        // paddingBottom: 50
    },
    kategoriBox: {
        width: responsiveScreenWidth(94),
        resizeMode: 'contain',
        // height: responsiveScreenWidth(35),
        marginRight: responsiveScreenWidth(3),
        backgroundColor: 'white',
        borderRadius: responsiveScreenWidth(2),
        flexDirection: 'row',
        marginVertical: responsiveScreenWidth(1.5),

        shadowColor: "rgba(27, 46, 94, 0.3)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 5,
    },
    kategoriBox_Left: {
        width: responsiveScreenWidth(30),
    },
    ketegoriBox_Center: {
        width: responsiveScreenWidth(50),
        padding: responsiveScreenWidth(3),
        justifyContent: 'center',
        // backgroundColor: 'pink'
    },
    ketegoriBox_Right: {
        width: responsiveScreenWidth(13),
        // backgroundColor: 'yellow',
        padding: responsiveScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    kategoriImage: {
        width: responsiveScreenWidth(30),
        height: responsiveScreenWidth(30),
        borderTopLeftRadius: responsiveScreenWidth(2),
        borderBottomLeftRadius: responsiveScreenWidth(2)
    },

    keterangan_Top: {
        width: responsiveScreenWidth(40),
        justifyContent: 'space-between'
    },
    keterangan_Bot: {
        width: responsiveScreenWidth(40),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonBoking: {
        width: responsiveScreenWidth(20),
        // height: responsiveScreenWidth(7),
        backgroundColor: COLORS.blue_bg,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveScreenWidth(50),
        paddingVertical: responsiveScreenWidth(2)
    },
    dot: {
        width: getFontSize(5),
        height: getFontSize(5),
        backgroundColor: COLORS.grey,
        borderRadius: getFontSize(100),
        marginHorizontal: responsiveScreenWidth(1)
    },
    minus_style: {
        borderRadius: responsiveScreenWidth(100),
        borderColor: COLORS.red,
        borderWidth: 1,
        height: responsiveScreenWidth(10),
        width: responsiveScreenWidth(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    plus_style: {
        borderRadius: responsiveScreenWidth(100),
        // borderColor: COLORS.red,
        // borderWidth: 1,
        backgroundColor: COLORS.purple,
        height: responsiveScreenWidth(10),
        width: responsiveScreenWidth(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconplus_minus: {
        width: '80%',
        height: '80%',
        tintColor: COLORS.red
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
    jenisLayananTambah_Container: {
        // backgroundColor: 'pink',
        width: responsiveScreenWidth(94),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: responsiveScreenHeight(1)
    },
    TambahStyle: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnPlus: {
        width: getFontSize(10),
        height: getFontSize(10),
        tintColor: COLORS.cyan
    },
    SpesialisListContainer: {
        marginTop: 20,
        // height: 150,
        width: responsiveScreenWidth(94),
    },
    SpesialisList_Horizontal: {
        width: responsiveScreenWidth(100),
        // paddingLeft: responsiveScreenWidth(3),
        marginBottom: responsiveScreenHeight(1),
        paddingLeft: responsiveScreenWidth(3),
        // backgroundColor: 'pink'


    },
    SpesialisStyle: {
        width: responsiveScreenWidth(22),
        // paddingLeft: responsiveScreenWidth(3),
        // backgroundColor: 'yellow',
        alignItems: 'center',
        marginRight: responsiveScreenWidth(2)
    },
    spesialisPhotos_Container: {
        height: responsiveScreenWidth(20),
        width: responsiveScreenWidth(20),
        backgroundColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: responsiveScreenWidth(2),
        borderRadius: responsiveScreenWidth(100),
        // borderColor: COLORS.grey,
        // borderWidth: 1.5,

    },
    spesialisPhotos_Style: {
        width: '100%',
        height: '100%',
        borderRadius: responsiveScreenWidth(100)
    },
    spesialisFocus: {
        height: responsiveScreenWidth(18),
        width: responsiveScreenWidth(18),
        backgroundColor: COLORS.whiteTransparent,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: responsiveScreenWidth(2),
        borderRadius: responsiveScreenWidth(100),
        position: 'absolute',
    },
    iconCheck: {
        width: responsiveScreenWidth(7),
        height: responsiveScreenWidth(7),
        tintColor: COLORS.cyan,
    },
    KategoriList_Horizontal: {
        width: responsiveScreenWidth(100),
        // paddingLeft: responsiveScreenWidth(3),
        marginBottom: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(3)


    },
    KategoriStyle: {
        width: responsiveScreenWidth(20),
        // paddingLeft: responsiveScreenWidth(3),

        backgroundColor: 'white',
        borderColor: COLORS.grey,
        borderWidth: 1.5,
        paddingVertical: responsiveScreenHeight(1.5),
        borderRadius: responsiveScreenWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: responsiveScreenWidth(2)
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
    }

});

export default styles;
