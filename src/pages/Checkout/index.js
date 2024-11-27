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
import React from "react";
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

export default function CheckoutScreen({ route }) {
  const navigation = useNavigation();
  const getData = route.params.data;

  useFocusEffect(
    React.useCallback(() => {
      console.log(getData);
      Print_r(getData);
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
                      getData
                        ? convertToIndonesianDate(getData.tanggal)
                        : "invalid date"
                    }
                  />
                  <CheckoutContainerVertical
                    title={"Waktu"}
                    label={getData ? getData.waktu : "invalid Time"}
                    paddingLeft={6}
                  />
                  <CheckoutContainerVertical
                    title={"Spesialis"}
                    label={getData ? getData.spesialis : "Unknown"}
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

                {getData && (
                  <>
                    {getData.layanan.map((item, index) => (
                      <CheckoutContainerHorizontal
                        key={index}
                        title={item.serviceName}
                        label={formatRupiah(item.price)}
                      />
                    ))}
                  </>
                )}

                <LineHorizontal />

                <CheckoutContainerHorizontal
                  title={"Sub Total"}
                  label={formatRupiah(getData.totalHarga)}
                />

                <LineHorizontal
                  isRounded={true}
                  marginVertical={4}
                  height={4}
                />

                <View style={styles.Pembayaran}>
                  <View style={styles.PembayaranImg}>
                    <Image
                      source={getData.jenisPembayaran.img}
                      style={styles.payImgStyle}
                    />
                  </View>
                  <View style={styles.pembayaranDetail}>
                    <Text style={FontStyle.Manrope_Bold_14}>
                      {getData.jenisPembayaran.paymentMethodName}
                    </Text>
                    <Text style={FontStyle.NunitoSans_Regular_14}>
                      28927386289928
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
