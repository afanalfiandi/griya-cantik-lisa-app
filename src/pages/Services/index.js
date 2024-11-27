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
import Layanan_Horizontal from "../../shared/component/Layanan/Layanan_Horizontal";
import COLORS from "../../shared/consts/colors.const";
import { DATA_Kategori } from "../../shared/services/DATA_Kategori";
import React, { useState } from "react";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import { DATA_Product } from "../../shared/services/DATA_Product";

export default function ServicesScreen() {
  const navigation = useNavigation();
  const [ModalDetail, setModalDetail] = useState(false);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const [SelectedLayanan, setSelectedLayanan] = useState([]);
  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const selectItem = (item) => {
    const isSelected = SelectedLayanan.some(
      (selectedItem) => selectedItem.serviceId === item.serviceId
    );

    if (isSelected) {
      setSelectedLayanan(
        SelectedLayanan.filter((selectedItem) => selectedItem.serviceId !== item.serviceId)
      );
    } else {
      setSelectedLayanan([...SelectedLayanan, item]);
    }
  };
  const calculateTotalPrice = () => {
    return SelectedLayanan.reduce((total, item) => total + item.price, 0);
  };
  const filteredProducts = selectedKategori
    ? DATA_Product.filter((product) => product.categoryId === selectedKategori)
    : DATA_Product;
  useFocusEffect(
    React.useCallback(() => {
      setSelectedKategori(1);
    }, [])
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
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
                  <Layanan_Horizontal
                    key={index}
                    iconLayanan={item.icon}
                    labelLayanan={item.categoryName}
                    isFocus={
                      selectedKategori === item.categoryId ? true : null
                    }
                    onPress={() => {
                      setSelectedKategori(
                        selectedKategori === item.categoryId
                          ? null
                          : item.categoryId
                      );
                    }}
                  />
                ))}
              </ScrollView>
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
                      <Image source={item.assets[0].img} style={styles.kategoriImage} />
                    </View>
                    <View style={styles.ketegoriBox_Center}>
                      <View style={styles.keterangan_Top}>
                        <Text style={FontStyle.Manrope_Bold_16}>
                          {item.categoryName}
                        </Text>
                        <Text style={FontStyle.Manrope_Bold_16_Cyan}>
                          {formatRupiah(item.price)}{" "}
                        </Text>
                        <Text
                          style={{
                            ...FontStyle.NunitoSans_Regular_12_grey,
                            paddingTop: responsiveScreenWidth(2),
                          }}
                          numberOfLines={2}
                        >
                          {item.description}{" "}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.ketegoriBox_Right}>
                      <TouchableOpacity
                        style={
                          SelectedLayanan.some(
                            (selectedItem) => selectedItem.serviceId === item.serviceId
                          )
                            ? styles.minus_style
                            : styles.plus_style
                        }
                        onPress={() => selectItem(item)}
                      >
                        <Image
                          source={
                            SelectedLayanan.some(
                              (selectedItem) => selectedItem.serviceId === item.serviceId
                            )
                              ? ICONS.icon_minus
                              : ICONS.icon_plus
                          }
                          style={{
                            ...styles.iconplus_minus,
                            tintColor: SelectedLayanan.some(
                              (selectedItem) => selectedItem.serviceId === item.serviceId
                            )
                              ? COLORS.red
                              : COLORS.white,
                          }}
                        />
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
            <Text style={FontStyle.Manrope_Bold_14}>
              Total{" "}
              <Text style={FontStyle.NunitoSans_Regular_14}>
                ({SelectedLayanan.length} Layanan)
              </Text>
            </Text>
            <Text
              style={{ ...FontStyle.Manrope_Bold_20, color: COLORS.purple }}
            >
              Rp. {calculateTotalPrice().toLocaleString()}
            </Text>
          </View>
          <View style={styles.FloatingBottomRight}>
            <ButtonPurple
              ButtonWidth={53}
              title={"Simpan"}
              ButtonHeight={55}
              onPress={() =>
                navigation.navigate("BookingScreen", {
                  data: SelectedLayanan,
                })
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
