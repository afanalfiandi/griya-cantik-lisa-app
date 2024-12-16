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
import React, { useState, createRef } from "react";
import { DATA_Spesialis } from "../../shared/services/DATA_Spesialis";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import CustomCalendar from "../../shared/component/Calendar/CalendarCustom";
import CustomTextArea from "../../shared/component/Textinput/CustomTextArea";
import ButtonPurple from "../../shared/component/Button/ButtonPurple";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import HeaderTop from "../../shared/component/Header/Header";
import {
  calculateTotalPrice,
  calculateTotalPriceToString,
  formatRupiah,
  normalizeData,
  Print_r,
} from "../../shared/helper/helper";
import ModalJenisPembayaran from "../../shared/component/Modal/ModalJenisPembayaran/ModalJenisPembayaran";
import {
  addDataRiwayat,
  deleteDataServices,
  getDataServices,
} from "../../shared/services/Asycnstorage";
import { getSpecialist } from "../../shared/services/specialist.service";
import { getSlot } from "../../shared/services/slot.service";
import { getPaymentMethod } from "../../shared/services/payment-method.service";
import UserSessionUtils from "../../shared/utils/user-session.utils";
import moment from "moment";
import { transactionService } from "./booking.config";
import { MEDIA_BASE_URL } from "../../shared/consts/base-url.const";
export default function BookingScreen({}) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [ModalDetail, setModalDetail] = useState(false);
  const [TanggalBooking, setTanggalBooking] = useState("");
  const [ModalPembayaran, setModalPembayaran] = useState(false);
  const [SelectedItem, setSelectedItem] = useState([]);
  const [selectedSpesialisID, setSelectedSpesialisID] = useState(null);
  const [selectedSpesialisName, setSelectedSpesialisName] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState([]);
  const [catatan, setCatatan] = useState("");
  const [specialistData, setSpecialistData] = useState([]);
  const [slotData, setSlotData] = useState([]);
  const [paymentMethodData, setPaymentMethodData] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const catatanRef = createRef();

  const toggleModal = () => {
    setModalDetail(!ModalDetail);
  };
  const toggleModalPembayaran = () => {
    setModalPembayaran(!ModalPembayaran);
  };
  const selectItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };

  const sendToCheckout = async () => {
    setIsLoading(true);
    const userData = JSON.parse(await UserSessionUtils.getUserSession());

    const services = selectedService.map((item, index) => {
      return { [`service[${index}]`]: item.serviceId };
    });

    const serviceData = services.reduce(
      (acc, curr) => ({ ...acc, ...curr }),
      {}
    );
    const serviceIds = selectedService.map((item) => item.serviceId);
    const payload = {
      customerID: userData.customerID,
      firstName: userData.firstName,
      lastName: userData.lastName,
      subtotal: calculateTotalPrice(selectedService),
      slotID: selectedTime,
      paymentMethodID: selectedPaymentMethod.paymentMethodID,
      specialistID: selectedSpesialisID,
      bookingDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      dateFor: TanggalBooking,
      notes: catatan,
      paymentType: selectedPaymentMethod.payment_type,
      bank: selectedPaymentMethod.value,
      service: serviceIds,
      // ...serviceData,
    };

    try {
      const result = await transactionService(payload);
      if (result) {
        console.log("result => ", result);
        setIsLoading(false);
        navigation.navigate("CheckoutScreen", {
          data: result,
        });

        setSelectedPaymentMethod([]);
        setSelectedService([]);
        setSelectedTime(null);
        setSelectedSpesialisID(null);
        setSelectedSpesialisName(null);
        setTanggalBooking("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getDataUser = async () => {
    const userData = JSON.parse(await UserSessionUtils.getUserSession());
  };

  const fetchDataRiwayat = async () => {
    const allData = await getDataServices();
    setSelectedService(allData || []);
    fetchDataRiwayat2();
  };

  const fetchDataRiwayat2 = async () => {
    const allData = await getDataServices();
    setSelectedService(allData || []);
  };

  // Fungsi untuk menghapus layanan
  const onDeleteServices = (services) => {
    deleteDataServices(services.serviceId);
    fetchDataRiwayat(); // Memanggil fetchDataRiwayat setelah penghapusan
  };
  useFocusEffect(
    React.useCallback(() => {
      setSelectedService([]);
      fetchDataRiwayat();
      initData();
    }, [])
  );

  const initData = () => {
    getSpecialist().then((res) => {
      if (res) {
        setSpecialistData(res.data);
        setSelectedSpesialisID(res.data[0].specialistID);
        setSelectedSpesialisName(res.data[0].specialistName);
      }
    });

    getSlot().then((res) => {
      if (res) {
        setSlotData(res.data);
        setSelectedTime(res.data[0].slotID);
      }
    });

    getPaymentMethod().then((res) => {
      if (res) {
        setPaymentMethodData(res.data);
        setSelectedPaymentMethod(res.data[0]);
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />
        <HeaderTop title={"Booking Layanan"} route={"HomeScreen"} />
        <ScrollView>
          <View style={styles.contentContainer}>
            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Jenis Layanan</Text>
              <TouchableOpacity
                style={styles.TambahStyle}
                onPress={() => navigation.navigate("ServicesScreen")}
              >
                <Image style={styles.btnPlus} source={ICONS.icon_plus} />
                <Text style={FontStyle.Manrope_Medium_14_Cyan}>Tambah</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.KategoriContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {selectedService.length !== 0 && (
                  <>
                    {selectedService.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.kategoriBox}
                        onPress={() => selectItem(item)}
                      >
                        <View style={styles.kategoriBox_Left}>
                          <Image
                            source={{
                              uri: `${MEDIA_BASE_URL}${item.img[0].img}`,
                            }}
                            style={styles.kategoriImage}
                          />
                        </View>
                        <View style={styles.ketegoriBox_Center}>
                          <View style={styles.keterangan_Top}>
                            <Text style={FontStyle.Manrope_Bold_16}>
                              {item.serviceName}
                            </Text>
                            <View style={styles.keterangan_Bot}>
                              <Text style={FontStyle.Manrope_Bold_16_Cyan}>
                                {formatRupiah(item.price)}{" "}
                              </Text>
                              <View style={styles.dot} />
                              <Text
                                style={FontStyle.NunitoSans_Regular_12_grey}
                              >
                                {item.serviceCategoryName}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.ketegoriBox_Right}>
                          <TouchableOpacity
                            style={styles.plusminus_style}
                            onPress={() => onDeleteServices(item)}
                          >
                            <Image
                              source={ICONS.icon_minus}
                              style={styles.iconplus_minus}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </>
                )}

                {selectedService.length <= 0 && (
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 20,
                    }}
                  >
                    <Text>Tidak ada layanan yang dipilih</Text>
                  </View>
                )}
              </ScrollView>
            </View>

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Spesialis</Text>
            </View>

            <View style={styles.SpesialisList_Horizontal}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {specialistData &&
                  specialistData.map((item, index) => (
                    <View key={index} style={styles.SpesialisStyle}>
                      <TouchableOpacity
                        style={{
                          ...styles.spesialisPhotos_Container,
                          borderColor:
                            selectedSpesialisID === item.specialistID
                              ? COLORS.purple
                              : COLORS.grey,
                          borderWidth:
                            selectedSpesialisID === item.specialistID
                              ? responsiveScreenWidth(1)
                              : 0,
                        }}
                        onPress={() => {
                          setSelectedSpesialisID(
                            selectedSpesialisID === item.specialistID
                              ? null
                              : item.specialistID
                          );
                          setSelectedSpesialisName(
                            setSelectedSpesialisName === item.specialistName
                              ? null
                              : item.specialistName
                          );
                        }}
                      >
                        <Image
                          source={{
                            uri: `${MEDIA_BASE_URL}${item.img}`,
                          }}
                          style={styles.spesialisPhotos_Style}
                        />
                        {selectedSpesialisID === item.specialistID && (
                          <View style={styles.spesialisFocus}>
                            <Image
                              style={styles.iconCheck}
                              source={ICONS.icon_check}
                            />
                          </View>
                        )}
                      </TouchableOpacity>
                      <Text style={FontStyle.Manrope_Medium_14_}>
                        {item.specialistName}
                      </Text>
                    </View>
                  ))}
              </ScrollView>
            </View>

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Tanggal</Text>
            </View>

            <CustomCalendar setTanggal={setTanggalBooking} />

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Waktu</Text>
            </View>

            <View style={styles.KategoriList_Horizontal}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {slotData.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      ...styles.KategoriStyle,
                      borderColor:
                        item.slotID == selectedTime
                          ? COLORS.purple
                          : COLORS.grey,
                      backgroundColor:
                        item.slotID == selectedTime
                          ? COLORS.blue_bg
                          : COLORS.white,
                      opacity: item.isDisable ? 0.3 : 1,
                    }}
                    onPress={() => {
                      setSelectedTime(
                        selectedTime === item.slotID ? null : item.slotID
                      );
                      // setSelectedSpesialisName(setSelectedSpesialisName === item.specialistName ? null : item.specialistName);
                    }}
                    disabled={item.isDisable}
                  >
                    <Text
                      style={
                        item.time == selectedTime
                          ? FontStyle.Manrope_Medium_12_Cyan
                          : FontStyle.Manrope_Medium_12
                      }
                    >
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Jenis Pembayaran</Text>
              <TouchableOpacity
                style={styles.TambahStyle}
                onPress={() => toggleModalPembayaran()}
              >
                <Text style={FontStyle.Manrope_Medium_14_Cyan}>
                  {!selectedPaymentMethod ? "Pilih" : "Ubah"}
                </Text>
              </TouchableOpacity>
            </View>

            {selectedPaymentMethod && (
              <View style={styles.PembayaranImageContainer}>
                <Image
                  source={{
                    uri: `${MEDIA_BASE_URL}${selectedPaymentMethod.img}`,
                  }}
                  style={styles.PembayaranImage}
                />
              </View>
            )}

            <View style={styles.jenisLayananTambah_Container}>
              <Text style={FontStyle.Manrope_Bold_14}>Catatan</Text>
            </View>

            <CustomTextArea
              input={catatan}
              setInput={setCatatan}
              nameRef={catatanRef}
              placeHolder={"Tuliskan catatan (Opsional)"}
            />
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
              Rp. {calculateTotalPriceToString(selectedService)}
            </Text>
          </View>
          <View style={styles.FloatingBottomRight}>
            <ButtonPurple
              ButtonWidth={53}
              title={isLoading ? "Loading" : "Booking"}
              ButtonHeight={55}
              onPress={() => sendToCheckout()}
            />
          </View>
        </View>
      </View>

      <ModalJenisPembayaran
        visible={ModalPembayaran}
        onClose={() => setModalPembayaran(false)}
        setSelected={setSelectedPaymentMethod}
        data={paymentMethodData}
      />
    </SafeAreaView>
  );
}
