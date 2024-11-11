import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './Booking_Style';
import ICONS from '../../component/library/icon_library';
import FontStyle from '../../component/style/FontStyle';
import Layanan from '../../component/View/Layanan/Layanan';
import Layanan_Horizontal from '../../component/View/Layanan/Layanan_Horizontal';
import COLORS from '../../component/library/colors_library';
import { DATA_HairCare } from '../../component/DATA/DATA_HairCare';
import { DATA_Kategori } from '../../component/DATA/DATA_Kategori';
import { createRef, useRef, useState } from 'react';
import ModalDetailLayanan from '../../component/Modal/ModalDetail/ModalDetail';
import { DATA_Spesialis } from '../../component/DATA/DATA_Spesialis';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { DATA_waktu } from '../../component/DATA/DATA_waktu';
import CustomCalendar from '../../component/View/Calendar/CalendarCustom';
import CustomTextInput from '../../component/Textinput/CustomTextInput';
import CustomTextArea from '../../component/Textinput/CustomTextArea';
import ButtonPurple from '../../component/Button/ButtonPurple';

export default function Booking_Screen() {
    const [ModalDetail, setModalDetail] = useState(false);
    const [SelectedItem, setSelectedItem] = useState([]);
    const [catatan, setCatatan] = useState('');
    const catatanRef = createRef();

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
                        <Text style={FontStyle.Manrope_Bold_16}>Booking Layanan</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.contentContainer}>

                        <View style={styles.jenisLayananTambah_Container}>
                            <Text style={FontStyle.Manrope_Bold_14}>Jenis Layanan</Text>
                            <TouchableOpacity style={styles.TambahStyle}>
                                <Image style={styles.btnPlus} source={ICONS.icon_plus} />
                                <Text style={FontStyle.Manrope_Medium_14_Cyan}>Tambah</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.KategoriContainer}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {DATA_HairCare.slice(0, 2).map((item, index) => (
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
                                            <TouchableOpacity style={styles.plusminus_style}>
                                                <Image source={ICONS.icon_minus} style={styles.iconplus_minus} />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                ))}
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
                        <ButtonPurple ButtonWidth={53} title={'Booking'} ButtonHeight={55} />
                    </View>
                </View>
            </View>





        </SafeAreaView>
    );
}

