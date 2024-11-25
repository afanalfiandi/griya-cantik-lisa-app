import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import ICONS from "../../shared/consts/icon.const";
import FontStyle from "../../shared/style/font.style";
import COLORS from "../../shared/consts/colors.const";
import { DATA_Kategori } from "../../shared/services/DATA_Kategori";
import React, { useState } from "react";
import ModalDetailLayanan from "../../shared/component/Modal/ModalDetail/ModalDetail";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import {
  addDataLiked,
  deleteDataLiked,
  getDataLiked,
} from "../../shared/services/Asycnstorage";
import { DATA_Product } from "../../shared/services/DATA_Product";
import { useToast } from "react-native-toast-notifications";

export default function ExploreScreen({ route }) {
  const getData = route?.params?.data || null;
  const toast = useToast();
  const navigation = useNavigation();
  const [ModalDetail, setModalDetail] = useState(false);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [selectedKategoriName, setSelectedKategoriName] = useState(null);
  const [SelectedItem, setSelectedItem] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const selectItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };
  const fetchLikedData = async () => {
    const likedData = await getDataLiked();
    setLikedProducts(likedData);
  };

  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.serviceId === productId);
  };

  // Fungsi untuk menambahkan produk ke dalam liked
  const handleLikeToggle = (product) => {
    // Cek apakah produk sudah di-like
    if (isProductLiked(product.serviceId)) {
      // Jika sudah, hapus dari liked
      deleteDataLiked(product.serviceId, toast);
      setLikedProducts((prev) =>
        prev.filter((item) => item.serviceId !== product.id)
      );
    } else {
      // Jika belum, tambahkan ke liked
      addDataLiked(product, toast);
      setLikedProducts((prev) => [...prev, product]);
    }
  };
  const filteredProducts = selectedKategori
    ? DATA_Product.filter((product) => product.categoryId === selectedKategori)
    : DATA_Product;

  useFocusEffect(
    React.useCallback(() => {
      // Menggunakan getData jika ada, atau default nilai kategori
      if (getData) {
        setSelectedKategori(getData.categoryId);
        setSelectedKategoriName(getData.categoryName);
      } else {
        setSelectedKategori(1);
        setSelectedKategoriName("Hair Care");
      }
      fetchLikedData();
    }, [getData])
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />

        <View style={styles.KategoriListContainer}>
          <Text style={FontStyle.Manrope_Bold_16}>{selectedKategoriName}</Text>
          <View style={styles.KategoriList_Horizontal}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {DATA_Kategori.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...styles.KategoriStyle,
                    borderColor:
                      selectedKategori === item.categoryId
                        ? COLORS.purple
                        : COLORS.grey,
                    backgroundColor:
                      selectedKategori === item.categoryId
                        ? COLORS.blue_bg
                        : COLORS.white,
                  }}
                  onPress={() => {
                    setSelectedKategori(item.categoryId);
                    setSelectedKategoriName(item.categoryName);
                  }}
                >
                  <Text
                    style={
                      item.isFocused
                        ? FontStyle.Manrope_Medium_12_Cyan
                        : FontStyle.Manrope_Medium_12
                    }
                  >
                    {item.categoryName}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.KategoriContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredProducts.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.kategoriBox}
                onPress={() => selectItem(item)}
              >
                <View style={styles.kategoriBox_Left}>
                  <Image
                    source={item.assets[0].img}
                    style={styles.kategoriImage}
                  />

                  <TouchableOpacity
                    style={styles.likeContainer}
                    onPress={() => handleLikeToggle(item)}
                  >
                    <Image
                      source={ICONS.icon_heart}
                      style={{
                        ...styles.icon_Heart_style,
                        tintColor: COLORS.pink_solid,
                        opacity: isProductLiked(item.serviceId) ? 1 : 0.4,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.ketegoriBox_Right}>
                  <View style={styles.keterangan_Top}>
                    <Text style={FontStyle.NunitoSans_Regular_16_cyan}>
                      {item.categoryName}
                    </Text>
                    <Text style={FontStyle.Manrope_Bold_16}>
                      {item.serviceName}
                    </Text>
                    <Text
                      style={FontStyle.NunitoSans_Regular_12_grey}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </View>
                  <View style={styles.keterangan_Bot}>
                    <Text style={FontStyle.NunitoSans_Regular_12_grey}>
                      {formatRupiah(item.price)}
                    </Text>

                    <TouchableOpacity
                      style={styles.buttonBoking}
                      onPress={() =>
                        navigation.navigate("BookingScreen", { data: item })
                      }
                    >
                      <Text style={FontStyle.Manrope_Bold_10_Cyan}>
                        Booking
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <ModalDetailLayanan
        visible={ModalDetail}
        onClose={toggleModal}
        data={SelectedItem}
      />
    </SafeAreaView>
  );
}
