import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import FontStyle from "../../shared/style/font.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import UserSessionUtils from "../../shared/utils/user-session.utils";

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navig();
  }, []);

  const navig = async () => {
    setTimeout(async () => {
      const loggedIn = await UserSessionUtils.getUserSession();
      if (!!loggedIn) {
        navigation.navigate("HomeScreen");
      } else {
        navigation.navigate("AuthenticationScreen");
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <Text style={FontStyle.Manrope_Bold_24_White}>Griya Cantik Lisa</Text>
    </View>
  );
}
