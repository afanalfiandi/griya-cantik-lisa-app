import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './BookingCheckout_Style';
import ICONS from '../../component/library/icon_library';
import FontStyle from '../../component/style/FontStyle';
import COLORS from '../../component/library/colors_library';
import { createRef, useRef, useState } from 'react';
import ButtonPurple from '../../component/Button/ButtonPurple';
import { useNavigation } from '@react-navigation/native';

export default function BookingCheckout_Screen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />

                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.headerButtonLeft}>
                        <Image style={styles.btnImage} source={ICONS.icon_left} />
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}>
                        <Text style={FontStyle.Manrope_Bold_16}>Pilih Layanan</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.contentContainer}>

                        <View style={styles.checkoutBox}>
                            <View style={styles.checkoutBox_Content}>
                                <View style={styles.row}>
                                    <View style={styles.rowSolid}></View>
                                    <View style={styles.rowSolid}></View>
                                    <View style={styles.rowSolid}></View>
                                </View>
                                <View style={styles.paddingContainer}>
                                    <View style={styles.paddingLeft} />
                                    <View style={styles.paddingCenter} />
                                    <View style={styles.paddingRight} />
                                </View>
                                <View style={styles.row2}>
                                    <Text style={FontStyle.Manrope_Bold_14}>Kritingin Rambut</Text>
                                    <Text style={FontStyle.Manrope_Bold_14_Cyan}>Rp. 150.000</Text>
                                </View>
                            </View>

                            {/* <View style={styles.paddingContainer}>
                                <View style={{ ...styles.paddingLeft, backgroundColor: 'transparent' }} />
                                <View style={styles.paddingCenter} />
                                <View style={{ ...styles.paddingRight, backgroundColor: 'transparent' }} />
                            </View> */}


                        </View>

                    </View>
                </ScrollView>

                <View style={styles.FloatingBottomContainer}>

                    <ButtonPurple ButtonWidth={94} title={'Tutup'} ButtonHeight={55} />

                </View>
            </View>





        </SafeAreaView>
    );
}

