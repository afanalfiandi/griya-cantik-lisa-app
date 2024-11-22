import React, { useState } from "react";
import {
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
import { convertToIndonesianDate, formatRupiah, getFontSize } from "../../shared/helper/helper";

export default function HistoryScreen() {
  const [DataRiwayat, setDataRiwayat] = useState([]);

  const fetchDataRiwayat = async () => {
    try {
      const allData = await getDataRiwayat();
      setDataRiwayat(allData || []);
    } catch (error) {
      console.error("Gagal mengambil data riwayat:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchDataRiwayat();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HeaderTop title={"Riwayat"} />
      {DataRiwayat && DataRiwayat.length > 0 ? (
        DataRiwayat.map((item, index) => (
          <View key={index} style={styles.kategoriBox}>
            <Text style={FontStyle.Manrope_Medium_12}>{convertToIndonesianDate(item.tanggal)}</Text>
            <Text style={FontStyle.Manrope_Bold_14_Cyan}>{formatRupiah(item.totalHarga)}</Text>
            <View style={styles.laynanHorizontal}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {item.layanan.map((item, index) => (
                  <>
                    <Text key={index} style={{ ...FontStyle.Manrope_Bold_14, ...styles.LayananItem }}>{item.serviceName}</Text>
                  </>
                ))
                }
              </ScrollView>
            </View>

            <Text style={{ ...FontStyle.NunitoSans_Regular_12_grey, textAlign: 'right', marginTop: getFontSize(20) }}>Lihat Nota</Text>
          </View>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Anda belum memiliki riwayat pemesanan.</Text>
        </View>
      )}
    </View>
  );
}


