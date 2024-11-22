import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

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
  }
});

