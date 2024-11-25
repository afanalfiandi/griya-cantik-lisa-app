import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Button, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { styles } from "./style";
import HeaderTop from "../../shared/component/Header/Header";
import ICONS from "../../shared/consts/icon.const";
import FontStyle from "../../shared/style/font.style";
import CustomTextInput from "../../shared/component/Textinput/CustomTextInput.js";
import { createRef, useState } from "react";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { pickImage } from "./account.config.js";
import { useToast } from "react-native-toast-notifications";
import { CustomToast } from "../../shared/component/Toast/CustomToast.js";
export default function AccountScreen() {
  const toast = useToast();
  const navigation = useNavigation();
  const [Nama, setNama] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Foto, setFoto] = useState("");
  const NamaInputRef = createRef();
  const TelephoneInputRef = createRef();
  const Keluar = async () => {
    AsyncStorage.clear();

    navigation.navigate("AuthenticationScreen");
    AsyncStorage.clear();
  };

  const handleToast = () => {
    CustomToast(toast, 'Berhasil di tambahkan');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <HeaderTop title={"Akun"} />
      <View style={styles.ProfileContainer}>
        <Image source={Foto ? { uri: Foto } : ICONS.spesialis1} style={styles.fotoProfil} />
        <Text style={FontStyle.NunitoSans_Regular_12_grey} onPress={() => pickImage(setFoto)}>Ubah Profil</Text>

      </View>

      <View>
        <Text style={FontStyle.NunitoSans_Regular_14}>Nama</Text>
        <CustomTextInput input={Nama} setInput={setNama} nameRef={NamaInputRef} placeHolder={'Nama Lengkap'} />
      </View>

      <View>
        <Text style={FontStyle.NunitoSans_Regular_14}>No. Telephone</Text>
        <CustomTextInput input={Telephone} setInput={setTelephone} nameRef={TelephoneInputRef} placeHolder={'Nomor Telephone'} keyboardType={'numeric'} />
      </View>


      <ButtonPurple title={'Simpan'} ButtonMarginTop={responsiveScreenHeight(15)} ButtonHeight={55}
        onPress={() => handleToast()}
      />


    </View >


  );
};
