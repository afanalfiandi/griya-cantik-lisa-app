import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import COLORS from "../../../consts/colors.const";
import { getFontSize } from "../../../helper/helper";
const styles = StyleSheet.create({
  //? Style modal container ==================================================

  modalContainer: {
    flex: 1,
    width: responsiveScreenWidth(100),
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal_style: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: responsiveScreenWidth(100),
    borderTopRightRadius: responsiveScreenWidth(5),
    borderTopLeftRadius: responsiveScreenWidth(5),
    backgroundColor: "white",
    borderRadius: 10,
  },

  modal_boxContainer: {
    backgroundColor: COLORS.white,
    width: responsiveScreenWidth(90),
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },

  contentContainer: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: getFontSize(35),
    width: responsiveScreenWidth(100),
  },

  kategoriBox: {
    width: responsiveScreenWidth(94),
    paddingVertical: responsiveScreenWidth(2),
    backgroundColor: "white",
    borderRadius: responsiveScreenWidth(5),
    flexDirection: "row",
    marginVertical: responsiveScreenWidth(2),
    justifyContent: "space-between",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 5,
  },
  kategoriBox_Left: {
    width: responsiveScreenWidth(22),
    justifyContent: "center",
    alignItems: "center",
  },
  ketegoriBox_Center: {
    width: responsiveScreenWidth(50),
    justifyContent: "center",
  },
  ketegoriBox_Right: {
    width: responsiveScreenWidth(13),
    padding: responsiveScreenWidth(2),
    justifyContent: "center",
    alignItems: "center",
  },
  kategoriImage: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenWidth(15),
    resizeMode: "contain",
  },
  icon_Right: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenWidth(6),
    borderTopLeftRadius: responsiveScreenWidth(2),
    borderBottomLeftRadius: responsiveScreenWidth(2),
    resizeMode: "contain",
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
});

export default styles;
