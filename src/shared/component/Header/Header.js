import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import FontStyle from "../../style/font.style";
import ICONS from "../../consts/icon.const";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

const HeaderTop = ({ title, route, showButton =true }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
     {showButton ? (
       <TouchableOpacity
       style={styles.headerButtonLeft}
       onPress={() => navigation.navigate(route)}
     >
       <Image style={styles.btnImage} source={ICONS.icon_left} />
     </TouchableOpacity>
     ): (
      <View style={styles.headerButtonLeft}></View>
     )}
      <View style={styles.headerTitleContainer}>
        <Text style={FontStyle.Manrope_Bold_16}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderTop;
