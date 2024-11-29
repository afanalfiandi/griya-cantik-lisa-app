import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import FontStyle from "../../style/font.style";
import ICONS from "../../consts/icon.const";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

const HeaderTop = ({ title, route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerButtonLeft}
        onPress={() => navigation.navigate(route)}
      >
        <Image style={styles.btnImage} source={ICONS.icon_left} />
      </TouchableOpacity>
      <View style={styles.headerTitleContainer}>
        <Text style={FontStyle.Manrope_Bold_16}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderTop;
