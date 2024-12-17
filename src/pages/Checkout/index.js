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
import { MEDIA_BASE_URL } from "../../shared/consts/base-url.const";

export default function CheckoutScreen({ route }) {
  const navigation = useNavigation();
  const getData = route.params.data;
  const [transactionData, setTransactionData] = useState({});
  const [bankImg, setBankImg] = useState("");

  const onGetTransaction = async () => {
    if (getData) {
      getTransactionByNymber(getData.midtrans_response.order_id).then((res) => {
        if (res && res.data && res.data.length > 0) {
          setTransactionData(res.data[0]);
          if (getData.midtrans_response.va_numbers[0].bank === "bca") {
            setBankImg("bca.png");
          } else if (getData.midtrans_response.va_numbers[0].bank === "bni") {
            setBankImg("bni.png");
          } else if (getData.midtrans_response.va_numbers[0].bank === "bri") {
            setBankImg("bri.png");
          } else {
            setBankImg("permata.png");
          }
        }
      });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      onGetTransaction();
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
                      transactionData
                        ? transactionData.bookingDate
                        : "Invalid Date"
                    }
                  />
                  <CheckoutContainerVertical
                    title={"Waktu"}
                    label={transactionData ? transactionData.time : "Unknown"}
                    paddingLeft={6}
                  />
                  <CheckoutContainerVertical
                    title={"Spesialis"}
                    label={
                      transactionData
                        ? transactionData.specialistName
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

                {transactionData &&
                  transactionData.service &&
                  transactionData.service.map((item, index) => (
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
                    transactionData && transactionData.subtotal
                      ? formatRupiah(transactionData.subtotal)
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
                    <Image
                      source={{
                        uri: `${MEDIA_BASE_URL}${bankImg}`,
                      }}
                      style={styles.payImgStyle}
                    />
                  </View>
                  <View style={styles.pembayaranDetail}>
                    <Text style={FontStyle.Manrope_Bold_14}>
                      {transactionData
                        ? transactionData.paymentMethod
                        : "Unknown"}
                    </Text>
                    <Text style={FontStyle.NunitoSans_Regular_14}>
                      {getData
                        ? transactionData.vaNumber
                        : "Nomor Tidak Tersedia"}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.pembayaranSalin}
                    onPress={() => copyToClipboard(transactionData.vaNumber)}
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
