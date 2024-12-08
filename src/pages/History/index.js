import React, { useCallback, useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getDataRiwayat } from "../../shared/services/Asycnstorage";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./style";
import HeaderTop from "../../shared/component/Header/Header";
import FontStyle from "../../shared/style/font.style";
import {
  convertToIndonesianDate,
  formatRupiah,
  getFontSize,
} from "../../shared/helper/helper";
import { getTransaction } from "../../shared/services/transaction.service";
import UserSessionUtils from "../../shared/utils/user-session.utils";
import ICONS from "../../shared/consts/icon.const";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

export default function HistoryScreen() {

  const [transactionData, setTransactionData] = useState([]);
  const [refreshing, setRefreshing] = useState(false); // refresh refreshcontrol
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    initData();

    wait(2000).then(() => setRefreshing(false));
  }, []);


  useFocusEffect(
    React.useCallback(() => {
      initData();

    }, [])
  );

  const initData = () => {
    onGetTransaction();
  };

  const onGetTransaction = async () => {
    const customerData = JSON.parse(await UserSessionUtils.getUserSession());

    getTransaction(customerData.customerID).then((res) => {
      if (res) {
        setTransactionData(res.data);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HeaderTop title={"Riwayat"} route={'HomeScreen'} />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
        <View>
          {transactionData && transactionData.length > 0 ? (
            transactionData.map((item, index) => (
              <View key={index} style={styles.kategoriBox}>
                <Text style={FontStyle.Manrope_Medium_12}>
                  {convertToIndonesianDate(item.bookingDate)}
                </Text>
                <Text style={FontStyle.Manrope_Bold_14_Cyan}>
                  {formatRupiah(item.subtotal)}
                </Text>
                <View style={styles.laynanHorizontal}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {item.service && item.service.length > 0 ? (
                      item.service.map((item, index) => (
                        <Text
                          key={index}
                          style={{
                            ...FontStyle.Manrope_Bold_14,
                            ...styles.LayananItem,
                          }}
                        >
                          {item.serviceName}
                        </Text>
                      ))
                    ) : (
                      <Text>No services available</Text> // Menangani jika item.layanan kosong atau tidak ada
                    )}
                  </ScrollView>
                </View>

                <Text
                  style={{
                    ...FontStyle.NunitoSans_Regular_12_grey,
                    textAlign: "right",
                    marginTop: getFontSize(20),
                  }}
                >
                  Lihat Nota
                </Text>
              </View>
            ))
          ) : (
            <View
              style={{
                alignItems: "center",
                width: responsiveScreenWidth(94),
                height: responsiveScreenHeight(60),
                justifyContent: "center",
              }}
            >
              <Image source={ICONS.icon_nodata_bg} style={styles.noDataStyle} />
              <Text style={FontStyle.NunitoSans_Regular_12_grey}>
                Belum ada riwayat pemesanan...
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
