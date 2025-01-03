import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import COLORS from "../../consts/colors.const";
import { getFontSize } from "../../helper/helper";
import ICONS from "../../consts/icon.const";

const CustomTextInput = ({
  input,
  setInput,
  placeHolder,
  keyboardType,
  nameRef,
  ContainerWidth,
  ContainerPaddingHorizontal,
  ContainerPaddingLeft,
  ContainerPaddingRight,
  isSecureForm,
  formHeight,
  maxLength,
  iconForm,
  borderRadius,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.form_style,
        isFocused || input ? styles.inputFocused : null,
        {
          width: responsiveScreenWidth(ContainerWidth ? ContainerWidth : 94),
          paddingHorizontal: responsiveScreenWidth(
            ContainerPaddingHorizontal ? ContainerPaddingHorizontal : 0
          ),
          paddingVertical: responsiveScreenHeight(1),
          paddingLeft: responsiveScreenWidth(
            ContainerPaddingLeft ? ContainerPaddingLeft : 0
          ),
          paddingRight: responsiveScreenWidth(
            ContainerPaddingRight ? ContainerPaddingRight : 0
          ),
          height: formHeight ? formHeight : 60,
          borderRadius: borderRadius
            ? responsiveScreenHeight(borderRadius)
            : responsiveScreenHeight(50),
        },
      ]}
    >
      {iconForm && (
        <View style={styles.image_container}>
          <Image
            style={{
              ...styles.icon_style,
              tintColor: isFocused || input ? COLORS.purple : COLORS.grey,
            }}
            source={iconForm}
          />
        </View>
      )}
      <View
        style={[
          styles.input_container,
          {
            width: isSecureForm ? "70%" : "80%",
          },
        ]}
      >
        <TextInput
          style={{
            ...styles.inputStyle,
            paddingLeft: 10,
          }}
          placeholder={placeHolder ? placeHolder : "Setting Placeholder"}
          secureTextEntry={isSecureForm ? isSecureEntry : null}
          // multiline
          placeholderTextColor={COLORS.grey_font_form}
          value={input}
          onChangeText={setInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          cursorColor={"black"}
          ref={nameRef}
          keyboardType={keyboardType ? keyboardType : "default"}
          maxLength={maxLength}
        />
      </View>

      {isSecureForm == true && (
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}
          style={styles.show_container}
        >
          <Image
            style={{
              ...styles.icon_style,
              tintColor: isFocused || input ? COLORS.purple : COLORS.grey,
            }}
            source={isSecureEntry ? ICONS.icon_eye1 : ICONS.icon_eye2}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 12,
  },
  form_style: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 4.5,
    marginBottom: 16,
    backgroundColor: COLORS.grey_form,
  },
  inputStyle: {
    fontFamily: "Manrope-Medium",
    fontSize: getFontSize(14),
    color: COLORS.cyan,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: COLORS.cyan,
    backgroundColor: "white",
    color: COLORS.cyan,
  },
  image_container: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "2%",
  },
  icon_style: {
    width: getFontSize(16),
    height: getFontSize(16),
    tintColor: COLORS.purple,
  },
  input_container: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
  },
  show_container: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTextInput;
