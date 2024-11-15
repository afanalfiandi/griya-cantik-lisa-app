import { StyleSheet, Text, View, PixelRatio, Image } from "react-native";
import { getFontSize } from "../helper/helper";
import COLORS from "../enum/colors_library";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonicon: {
    alignItems: "center",
    justifyContent: "center",
    bottom: getFontSize(5),
  },
  bgbtnicon: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: getFontSize(22),
    height: getFontSize(22),
  },
  dotStyle: {
    backgroundColor: COLORS.purple,
    width: getFontSize(5),
    height: getFontSize(5),
    borderRadius: getFontSize(10),
    marginTop: getFontSize(5),
  },
  tabBar_Style: {
    backgroundColor: "#fff",
    elevation: 5,
    borderTopWidth: 1,
    borderTopColor: "#FAFAFA",
    height: getFontSize(70),
  },
});

export default globalStyle;
