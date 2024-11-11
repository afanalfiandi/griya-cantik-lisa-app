import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './PilihLayanan_Style';
import ICONS from '../../component/library/icon_library';
import FontStyle from '../../component/style/FontStyle';
import Layanan_Horizontal from '../../component/View/Layanan/Layanan_Horizontal';
import COLORS from '../../component/library/colors_library';
import { DATA_HairCare } from '../../component/DATA/DATA_HairCare';
import { DATA_Kategori } from '../../component/DATA/DATA_Kategori';
import { createRef, useRef, useState } from 'react';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import ButtonPurple from '../../component/Button/ButtonPurple';
import { useNavigation } from '@react-navigation/native';

export default function PilihLayanan_Screen() {
    const navigation = useNavigation();
    const [ModalDetail, setModalDetail] = useState(false);
    const toggleModal = () => { setModalDetail(!ModalDetail); };
    const selectItem = (item) => {
        console.log(item);
        setSelectedItem(item);
        toggleModal();
    }
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

                        <View style={styles.LayananList_Horizontal}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {DATA_Kategori.map((item, index) => (
                                    <Layanan_Horizontal key={index} iconLayanan={item.icon} labelLayanan={item.nama_kategori}
                                        isFocus={item.isFocused ? true : null} />
                                ))}
                            </ScrollView>
                        </View>

                        <View style={styles.KategoriContainer}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {DATA_HairCare.map((item, index) => (
                                    <TouchableOpacity key={index} style={styles.kategoriBox} onPress={() => selectItem(item)}>
                                        <View style={styles.kategoriBox_Left}>
                                            <Image source={item.image} style={styles.kategoriImage} />
                                        </View>
                                        <View style={styles.ketegoriBox_Center}>
                                            <View style={styles.keterangan_Top}>
                                                <Text style={FontStyle.Manrope_Bold_16}>{item.nama}</Text>
                                                <Text style={FontStyle.Manrope_Bold_16_Cyan}>{item.harga} </Text>
                                                <Text style={{ ...FontStyle.NunitoSans_Regular_12_grey, paddingTop: responsiveScreenWidth(2) }} numberOfLines={2}>{item.keterangan} </Text>
                                            </View>
                                        </View>
                                        <View style={styles.ketegoriBox_Right}>
                                            <TouchableOpacity style={item.isLoved ? styles.minus_style : styles.plus_style}>
                                                <Image source={item.isLoved ? ICONS.icon_minus : ICONS.icon_plus}
                                                    style={{
                                                        ...styles.iconplus_minus,
                                                        tintColor: item.isLoved ? COLORS.red : COLORS.white
                                                    }} />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>

                </ScrollView>

                <View style={styles.FloatingBottomContainer}>
                    <View style={styles.FloatingBottomLeft}>
                        <Text style={FontStyle.Manrope_Bold_14}>Total <Text style={FontStyle.NunitoSans_Regular_14}>(1 Layanan)</Text></Text>
                        <Text style={{ ...FontStyle.Manrope_Bold_20, color: COLORS.purple }}>Rp. 150.000</Text>

                    </View>
                    <View style={styles.FloatingBottomRight}>
                        <ButtonPurple ButtonWidth={53} title={'Simpan'} ButtonHeight={55} onPress={() => navigation.navigate('BookingCheckout_Screen')} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

