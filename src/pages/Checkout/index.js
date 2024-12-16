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
import React, { useState } from "react";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CheckoutContainerVertical from "../../shared/component/CheckoutComponent/CheckoutContainerVertical";

import LineHorizontal from "../../shared/component/LineHorizontal/LineHorizontal";
import CheckoutContainerHorizontal from "../../shared/component/CheckoutComponent/CheckoutContainerHorizontal";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import HeaderTop from "../../shared/component/Header/Header";
import {
  convertToIndonesianDate,
  copyToClipboard,
  formatRupiah,
  Print_r,
} from "../../shared/helper/helper";
import { getTransactionByNymber } from "../../shared/services/transaction.service";

export default function CheckoutScreen({ route }) {
  const navigation = useNavigation();
  const getData = route.params.data;
  const [transactionData, setTransactionData] = useState({});

  const onGetTransaction = async () => {
    if (getData.order_id) {
      getTransactionByNymber(getData.order_id).then((res) => {
        if (res) {
          setTransactionData(res.data);
          Print_r(res.data); // Gunakan res.data langsung
        }
      });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      onGetTransaction();
      console.log("Route Params:", route.params);
    }, [getData])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />

        <HeaderTop title={"Booking Checkout"} />
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.checkoutBox}>
              <View style={styles.checkoutBox_Content}>
                <View style={styles.row}>
                  <CheckoutContainerVertical
                    title={"Tanggal"}
                    label={
                      transactionData.length > 0 &&
                      transactionData[0].bookingDate
                        ? convertToIndonesianDate(
                            transactionData[0].bookingDate
                          )
                        : "Invalid Date"
                    }
                  />
                  <CheckoutContainerVertical
                    title={"Waktu"}
                    label={"invalid Time"}
                    paddingLeft={6}
                  />
                  <CheckoutContainerVertical
                    title={"Spesialis"}
                    label={
                      transactionData.length > 0 &&
                      transactionData[0].specialistName
                        ? transactionData[0].specialistName
                        : "Unknown"
                    }
                  />
                </View>
                <LineHorizontal isSolid={true} />

                <Text
                  style={{
                    ...FontStyle.NunitoSans_Regular_14,
                    paddingBottom: responsiveScreenHeight(1),
                  }}
                >
                  Layanan
                </Text>

                {transactionData.length > 0 &&
                  transactionData[0].service &&
                  transactionData[0].service.map((item, index) => (
                    <CheckoutContainerHorizontal
                      key={index}
                      title={item.serviceName || "Unknown Service"}
                      label={
                        item.price ? formatRupiah(item.price) : "Unknown Price"
                      }
                    />
                  ))}

                <LineHorizontal />

                <CheckoutContainerHorizontal
                  title={"Sub Total"}
                  label={
                    transactionData.length > 0 && transactionData[0].subtotal
                      ? formatRupiah(transactionData[0].subtotal)
                      : "Unknown"
                  }
                />

                <LineHorizontal
                  isRounded={true}
                  marginVertical={4}
                  height={4}
                />

                <View style={styles.Pembayaran}>
                  <View style={styles.PembayaranImg}>
                    {/* <Image
                      source={{
                        uri: `${PAYMETHOD_MEDIA_BASE_URL}${transactionData.length > 0 && transactionData[0].paymentMethod
                        ? transactionData[0].paymentMethod
                        : "Unknown"}`,
                      }}

                      style={styles.payImgStyle}
                    /> */}
                  </View>
                  <View style={styles.pembayaranDetail}>
                    <Text style={FontStyle.Manrope_Bold_14}>
                      {transactionData.length > 0 &&
                      transactionData[0].paymentMethod
                        ? transactionData[0].paymentMethod
                        : "Unknown"}
                    </Text>
                    <Text style={FontStyle.NunitoSans_Regular_14}>
                      {getData
                        ? getData.va_numbers[0].va_number
                        : "Nomor Tidak Tersedia"}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.pembayaranSalin}
                    onPress={() => copyToClipboard("aslkdhjaksjhdashd")}
                  >
                    <Text style={FontStyle.NunitoSans_Regular_14}>Salin</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.FloatingBottomContainer}>
          <ButtonPurple
            ButtonWidth={94}
            title={"Tutup"}
            ButtonHeight={55}
            onPress={() => navigation.navigate("HistoryScreen")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
