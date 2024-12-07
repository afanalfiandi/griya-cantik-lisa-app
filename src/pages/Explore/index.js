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
import FontStyle from "../../shared/style/font.style";
import COLORS from "../../shared/consts/colors.const";
import React, { useState } from "react";
import ModalDetailLayanan from "../../shared/component/Modal/ModalDetail/ModalDetail";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah } from "../../shared/helper/helper";
import ServicesService from "../../shared/services/services.service";
import { getServiceCategory } from "../../shared/services/service_category";
import { SERVICE_MEDIA_BASE_URL } from "../../shared/consts/base-url.const";
import { useToast } from "react-native-toast-notifications";

export default function ExploreScreen({ route }) {
  const params = route?.params?.data || null;
  const toast = useToast();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [ModalDetail, setModalDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const [serviceCategory, setServiceCategory] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(params ? params : 0);
  const [selectedCategoryLabel, setSelectedCategoryLabel] = useState();

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const selectItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };

  const initData = () => {
    onGetServiceCategory();
    getServiceByCategory();
  };

  const onGetServiceCategory = () => {
    getServiceCategory().then((data) => {
      setIsLoading(false);
      let selectedCategoryLabel = params
        ? data.data.find((item) => {
            return item.serviceCategoryId === params;
          })?.serviceCategoryName
        : data.data[0].serviceCategoryName;

      setServiceCategory(data.data);
      setSelectedCategory(params ? params : data.data[0].serviceCategoryId);
      setSelectedCategoryLabel(selectedCategoryLabel);
    });
  };

  const getServiceByCategory = (selectedCategory) => {
    ServicesService.getServices(
      selectedCategory ? selectedCategory : params,
      true
    ).then((res) => {
      setIsLoading(true);

      if (res) {
        setIsLoading(false);
        setServicesData(res.data);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      initData();
    }, [params])
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
          <Text style={FontStyle.Manrope_Bold_16}>{selectedCategoryLabel}</Text>
          <View style={styles.KategoriList_Horizontal}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {serviceCategory &&
                serviceCategory.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      ...styles.KategoriStyle,
                      borderColor:
                        selectedCategory === item.serviceCategoryId
                          ? COLORS.purple
                          : COLORS.grey,
                      backgroundColor:
                        selectedCategory === item.serviceCategoryId
                          ? COLORS.blue_bg
                          : COLORS.white,
                    }}
                    onPress={() => {
                      setSelectedCategory(item.serviceCategoryId);
                      setSelectedCategoryLabel(item.serviceCategoryName);
                      getServiceByCategory(item.serviceCategoryId);
                    }}
                  >
                    <Text
                      style={
                        item.isFocused
                          ? FontStyle.Manrope_Medium_12_Cyan
                          : FontStyle.Manrope_Medium_12
                      }
                    >
                      {item.serviceCategoryName}
                    </Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.KategoriContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {!isLoading &&
              servicesData &&
              servicesData.map((item, index) => (
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
                  <View style={styles.ketegoriBox_Right}>
                    <View style={styles.keterangan_Top}>
                      <Text style={FontStyle.NunitoSans_Regular_16_cyan}>
                        {item.serviceCategoryName}
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

            {!isLoading && servicesData.length <= 0 && (
              <View
                styles={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  border: 1,
                  borderColor: "black",
                }}
              >
                <Text>There is no data...</Text>
              </View>
            )}
            {isLoading && (
              <View
                styles={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Loading...</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>

      <ModalDetailLayanan
        visible={ModalDetail}
        onClose={toggleModal}
        data={selectedItem}
      />
    </SafeAreaView>
  );
}
