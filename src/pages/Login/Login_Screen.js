import {
    StyleSheet, Text, Image, View, Alert, StatusBar, Dimensions, TextInput,
    TouchableOpacity, Modal, PixelRatio, ToastAndroid, SafeAreaView, ScrollView, KeyboardAvoidingView, BackHandler
} from "react-native";
import React, { useRef, useEffect, useState, createRef } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styles from "./Login_Style";
import ICONS from "../../shared/enum/icon_library.js";
import ButtonPurple from "../../shared/component/Button/ButtonPurple.js";
import CustomTextInput from "../../shared/component/Textinput/CustomTextInput.js";
import FontStyle from "../../shared/style/FontStyle.js";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";


const Login_Screen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userNameInputRef = createRef();
    const userPasswordInputRef = createRef();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle={"dark-content"} backgroundColor={'white'} />
                <View style={styles.mid_container}>
                    <View style={styles.title_container}>
                        <Text style={FontStyle.Manrope_Bold_24}>Selamat Datang,</Text>
                        <Text style={FontStyle.NunitoSans_Regular_14}>Login dan nikmati kemudahan merencanakan perawatan sesuai kebutuhan Anda</Text>
                    </View>
                    <View style={styles.form_container}>
                        <CustomTextInput
                            iconForm={ICONS.icon_username}
                            nameRef={userNameInputRef}
                            placeHolder={'Username'}
                            input={username}
                            setInput={setUsername}
                        />

                        <CustomTextInput
                            iconForm={ICONS.icon_lock}
                            isSecureForm={true}
                            nameRef={userPasswordInputRef}
                            placeHolder={'Kata Sandi'}
                            input={password}
                            setInput={setPassword}
                        />

                        <ButtonPurple ButtonHeight={60} title={'Masuk'} ButtonMarginTop={responsiveScreenHeight(20)} onPress={() => navigation.navigate('Home_Screen')} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login_Screen;


