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
import React, { useState } from "react";
import ModalDetailLayanan from "../../shared/component/Modal/ModalDetail/ModalDetail";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { formatRupiah, Print_r } from "../../shared/helper/helper";
import HeaderTop from "../../shared/component/Header/Header";
import {
  deleteDataLiked,
  getDataLiked,
} from "../../shared/services/Asycnstorage";
import { useToast } from "react-native-toast-notifications";

export default function FavouriteScreen() {
  const toast = useToast();
  const navigation = useNavigation();
  const [ModalDetail, setModalDetail] = useState(false);
  const [SelectedItem, setSelectedItem] = useState([]);
  const [DataLiked, setDataLiked] = useState([]);

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const selectItem = (item) => {
    console.log(item);
    setSelectedItem(item);
    toggleModal();
  };

  const fetchDataLiked = async () => {
    // Ambil Data
    const allData = await getDataLiked();
    Print_r(allData);
    setDataLiked(allData);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchDataLiked();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />

        <HeaderTop
          title={"Disukai"}
          NavigateTo={() => navigation.navigate("HomeScreen")}
        />

        <View style={styles.KategoriContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {DataLiked.length !== 0 ? (
              <>
                {DataLiked.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.kategoriBox}
                    onPress={() => selectItem(item)}
                  >
                    <View style={styles.kategoriBox_Left}>
                      <Image source={item.assets[0].img} style={styles.kategoriImage} />

                      <TouchableOpacity
                        style={styles.likeContainer}
                        onPress={() => deleteDataLiked(item.serviceId, toast)}
                      >
                        <Image
                          source={ICONS.icon_heart}
                          style={{
                            ...styles.icon_Heart_style,
                            tintColor: COLORS.pink_solid,
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
                            navigation.navigate("BookingScreen", {
                              data: item,
                            })
                          }
                        >
                          <Text style={FontStyle.Manrope_Bold_10_Cyan}>
                            Boking
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <View>
                <Text>adan belum memiliki produk yang di sukai</Text>
              </View>
            )}
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
