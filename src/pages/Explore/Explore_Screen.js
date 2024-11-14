import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './Explore_Style';
import ICONS from '../../shared/enum/icon_library';
import FontStyle from '../../shared/style/FontStyle';
import COLORS from '../../shared/enum/colors_library';
import { DATA_HairCare } from '../../shared/services/DATA_HairCare';
import { DATA_Kategori } from '../../shared/services/DATA_Kategori';
import { useState } from 'react';
import ModalDetailLayanan from '../../shared/component/Modal/ModalDetail/ModalDetail';
import { useNavigation } from '@react-navigation/native';
import { formatRupiah } from '../../shared/helper/helper';

export default function Explore_Screen() {
    const navigation = useNavigation();
    const [ModalDetail, setModalDetail] = useState(false);
    const [SelectedItem, setSelectedItem] = useState([]);

    const toggleModal = () => { setModalDetail(!ModalDetail); };
    const selectItem = (item) => {
        console.log(item);
        setSelectedItem(item);
        toggleModal();
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle={"dark-content"} backgroundColor={'white'} />

                <View style={styles.KategoriListContainer}>
                    <Text style={FontStyle.Manrope_Bold_16}>Semua Kategori</Text>
                    <View style={styles.KategoriList_Horizontal}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            {DATA_Kategori.map((item, index) => (
                                <TouchableOpacity key={index} style={{
                                    ...styles.KategoriStyle,
                                    borderColor: item.isFocused == true ? COLORS.purple : COLORS.grey,
                                    backgroundColor: item.isFocused == true ? COLORS.blue_bg : COLORS.white
                                }}>
                                    <Text style={item.isFocused ? FontStyle.Manrope_Medium_12_Cyan : FontStyle.Manrope_Medium_12}>{item.nama_kategori}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>


                <View style={styles.KategoriContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {DATA_HairCare.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.kategoriBox} onPress={() => selectItem(item)}>
                                <View style={styles.kategoriBox_Left}>
                                    <Image source={item.image} style={styles.kategoriImage} />

                                    <TouchableOpacity style={styles.likeContainer}>
                                        <Image source={ICONS.icon_heart} style={{ ...styles.icon_Heart_style, tintColor: COLORS.pink_solid, opacity: item.isLoved ? 1 : 0.4 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.ketegoriBox_Right}>
                                    <View style={styles.keterangan_Top}>
                                        <Text style={FontStyle.NunitoSans_Regular_16_cyan}>{item.kategori}</Text>
                                        <Text style={FontStyle.Manrope_Bold_16}>{item.nama}</Text>
                                        <Text style={FontStyle.NunitoSans_Regular_12_grey} numberOfLines={2}>{item.keterangan}
                                        </Text>
                                    </View>
                                    <View style={styles.keterangan_Bot}>
                                        <Text style={FontStyle.NunitoSans_Regular_12_grey}>{formatRupiah(item.harga)}</Text>

                                        <TouchableOpacity style={styles.buttonBoking} onPress={() => navigation.navigate('Booking_Screen', { data: item })}>
                                            <Text style={FontStyle.Manrope_Bold_10_Cyan}>Boking</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>


            <ModalDetailLayanan visible={ModalDetail} onClose={toggleModal} data={SelectedItem} />

        </SafeAreaView>
    );
}

