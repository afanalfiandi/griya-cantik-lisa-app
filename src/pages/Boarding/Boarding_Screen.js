import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";

import ICONS from "../../shared/enum/icon_library";
import styles from "./Boarding_Style";
import FontStyle from "../../shared/style/FontStyle";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";

export default function Boarding_Screen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ImageBackground style={styles.image_bg} resizeMode="cover" source={ICONS.onBoarding_bgfit2} >
                    <StatusBar translucent={true} barStyle={"dark-content"} backgroundColor="transparent" />

                    <View style={styles.contentContainer}>
                        <View style={styles.content} >
                            <View style={styles.headerStyle}>
                                <Text style={FontStyle.Manrope_Bold_24_White}>Find The Best Service</Text>
                                <Text style={{ ...FontStyle.NunitoSans_Regular_16, color: 'white', textAlign: 'center' }}>
                                    There are various services from the best salons that have become our partners.
                                </Text>
                            </View>
                            <ButtonPurple title={'Mulai'} ButtonMarginBottom={responsiveScreenHeight(5)}
                                ButtonHeight={55} onPress={() => navigation.navigate('Login_Screen')} />

                            <Text style={{ ...FontStyle.NunitoSans_Regular_14, color: 'white' }}>Griya Cantik Lisa</Text>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}
