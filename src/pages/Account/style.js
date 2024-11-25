import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { getFontSize } from "../../shared/helper/helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
  ProfileContainer: {
    // backgroundColor: 'pink',
    alignItems: 'center',
    width: responsiveScreenWidth(90),
    paddingVertical: responsiveScreenHeight(3)
  },
  fotoProfil: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenWidth(25),
    marginBottom: responsiveScreenHeight(2),
    borderRadius: responsiveScreenWidth(100)
  },
  toastContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333", // Warna latar belakang.
    padding: 10,
    borderRadius: 300,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 50,

  },
  icon: {
    marginRight: 10,
    width: getFontSize(20),
    height: getFontSize(20),
    tintColor: 'white'
  },
  toastText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

