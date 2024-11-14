import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './Booking_Style';
import ICONS from '../../shared/enum/icon_library';
import FontStyle from '../../shared/style/FontStyle';
import COLORS from '../../shared/enum/colors_library';
import { DATA_HairCare } from '../../shared/services/DATA_HairCare';
import React, { useEffect, useState, useCallback, createRef } from 'react';
import { DATA_Spesialis } from '../../shared/services/DATA_Spesialis';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { DATA_waktu } from '../../shared/services/DATA_waktu';
import CustomCalendar from '../../shared/component/Calendar/CalendarCustom';
import CustomTextArea from '../../shared/component/Textinput/CustomTextArea';
import ButtonPurple from '../../shared/component/Button/ButtonPurple';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import HeaderTop from '../../shared/component/Header/Header';

export default function Booking_Screen({ route }) {
    const getData = route.params.data;
    const navigation = useNavigation();
    const [ModalDetail, setModalDetail] = useState(false);
    const [SelectedItem, setSelectedItem] = useState([]);

    const [SelectedLayanan, setSelectedLayanan] = useState([]);
    const [catatan, setCatatan] = useState('');
    const [Spesialis, setSpesialis] = useState('');

    const catatanRef = createRef();

    const addItemToSelectedLayanan = (item) => {
        setSelectedLayanan(prevLayanan => {
            if (prevLayanan.some(existingItem => existingItem.id === item.id)) {
                return prevLayanan;
            }
            return [...prevLayanan, item];
        });
    };


    const removeItemFromSelectedLayanan = (id) => {
        setSelectedLayanan(prevLayanan => prevLayanan.filter(item => item.id !== id));
    };
    const toggleModal = () => { setModalDetail(!ModalDetail); };
    const selectItem = (item) => {
        console.log(item);
        setSelectedItem(item);
        toggleModal();
    }
    const normalizeData = (data) => {
        if (!Array.isArray(data)) {
            return [data];
        }
        return data;
    };
    useFocusEffect(
        React.useCallback(() => {

            // if (getData) {
            //     addItemToSelectedLayanan(getData); 
            // }
            const normalizedData = normalizeData(getData);
            normalizedData.forEach(item => addItemToSelectedLayanan(item));
            console.log(getData)

        }, [getData])
    );


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <StatusBar translucent={false} barStyle={"dark-content"} backgroundColor={'white'} />


                <HeaderTop title={'Booking Layanan'} />
                <ScrollView>
                    <View style={styles.contentContainer}>

                        <View style={styles.jenisLayananTambah_Container}>
                            <Text style={FontStyle.Manrope_Bold_14}>Jenis Layanan</Text>
                            <TouchableOpacity style={styles.TambahStyle} onPress={() => navigation.navigate('PilihLayanan_Screen')}>
                                <Image style={styles.btnPlus} source={ICONS.icon_plus} />
                                <Text style={FontStyle.Manrope_Medium_14_Cyan}>Tambah</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.KategoriContainer}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {SelectedLayanan.length !== 0 && (
                                    <>
                                        {SelectedLayanan.map((item, index) => (
                                            <TouchableOpacity key={index} style={styles.kategoriBox} onPress={() => selectItem(item)}>
                                                <View style={styles.kategoriBox_Left}>
                                                    <Image source={item.image} style={styles.kategoriImage} />
                                                </View>
                                                <View style={styles.ketegoriBox_Center}>
                                                    <View style={styles.keterangan_Top}>
                                                        <Text style={FontStyle.Manrope_Bold_16}>{item.nama}</Text>
                                                        <View style={styles.keterangan_Bot}>
                                                            <Text style={FontStyle.Manrope_Bold_16_Cyan}>{item.harga} </Text>
                                                            <View style={styles.dot} />
                                                            <Text style={FontStyle.NunitoSans_Regular_12_grey}>{item.kategori}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.ketegoriBox_Right}>
                                                    <TouchableOpacity style={styles.plusminus_style} onPress={() => removeItemFromSelectedLayanan(item.id)}>
                                                        <Image source={ICONS.icon_minus} style={styles.iconplus_minus} />
                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </>
                                )}

                            </ScrollView>
                        </View>

                        <View style={styles.jenisLayananTambah_Container}>
                            <Text style={FontStyle.Manrope_Bold_14}>Spesialis</Text>
                        </View>

                        <View style={styles.SpesialisList_Horizontal}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {DATA_Spesialis.map((item, index) => (
                                    <View key={index} style={{ ...styles.SpesialisStyle, }}>
                                        <TouchableOpacity style={{
                                            ...styles.spesialisPhotos_Container,
                                            borderColor: item.isFocused == true ? COLORS.purple : COLORS.grey,
                                            borderWidth: item.isFocused == true ? responsiveScreenWidth(1) : 0,

                                        }}>
                                            <Image source={item.icon} style={styles.spesialisPhotos_Style} />
                                            {item.isFocused && (
                                                <View style={styles.spesialisFocus}>
                                                    <Image style={styles.iconCheck} source={ICONS.icon_check} />
                                                </View>
                                            )}
                                        </TouchableOpacity>
                                        <Text style={FontStyle.Manrope_Medium_14_}>{item.nama_spesialis}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                        <View style={styles.jenisLayananTambah_Container}>
                            <Text style={FontStyle.Manrope_Bold_14}>Tanggal</Text>
                        </View>

                        <CustomCalendar />


                        <View style={styles.jenisLayananTambah_Container}>
                            <Text style={FontStyle.Manrope_Bold_14}>Waktu</Text>
                        </View>

                        <View style={styles.KategoriList_Horizontal}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {DATA_waktu.map((item, index) => (
                                    <TouchableOpacity key={index} style={{
                                        ...styles.KategoriStyle,
                                        borderColor: item.isFocused == true ? COLORS.purple : COLORS.grey,
                                        backgroundColor: item.isFocused == true ? COLORS.blue_bg : COLORS.white
                                    }}>
                                        <Text style={item.isFocused ? FontStyle.Manrope_Medium_12_Cyan : FontStyle.Manrope_Medium_12}>{item.waktu}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>


                        <View style={styles.jenisLayananTambah_Container}>
                            <Text style={FontStyle.Manrope_Bold_14}>Catatan</Text>
                        </View>



                        <CustomTextArea
                            input={catatan} setInput={setCatatan} nameRef={catatanRef} placeHolder={'Tuliskan catatan (Opsional)'}
                        />

                    </View>

                </ScrollView>

                <View style={styles.FloatingBottomContainer}>
                    <View style={styles.FloatingBottomLeft}>
                        <Text style={FontStyle.Manrope_Bold_14}>Total <Text style={FontStyle.NunitoSans_Regular_14}>(4 Layanan)</Text></Text>
                        <Text style={{ ...FontStyle.Manrope_Bold_20, color: COLORS.purple }}>Rp. 450.000</Text>

                    </View>
                    <View style={styles.FloatingBottomRight}>
                        <ButtonPurple ButtonWidth={53} title={'Booking'} ButtonHeight={55} onPress={() => navigation.navigate('BookingCheckout_Screen')} />
                    </View>
                </View>
            </View>





        </SafeAreaView>
    );
}

