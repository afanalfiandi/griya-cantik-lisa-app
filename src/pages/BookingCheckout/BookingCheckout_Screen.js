import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './BookingCheckout_Style';
import ICONS from '../../shared/enum/icon_library';
import FontStyle from '../../shared/style/FontStyle';
import COLORS from '../../shared/enum/colors_library';
import { createRef, useRef, useState } from 'react';
import ButtonPurple from '../../shared/component/Button/ButtonPurple';
import { useNavigation } from '@react-navigation/native';
import CheckoutContainerVertical from '../../shared/component/CheckoutComponent/CheckoutContainerVertical';

import LineHorizontal from '../../shared/component/LineHorizontal/LineHorizontal';
import CheckoutContainerHorizontal from '../../shared/component/CheckoutComponent/CheckoutContainerHorizontal';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import HeaderTop from '../../shared/component/Header/Header';

export default function BookingCheckout_Screen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />


                <HeaderTop title={'Booking Checkout'} />
                <ScrollView>
                    <View style={styles.contentContainer}>

                        <View style={styles.checkoutBox}>
                            <View style={styles.checkoutBox_Content}>
                                <View style={styles.row}>
                                    <CheckoutContainerVertical title={'Tanggal'} label={'11 Januari 2024'} />
                                    <CheckoutContainerVertical title={'Waktu'} label={'09:00'} paddingLeft={6} />
                                    <CheckoutContainerVertical title={'Spesialis'} label={'Guteng'} />

                                </View>
                                <LineHorizontal isSolid={true} />

                                <Text style={{ ...FontStyle.NunitoSans_Regular_14, paddingBottom: responsiveScreenHeight(1) }}>Layanan</Text>

                                <CheckoutContainerHorizontal title={'Kritingin Rambut'} label={'Rp. 160.000'} />
                                <CheckoutContainerHorizontal title={'Manicure'} label={'Rp. 100.000'} />

                                <LineHorizontal />

                                <CheckoutContainerHorizontal title={'Sub Total'} label={'Rp. 260.000'} />

                                <LineHorizontal isRounded={true} marginVertical={4} height={4} />


                                <View style={styles.Pembayaran}>
                                    <View style={styles.PembayaranImg}>
                                        <Image source={ICONS.pay_mandiri} style={styles.payImgStyle} />
                                    </View>
                                    <View style={styles.pembayaranDetail}>

                                        <Text style={FontStyle.Manrope_Bold_14}>Mandiri</Text>
                                        <Text style={FontStyle.NunitoSans_Regular_14}>28927386289928</Text>

                                    </View>
                                    <TouchableOpacity style={styles.pembayaranSalin}>
                                        <Text style={FontStyle.NunitoSans_Regular_14}>Salin</Text>

                                    </TouchableOpacity>
                                </View>

                            </View>


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

