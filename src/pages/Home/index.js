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
import Layanan from "../../shared/component/Layanan/Layanan";
import Layanan_Horizontal from "../../shared/component/Layanan/Layanan_Horizontal";
import COLORS from "../../shared/consts/colors.const";
import { DATA_HairCare } from "../../shared/services/DATA_HairCare";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import React, { useState } from "react";
import { getServiceCategory } from "../../shared/services/service_category";
import UserSessionUtils from "../../shared/utils/user-session.utils";
import HomeService from "./home.service";
import {
  BANNER_MEDIA_BASE_URL,
  SERVICE_MEDIA_BASE_URL,
} from "../../shared/consts/base-url.const";
import ServicesService from "../../shared/services/services.service";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [serviceCategoryData, setServiceCategoryData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [mostLookedFor, setMostLookedFor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onFavourite = async () => {
    navigation.navigate("FavouriteScreen");
  };

  useFocusEffect(
    React.useCallback(() => {
      initData();
    }, [])
  );

  const initData = () => {
    getUser();
    onGetServiceCategory();
    onGetBanner();
  };

  const getUser = async () => {
    const data = JSON.parse(await UserSessionUtils.getUserSession());

    setUserData(data);
  };

  const onGetServiceCategory = () => {
    getServiceCategory().then((data) => {
      setSelectedCategory(data.data[0].serviceCategoryId);
      setServiceCategoryData(data.data);

      onGetServiceByCategory(selectedCategory);
    });
  };

  const onGetBanner = () => {
    HomeService.getBanner().then((res) => {
      setBannerData(res.data);
    });
  };

  const onGetServiceByCategory = (params) => {
    ServicesService.getServices(params, true).then((res) => {
      setIsLoading(true);
      setMostLookedFor(res.data);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar
            translucent={false}
            barStyle={"dark-content"}
            backgroundColor={"white"}
          />
          <View style={styles.TopContainer}>
            <View style={styles.TopContainer_Left}>
              <Text style={FontStyle.Manrope_Bold_24} numberOfLines={1}>
                Halo, {userData != null ? userData.firstName : ""}
              </Text>
              <Text
                style={{ ...FontStyle.NunitoSans_Regular_14, marginTop: 5 }}
              >
                Find the service you want, and treat yourself
              </Text>
            </View>
            {/* <View style={styles.TopContainer_Right}>
              <TouchableOpacity onPress={onFavourite}>
                <Image
                  source={ICONS.icon_heart}
                  style={styles.icon_Heart_style}
                />
              </TouchableOpacity>
            </View> */}
          </View>

          <View style={styles.CardContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {bannerData &&
                bannerData.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      source={{
                        uri: `${BANNER_MEDIA_BASE_URL}${item.img}`,
                      }}
                      style={styles.CardStyle}
                    />
                  );
                })}
            </ScrollView>
          </View>

          <View style={styles.LayananContainer}>
            <Text style={FontStyle.Manrope_Bold_16}>Layanan</Text>
            <View style={styles.LayananList}>
              {serviceCategoryData &&
                serviceCategoryData.map((item, index) => (
                  <Layanan
                    key={index}
                    iconLayanan={item.img}
                    labelLayanan={item.serviceCategoryName}
                    onPress={() =>
                      navigation.navigate("ExploreScreen", {
                        data: item.serviceCategoryId,
                      })
                    }
                  />
                ))}
            </View>
          </View>

          <View style={styles.PalingDicariContainer}>
            <Text style={FontStyle.Manrope_Bold_16}>Paling Dicari</Text>
            <View style={styles.LayananList_Horizontal}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {serviceCategoryData &&
                  serviceCategoryData.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        opacity:
                          selectedCategory == item.serviceCategoryId ? 1 : 0.5,
                      }}
                    >
                      <Layanan_Horizontal
                        key={index}
                        iconLayanan={item.img}
                        labelLayanan={item.serviceCategoryName}
                        onPress={() => {
                          setSelectedCategory(item.serviceCategoryId);
                          onGetServiceByCategory(item.serviceCategoryId);
                        }}
                      />
                    </View>
                  ))}
              </ScrollView>
            </View>
          </View>

          <View style={styles.KategoriContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {mostLookedFor &&
                mostLookedFor.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.kategoriBox}>
                    <View style={styles.kategoriBox_Left}>
                      <Image
                        source={{
                          uri: `${SERVICE_MEDIA_BASE_URL}${item.img[0].img}`,
                        }}
                        style={styles.kategoriImage}
                      />

                      {/* <TouchableOpacity style={styles.likeContainer}>
                        <Image
                          source={ICONS.icon_heart}
                          style={{
                            ...styles.icon_Heart_style,
                            tintColor: COLORS.pink_solid,
                          }}
                        />
                      </TouchableOpacity> */}
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

                        <TouchableOpacity style={styles.buttonBoking}>
                          <Text style={FontStyle.Manrope_Bold_10_Cyan}>
                            Booking
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}

              {mostLookedFor.length == 0 && (
                <View style={[styles.noDataWrapper]}>
                  <Text>There is no data</Text>
                </View>
              )}

              {isLoading && (
                <View style={[styles.noDataWrapper]}>
                  <Text>Loading...</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
