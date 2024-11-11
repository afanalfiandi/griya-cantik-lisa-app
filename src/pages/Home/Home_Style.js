import { StyleSheet } from 'react-native';
import { getFontSize } from '../../component/helper/helper';
import COLORS from '../../component/library/colors_library';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 30
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
    icon_Heart_style: {
        width: responsiveScreenWidth(6),
        height: responsiveScreenWidth(6),
        tintColor: COLORS.purple,
        marginTop: getFontSize(3)
    },

    //Card Style
    CardContainer: {
        // backgroundColor: 'pink',
        // height: 150,
        width: responsiveScreenWidth(100),
        paddingLeft: responsiveScreenWidth(3),
        marginVertical: responsiveScreenHeight(1)
    },
    CardStyle: {
        width: responsiveScreenWidth(90),
        resizeMode: 'contain',
        height: 150,
        marginRight: responsiveScreenWidth(3)
    },

    //Layanan Style
    LayananContainer: {
        width: responsiveScreenWidth(94),
    },
    LayananList: {
        width: responsiveScreenWidth(94),
        marginTop: getFontSize(10),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'

    },
    PalingDicariContainer: {
        marginTop: 20,
        // height: 150,
        width: responsiveScreenWidth(94),
    },
    LayananList_Horizontal: {
        width: responsiveScreenWidth(100),
        // paddingLeft: responsiveScreenWidth(3),
        marginVertical: responsiveScreenHeight(1),
        paddingRight: responsiveScreenWidth(3)


    },
    KategoriContainer: {
        width: responsiveScreenWidth(100),
        paddingLeft: responsiveScreenWidth(3),
        marginVertical: responsiveScreenHeight(2),
        paddingRight: responsiveScreenWidth(2),
        // backgroundColor: 'pink'
    },
    kategoriBox: {
        width: responsiveScreenWidth(90),
        resizeMode: 'contain',
        height: responsiveScreenWidth(35),
        marginRight: responsiveScreenWidth(3),
        backgroundColor: 'white',
        borderRadius: responsiveScreenWidth(2),
        flexDirection: 'row',

        shadowColor: "rgba(27, 46, 94, 0.3)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 3,
        shadowRadius: 2,
        elevation: 5,
    },
    kategoriBox_Left: {
        width: responsiveScreenWidth(35),
        resizeMode: 'contain',
        // height: 150,
        // marginRight: responsiveScreenWidth(3),
        // backgroundColor: 'yellow'
    },
    ketegoriBox_Right: {
        width: responsiveScreenWidth(55),
        resizeMode: 'contain',
        // height: 150,
        marginRight: responsiveScreenWidth(3),
        // backgroundColor: 'yellow',
        padding: responsiveScreenWidth(2)
    },
    kategoriImage: {
        width: responsiveScreenWidth(35),
        height: responsiveScreenWidth(35),
        borderTopLeftRadius: responsiveScreenWidth(2),
        borderBottomLeftRadius: responsiveScreenWidth(2)

    },
    likeContainer: {
        width: responsiveScreenWidth(8),
        height: responsiveScreenWidth(8),
        backgroundColor: COLORS.pink_bg,
        position: 'absolute',
        top: responsiveScreenWidth(2),
        left: responsiveScreenWidth(2),
        borderRadius: responsiveScreenWidth(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    keterangan_Top: {
        width: responsiveScreenWidth(51),
        resizeMode: 'contain',
        height: responsiveScreenWidth(21),
        // marginRight: responsiveScreenWidth(3),
        // backgroundColor: 'yellow'
    },
    keterangan_Bot: {
        width: responsiveScreenWidth(51),
        resizeMode: 'contain',
        height: responsiveScreenWidth(10),
        // marginRight: responsiveScreenWidth(3),
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    }

});

export default styles;
