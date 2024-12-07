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
import { getServiceCategory } from "../../shared/services/service_category";
import ServicesService from "../../shared/services/services.service";
import {
  SERVICE_CATEGORY_MEDIA_BASE_URL,
  SERVICE_MEDIA_BASE_URL,
} from "../../shared/consts/base-url.const";

export default function ServicesScreen({ route }) {
  const prevService = route.params.prevService;

  const navigation = useNavigation();
  const [ModalDetail, setModalDetail] = useState(false);

  const [serviceCategory, setServiceCategory] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedCategoryLabel, setSelectedCategoryLabel] = useState();
  const [selectedService, setSelectedService] = useState([]);

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const selectItem = (item) => {
    const isSelected =
      selectedService.some(
        (selected) => selected.serviceId === item.serviceId
      ) || item.serviceId === prevService;

    if (isSelected) {
      setSelectedService(
        selectedService.filter(
          (selected) => selected.serviceId !== item.serviceId
        )
      );
    } else {
      setSelectedService((exist) => [...exist, item]);
    }
  };
  const calculateTotalPrice = () => {
    return selectedService.reduce((total, item) => total + item.price, 0);
  };

  const filteredProducts = selectedCategory
    ? DATA_Product.filter((product) => product.categoryId === selectedCategory)
    : DATA_Product;

  useFocusEffect(
    React.useCallback(() => {
      initData();
    }, [])
  );

  const initData = () => {
    setSelectedService([prevService]);
    onGetServiceCategory();
    getServiceByCategory();
  };
  const onGetServiceCategory = () => {
    getServiceCategory().then((data) => {
      setServiceCategory(data.data);
      setSelectedCategory(data.data[0].serviceCategoryId);
      setSelectedCategoryLabel(data.data[0].serviceCategoryId);
    });
  };

  const getServiceByCategory = (selectedCategory) => {
    ServicesService.getServices(selectedCategory, true).then((res) => {
      setServicesData(res.data);
    });
  };
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
                {servicesData.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.kategoriBox}
                    onPress={() => selectItem(item)}
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
                          {item.serviceCategoryName}
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
                        onPress={() => selectItem(item)}
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
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <View style={styles.FloatingBottomContainer}>
          <View style={styles.FloatingBottomLeft}>
            <Text style={FontStyle.Manrope_Bold_14}>
              Total{" "}
              <Text style={FontStyle.NunitoSans_Regular_14}>
                ({selectedService.length} Layanan)
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
                  data: selectedService,
                })
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
