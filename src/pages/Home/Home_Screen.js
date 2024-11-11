import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './Home_Style';
import StatusBar_Light from '../../component/View/StatusBar/StatusBar_Light';
import ICONS from '../../component/library/icon_library';
import FontStyle from '../../component/style/FontStyle';
import Layanan from '../../component/View/Layanan/Layanan';
import Layanan_Horizontal from '../../component/View/Layanan/Layanan_Horizontal';
import COLORS from '../../component/library/colors_library';
import { DATA_HairCare } from '../../component/DATA/DATA_HairCare';
import { DATA_Kategori } from '../../component/DATA/DATA_Kategori';
import { useNavigation } from '@react-navigation/native';


export default function Home_Screen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />
                    <View style={styles.TopContainer}>
                        <View style={styles.TopContainer_Left}>
                            <Text style={FontStyle.Manrope_Bold_24}>Halo, Stefany</Text>
                            <Text style={{ ...FontStyle.NunitoSans_Regular_14, marginTop: 5 }}>Find the service you want, and treat yourself</Text>
                        </View>
                        <View style={styles.TopContainer_Right}>
                            <Image source={ICONS.icon_heart} style={styles.icon_Heart_style} />
                        </View>
                    </View>

                    <View style={styles.CardContainer}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <Image source={ICONS.card_1} style={styles.CardStyle} />
                            <Image source={ICONS.card_1} style={styles.CardStyle} />
                            <Image source={ICONS.card_1} style={styles.CardStyle} />
                        </ScrollView>
                    </View>

                    <View style={styles.LayananContainer}>
                        <Text style={FontStyle.Manrope_Bold_16}>Layanan</Text>
                        <View style={styles.LayananList}>

                            {DATA_Kategori.map((item, index) => (
                                <Layanan key={index} iconLayanan={item.icon} labelLayanan={item.nama_kategori} />
                            ))}
                        </View>
                    </View>


                    <View style={styles.PalingDicariContainer}>
                        <Text style={FontStyle.Manrope_Bold_16}>Paling Dicari</Text>
                        <View style={styles.LayananList_Horizontal}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>

                                {DATA_Kategori.map((item, index) => (
                                    <Layanan_Horizontal key={index} iconLayanan={item.icon} labelLayanan={item.nama_kategori} />
                                ))}
                            </ScrollView>
                        </View>
                    </View>


                    <View style={styles.KategoriContainer}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            {DATA_HairCare.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.kategoriBox} onPress={() => navigation.navigate('Boarding_Screen')}>
                                    <View style={styles.kategoriBox_Left}>
                                        <Image source={item.image} style={styles.kategoriImage} />

                                        <TouchableOpacity style={styles.likeContainer}>
                                            <Image source={ICONS.icon_heart} style={{ ...styles.icon_Heart_style, tintColor: COLORS.pink_solid }} />
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
                                            <Text style={FontStyle.NunitoSans_Regular_12_grey}>{item.harga}</Text>

                                            <TouchableOpacity style={styles.buttonBoking}>
                                                <Text style={FontStyle.Manrope_Bold_10_Cyan}>Boking</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}



                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

