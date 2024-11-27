import { StyleSheet } from "react-native";
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
    height: responsiveScreenHeight(90),
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
  modal_boxContainer_Top: {
    width: responsiveScreenWidth(100),
    marginBottom: 10,
  },
  modal_boxContainer_Bottom: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    alignItems: "center",
  },
  modal_boxContainer_Center: {
    width: responsiveScreenWidth(94),
  },
  imageDetail: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenWidth(100),
    borderRadius: responsiveScreenWidth(5),
  },
  detailTop: {
    height: responsiveScreenHeight(12),
    justifyContent: "space-between",
  },

  iconjam_Style: {
    width: getFontSize(15),
    height: getFontSize(15),
    tintColor: COLORS.grey_font,
    marginRight: getFontSize(5),
  },
  durasiContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  HR_Style: {
    width: responsiveScreenWidth(94),
    height: 1,
    backgroundColor: COLORS.grey2,
    marginVertical: responsiveScreenHeight(2),
  },
  treatmentContainer: {
    height: responsiveScreenHeight(8),
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: responsiveScreenHeight(2),
    position: "absolute",
    bottom: 10,
    width: responsiveScreenWidth(100),
  },
  indicator: {
    width: getFontSize(7),
    height: getFontSize(7),
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: COLORS.purple,
    width: getFontSize(20),
  },
  inactiveIndicator: {
    backgroundColor: COLORS.grey2,
  },
  closeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",

    position: "absolute",
    top: 10,
    width: responsiveScreenWidth(100),
    paddingHorizontal: 5
  },
  btnClose: {
    height: getFontSize(30),
    width: getFontSize(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blackTransparent,
    borderRadius: 200
  },
  iconSilang: {
    width: '70%',
    height: '70%',
    tintColor: COLORS.white
  }
});

export default styles;
