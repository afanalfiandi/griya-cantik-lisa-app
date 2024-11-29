import React from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import COLORS from "../../consts/colors.const";
import FontStyle from "../../style/font.style";
import { SERVICE_CATEGORY_MEDIA_BASE_URL } from "../../consts/base-url.const";

const Layanan_Horizontal = ({
  onPress,
  iconLayanan,
  labelLayanan,
  isFocus,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.LayananStyle,
        backgroundColor: isFocus ? COLORS.white : COLORS.blue_bg,
        borderWidth: isFocus ? 1 : 0,
        borderColor: isFocus ? COLORS.cyan : null,
      }}
      onPress={onPress}
    >
      <View style={[styles.LayananIcon_Container]}>
        <Image
          source={{
            uri: `${SERVICE_CATEGORY_MEDIA_BASE_URL}${iconLayanan}`,
          }}
          style={styles.LayananIcon}
        />
      </View>
      <Text
        style={{
          ...styles.LayananLabel,
          width: responsiveScreenWidth(25),
        }}
        numberOfLines={2}
      >
        {labelLayanan}
      </Text>
    </TouchableOpacity>
  );
};

export default Layanan_Horizontal;

const styles = StyleSheet.create({
  LayananStyle: {
    backgroundColor: COLORS.blue_bg,
    width: responsiveScreenWidth(43),
    borderRadius: responsiveScreenHeight(10),
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: responsiveScreenWidth(2),
    marginRight: responsiveScreenWidth(2),
  },
  LayananIcon_Container: {
    width: responsiveScreenWidth(16),
    height: responsiveScreenWidth(9),
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: responsiveScreenWidth(2),
    marginRight: responsiveScreenWidth(2),
  },
  LayananIcon: {
    width: responsiveScreenWidth(8),
    height: responsiveScreenWidth(8),
    tintColor: COLORS.cyan,
  },
  LayananLabel: FontStyle.Manrope_Medium_14_Cyan,
});
