import { Text, View, StatusBar, SafeAreaView, Alert } from "react-native";
import React, { useState, createRef } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./style.js";
import ICONS from "../../shared/consts/icon.const.js";
import ButtonPurple from "../../shared/component/Button/ButtonPurple.js";
import CustomTextInput from "../../shared/component/Textinput/CustomTextInput.js";
import FontStyle from "../../shared/style/font.style.js";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { authService } from "./service.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserSessionUtils from "../../shared/utils/user-session.utils.js";

const AuthenticationScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userNameInputRef = createRef();
  const userPasswordInputRef = createRef();
  const [isLoading, setIsLoading] = useState(false);

  const onAuth = async () => {
    setIsLoading(true);
    const payload = { username, password };

    try {
      const result = await authService(payload);

      if (result) {
        setIsLoading(false);
        if (result.status == "success") {
          const data = JSON.stringify(result.data);
          await UserSessionUtils.setUserSession(data);

          navigation.navigate("HomeScreen");
        } else {
          Alert.alert("Username atau kata sandi salah");
        }
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Terjadi kesalahan pada server");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />
        <View style={styles.mid_container}>
          <View style={styles.title_container}>
            <Text style={FontStyle.Manrope_Bold_24}>Selamat Datang,</Text>
            <Text style={FontStyle.NunitoSans_Regular_14}>
              Login dan nikmati kemudahan merencanakan perawatan sesuai
              kebutuhan Anda
            </Text>
          </View>
          <View style={styles.form_container}>
            <CustomTextInput
              iconForm={ICONS.icon_username}
              nameRef={userNameInputRef}
              placeHolder={"Username"}
              input={username}
              setInput={setUsername}
            />

            <CustomTextInput
              iconForm={ICONS.icon_lock}
              isSecureForm={true}
              nameRef={userPasswordInputRef}
              placeHolder={"Kata Sandi"}
              input={password}
              setInput={setPassword}
            />

            <ButtonPurple
              ButtonHeight={60}
              title={isLoading ? "Loading..." : "Masuk"}
              ButtonMarginTop={responsiveScreenHeight(20)}
              onPress={onAuth}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthenticationScreen;
