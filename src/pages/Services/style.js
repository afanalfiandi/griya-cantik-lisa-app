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
    alignItems: "center",
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: getFontSize(35),
  },
  TopContainer: {
    width: responsiveScreenWidth(94),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: responsiveScreenHeight(2),
  },
  TopContainer_Left: {
    width: responsiveScreenWidth(80),
  },
  TopContainer_Right: {
    width: responsiveScreenWidth(8),
  },
  PalingDicariContainer: {
    marginTop: 20,
    width: responsiveScreenWidth(94),
  },
  LayananList_Horizontal: {
    width: responsiveScreenWidth(100),
    paddingLeft: responsiveScreenWidth(3),
  },

  KategoriContainer: {
    width: responsiveScreenWidth(100),
    paddingLeft: responsiveScreenWidth(3),
    marginVertical: responsiveScreenHeight(1),
    paddingRight: responsiveScreenWidth(2),
  },
  kategoriBox: {
    width: responsiveScreenWidth(94),
    resizeMode: "contain",
    marginRight: responsiveScreenWidth(3),
    backgroundColor: "white",
    borderRadius: responsiveScreenWidth(2),
    flexDirection: "row",
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
    justifyContent: "center",
  },
  ketegoriBox_Right: {
    width: responsiveScreenWidth(13),
    padding: responsiveScreenWidth(2),
    justifyContent: "center",
    alignItems: "center",
  },
  kategoriImage: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenWidth(30),
    borderTopLeftRadius: responsiveScreenWidth(2),
    borderBottomLeftRadius: responsiveScreenWidth(2),
  },
  keterangan_Top: {
    width: responsiveScreenWidth(40),
    justifyContent: "space-between",
  },
  keterangan_Bot: {
    width: responsiveScreenWidth(40),
    flexDirection: "row",
    alignItems: "center",
  },
  buttonBoking: {
    width: responsiveScreenWidth(20),
    backgroundColor: COLORS.blue_bg,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveScreenWidth(50),
    paddingVertical: responsiveScreenWidth(2),
  },
  dot: {
    width: getFontSize(5),
    height: getFontSize(5),
    backgroundColor: COLORS.grey,
    borderRadius: getFontSize(100),
    marginHorizontal: responsiveScreenWidth(1),
  },
  minus_style: {
    borderRadius: responsiveScreenWidth(100),
    borderColor: COLORS.red,
    borderWidth: 1,
    height: responsiveScreenWidth(10),
    width: responsiveScreenWidth(10),
    justifyContent: "center",
    alignItems: "center",
  },
  plus_style: {
    borderRadius: responsiveScreenWidth(100),
    backgroundColor: COLORS.purple,
    height: responsiveScreenWidth(10),
    width: responsiveScreenWidth(10),
    justifyContent: "center",
    alignItems: "center",
  },
  iconplus_minus: {
    width: "80%",
    height: "80%",
    tintColor: COLORS.red,
  },
  //header custom container style
  headerContainer: {
    backgroundColor: "white",
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerButtonLeft: {
    width: responsiveScreenWidth(15),
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: {
    width: responsiveScreenWidth(70),
    alignItems: "center",
    justifyContent: "center",
  },
  btnImage: {
    width: responsiveScreenWidth(7),
    height: responsiveScreenWidth(7),
    tintColor: COLORS.cyan,
  },
  jenisLayananTambah_Container: {
    width: responsiveScreenWidth(94),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: responsiveScreenHeight(1),
  },
  TambahStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnPlus: {
    width: getFontSize(10),
    height: getFontSize(10),
    tintColor: COLORS.cyan,
  },
  SpesialisListContainer: {
    marginTop: 20,
    width: responsiveScreenWidth(94),
  },
  SpesialisList_Horizontal: {
    width: responsiveScreenWidth(100),
    marginBottom: responsiveScreenHeight(1),
    paddingLeft: responsiveScreenWidth(3),
  },
  SpesialisStyle: {
    width: responsiveScreenWidth(22),
    alignItems: "center",
    marginRight: responsiveScreenWidth(2),
  },
  spesialisPhotos_Container: {
    height: responsiveScreenWidth(20),
    width: responsiveScreenWidth(20),
    backgroundColor: "white",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveScreenWidth(100),
  },
  spesialisPhotos_Style: {
    width: "100%",
    height: "100%",
    borderRadius: responsiveScreenWidth(100),
  },
  spesialisFocus: {
    height: responsiveScreenWidth(18),
    width: responsiveScreenWidth(18),
    backgroundColor: COLORS.whiteTransparent,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveScreenWidth(100),
    position: "absolute",
  },
  iconCheck: {
    width: responsiveScreenWidth(7),
    height: responsiveScreenWidth(7),
    tintColor: COLORS.cyan,
  },
  KategoriList_Horizontal: {
    width: responsiveScreenWidth(100),
    marginBottom: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(3),
  },
  KategoriStyle: {
    width: responsiveScreenWidth(20),
    backgroundColor: "white",
    borderColor: COLORS.grey,
    borderWidth: 1.5,
    paddingVertical: responsiveScreenHeight(1.5),
    borderRadius: responsiveScreenWidth(100),
    justifyContent: "center",
    alignItems: "center",
    marginRight: responsiveScreenWidth(2),
  },
  FloatingBottomContainer: {
    backgroundColor: "white",
    width: responsiveScreenWidth(100),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveScreenWidth(3),
    paddingTop: responsiveScreenHeight(2),
    paddingBottom: responsiveScreenHeight(4),
  },
  FloatingBottomLeft: {
    width: responsiveScreenWidth(40),
    justifyContent: "center",
  },
  FloatingBottomRight: {
    width: responsiveScreenWidth(53),
    justifyContent: "center",
    alignItems: "center",
  },
  noDataContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(80),
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center'
  },
  noDataStyle: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenWidth(70),
    resizeMode: 'contain',
    marginBottom: 20
  }
});

export default styles;
