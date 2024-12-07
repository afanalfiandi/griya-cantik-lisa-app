import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import HeaderTop from "../../shared/component/Header/Header";
import ICONS from "../../shared/consts/icon.const";
import FontStyle from "../../shared/style/font.style";
import CustomTextInput from "../../shared/component/Textinput/CustomTextInput.js";
import { createRef, useEffect, useState } from "react";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { pickImage } from "./account.config.js";
import UserSessionUtils from "../../shared/utils/user-session.utils.js";
import { onUpdateProfile } from "../../shared/services/account.service.js";
import { getFontSize } from "../../shared/helper/helper.js";
export default function AccountScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [Nama, setNama] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Foto, setFoto] = useState("");
  const NamaInputRef = createRef();
  const TelephoneInputRef = createRef();

  const [userData, setUserData] = useState(null);

  const onLogout = async () => {
    AsyncStorage.clear();

    navigation.navigate("AuthenticationScreen");
    AsyncStorage.clear();
  };

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const userData = JSON.parse(await UserSessionUtils.getUserSession());

    setUserData(userData);
  };

  const onChangeValue = (key, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const onSubmitUserData = async () => {
    const customerData = JSON.parse(await UserSessionUtils.getUserSession());

    onUpdateProfile(
      customerData.customerID,
      userData.username,
      userData.password,
      userData.firstName,
      userData.lastName
    ).then(async (res) => {
      setIsLoading(true);
      if (res.message == "success") {
        setIsLoading(false);
        const data = JSON.stringify(res.data);
        await UserSessionUtils.setUserSession(data);

        Alert.alert("Update profil berhasil!");
      } else {
        setIsLoading(false);
        Alert.alert("Update profil gagal! Silahkan coba lagi");
      }
    });
  };

  const updateImg = async () => {
    const customerData = JSON.parse(await UserSessionUtils.getUserSession());

    pickImage(setFoto);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <HeaderTop title={"Akun"} />
      <View style={styles.ProfileContainer}>
        <Image
          source={Foto ? { uri: Foto } : ICONS.spesialis1}
          style={styles.fotoProfil}
        />
        <Text style={FontStyle.NunitoSans_Regular_12_grey} onPress={updateImg}>
          Ubah Profil
        </Text>
      </View>

      {userData && (
        <>
          <View>
            <Text style={FontStyle.NunitoSans_Regular_14}>Username</Text>
            <CustomTextInput
              input={userData.username}
              setInput={(value) => onChangeValue("username", value)}
              nameRef={NamaInputRef}
              placeHolder={"Username"}
            />
          </View>
          <View>
            <Text style={FontStyle.NunitoSans_Regular_14}>Nama Depan</Text>
            <CustomTextInput
              input={userData.firstName}
              setInput={(value) => onChangeValue("firstName", value)}
              nameRef={NamaInputRef}
              placeHolder={"Nama Depan"}
            />
          </View>
          <View>
            <Text style={FontStyle.NunitoSans_Regular_14}>Nama Belakang</Text>
            <CustomTextInput
              input={userData.lastName}
              setInput={(value) => onChangeValue("lastName", value)}
              nameRef={NamaInputRef}
              placeHolder={"Nama Belakang"}
            />
          </View>
          {/* 
          <View>
            <Text style={FontStyle.NunitoSans_Regular_14}>No. Telephone</Text>
            <CustomTextInput
              input={Telephone}
              setInput={setTelephone}
              nameRef={TelephoneInputRef}
              placeHolder={"Nomor Telephone"}
              keyboardType={"numeric"}
            />
          </View> */}
        </>
      )}

      <ButtonPurple
        title={isLoading ? "Loading..." : "Simpan"}
        ButtonHeight={55}
        onPress={onSubmitUserData}
      />

      <TouchableOpacity
        style={{ marginTop: 10, fontSize: getFontSize(18) }}
        onPress={onLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
