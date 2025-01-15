import { getFontSize } from "../../helper/helper";
import COLORS from "../../consts/colors.const";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: responsiveScreenHeight(18),
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  navButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  navButtonICON: {
    width: getFontSize(16),
    height: getFontSize(16),
    tintColor: COLORS.cyan,
  },
  navText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    backgroundColor: COLORS.grey_form,
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(100),
  },
  dayName: {
    fontSize: 14,
    color: "#888",
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledDate: {
    opacity: 0.9, // Gaya untuk tanggal yang di-disable
  },
  disabledText: {
    color: "#ccc", // Warna teks untuk tanggal yang di-disable
  },
  focusedDate: {
    backgroundColor: COLORS.purple, // Latar belakang untuk tanggal yang di-fokuskan
  },
  focusedText: {
    color: "white", // Warna teks untuk tanggal yang di-fokuskan
  },
});
