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
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import { DATA_Product } from "../../shared/services/DATA_Product";
import { getServiceCategory } from "../../shared/services/service_category";
import ServicesService from "../../shared/services/services.service";
import {
  SERVICE_CATEGORY_MEDIA_BASE_URL,
  SERVICE_MEDIA_BASE_URL,
} from "../../shared/consts/base-url.const";
import { addDataServices, deleteDataServices, getDataServices } from "../../shared/services/Asycnstorage";
import { useToast } from "react-native-toast-notifications";

export default function ServicesScreen({ }) {


  const navigation = useNavigation();
  const toast = useToast();
  const [ModalDetail, setModalDetail] = useState(false);

  const [serviceCategory, setServiceCategory] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedCategoryLabel, setSelectedCategoryLabel] = useState();
  const [selectedService, setSelectedService] = useState([]);


  // const selectItem = (item) => {
  //   const isSelected =
  //     selectedService.some(
  //       (selected) => selected.serviceId === item.serviceId
  //     ) || item.serviceId === prevService;

  //   if (isSelected) {
  //     setSelectedService(
  //       selectedService.filter(
  //         (selected) => selected.serviceId !== item.serviceId
  //       )
  //     );
  //   } else {
  //     setSelectedService((exist) => [...exist, item]);
  //   }



  //   Print_r(selectedService);  // Cek apakah data sudah ter-update
  // };

  const isProductLiked = (serviceId) => {
    return selectedService.some((item) => item.serviceId === serviceId);
  };

  // // Fungsi untuk menambahkan produk ke dalam liked
  // const onSelectServices = (services) => {
  //   // Cek apakah produk sudah di-like
  //   if (isProductLiked(services.serviceId)) {
  //     // Jika sudah, hapus dari liked
  //     deleteDataServices(services.serviceId);
  //     setSelectedService((prev) =>
  //       prev.filter((item) => item.serviceId !== services.id)
  //     );
  //   } else {
  //     // Jika belum, tambahkan ke liked
  //     addDataServices(services);
  //     setLikedProducts((prev) => [...prev, services]);
  //   }
  // };

  const fetchDataRiwayat = async () => {
    const allData = await getDataServices();
    setSelectedService(allData || []);
    fetchDataRiwayat2()
  };


  const fetchDataRiwayat2 = async () => {
    const allData = await getDataServices();
    setSelectedService(allData || []);

    console.log('DATA SERVICES', selectedService)
  };

  // Fungsi untuk menghapus layanan
  const onDeleteServices = (services) => {
    deleteDataServices(services.serviceId, toast);
    fetchDataRiwayat(); // Memanggil fetchDataRiwayat setelah penghapusan
  };

  // Fungsi untuk menghapus layanan
  const onAddServices = (services) => {
    addDataServices(services, toast);

    fetchDataRiwayat(); // Memanggil fetchDataRiwayat setelah penghapusan
  };

  const calculateTotalPrice2 = (data) => {
    let total = 0;

    const addPrices = (item) => {
      if (Array.isArray(item)) {
        item.forEach(addPrices);  // Rekursi untuk array dalam array
      } else if (item.price) {
        total += parseInt(item.price, 10);  // Pastikan harga dikonversi ke integer
      }
    };

    addPrices(data);  // Menambahkan harga dari semua layanan yang dipilih

    return total;
  };


  const filteredProducts = selectedCategory
    ? DATA_Product.filter((product) => product.categoryId === selectedCategory)
    : DATA_Product;

  useFocusEffect(
    React.useCallback(() => {
      setServicesData([]);
      setSelectedService([]);
      fetchDataRiwayat();
      initData(); // Pastikan inisialisasi data dilakukan

    }, [])
  );


  const initData = () => {
    onGetServiceCategory();
  };

  const onGetServiceCategory = () => {
    getServiceCategory().then((data) => {
      if (data?.data?.length > 0) {
        const firstCategory = data.data[0];
        setServiceCategory(data.data);
        setSelectedCategory(firstCategory.serviceCategoryId);
        setSelectedCategoryLabel(firstCategory.serviceCategoryName);
        getServiceByCategory(firstCategory.serviceCategoryId); // Panggil data layanan berdasarkan kategori pertama
      }
    });
  };


  const getServiceByCategory = (selectedCategory) => {
    ServicesService.getServices(selectedCategory, true).then((res) => {
      // console.log("Services Data:", res.data); // Debug log
      setServicesData(res.data);
    });
  };

  const toBoking = () => {
    navigation.navigate("BookingScreen");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerButtonLeft} onPress={() =>
            toBoking()
          }>
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
                {serviceCategory &&
                  serviceCategory.map((item, index) => (
                    <Layanan_Horizontal
                      key={index}
                      iconLayanan={item.img}
                      labelLayanan={item.serviceCategoryName}
                      isFocus={
                        selectedCategory === item.serviceCategoryId
                          ? true
                          : null
                      }
                      onPress={() => {
                        setSelectedCategory(
                          selectedCategory === item.serviceCategoryId
                            ? null
                            : item.serviceCategoryId
                        );
                        getServiceByCategory(item.serviceCategoryId);
                      }}
                    />
                  ))}
              </ScrollView>
            </View>

            <View style={styles.KategoriContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {servicesData.length > 0 ? (
                  <>
                    {servicesData.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.kategoriBox}
                        onPress={() => onSelectServices(item)}
                      >
                        <View style={styles.kategoriBox_Left}>
                          <Image
                            source={{
                              uri: `${SERVICE_MEDIA_BASE_URL}${item.img[0].img}`,
                            }}
                            style={styles.kategoriImage}
                          />
                        </View>
                        <View style={styles.ketegoriBox_Center}>
                          <View style={styles.keterangan_Top}>
                            <Text style={FontStyle.Manrope_Bold_16}>
                              {item.serviceName}
                            </Text>
                            <Text style={FontStyle.Manrope_Bold_16_Cyan}>
                              {formatRupiah(item.price)}
                            </Text>
                            <Text
                              style={{
                                ...FontStyle.NunitoSans_Regular_12_grey,
                                paddingTop: responsiveScreenWidth(2),
                              }}
                              numberOfLines={2}
                            >
                              {item.description}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.ketegoriBox_Right}>
                          <TouchableOpacity
                            style={
                              selectedService.some(
                                (selected) => selected.serviceId === item.serviceId
                              )
                                ? styles.minus_style
                                : styles.plus_style
                            }
                            onPress={() => selectedService.some(
                              (selected) => selected.serviceId === item.serviceId
                            )
                              ? onDeleteServices(item)
                              : onAddServices(item)}
                          >
                            <Image
                              source={
                                selectedService.some(
                                  (selected) =>
                                    selected.serviceId === item.serviceId
                                )
                                  ? ICONS.icon_minus
                                  : ICONS.icon_plus
                              }
                              style={{
                                ...styles.iconplus_minus,
                                tintColor: selectedService.some(
                                  (selected) =>
                                    selected.serviceId === item.serviceId
                                )
                                  ? COLORS.red
                                  : COLORS.white,
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </>
                ) : (
                  <View style={{
                    alignItems: 'center',
                    width: responsiveScreenWidth(94),
                    height: responsiveScreenHeight(60),
                    justifyContent: 'center',

                  }}>
                    <Image source={ICONS.icon_nodata_bg} style={styles.noDataStyle} />
                    <Text style={FontStyle.NunitoSans_Regular_12_grey}>There is no data...</Text>
                  </View>
                )}
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <View style={styles.FloatingBottomContainer}>
          <View style={styles.FloatingBottomLeft}>
            <Text style={FontStyle.Manrope_Bold_14}>
              Total{" "}
              <Text style={FontStyle.NunitoSans_Regular_14}>
                ({Print_r(selectedService)} Layanan)
              </Text>
            </Text>
            <Text
              style={{ ...FontStyle.Manrope_Bold_20, color: COLORS.purple }}
            >
              Rp. {calculateTotalPrice2(selectedService)}
            </Text>
          </View>
          <View style={styles.FloatingBottomRight}>
            <ButtonPurple
              ButtonWidth={53}
              title={"Simpan"}
              ButtonHeight={55}
              onPress={() =>
                toBoking()
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
