import React from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import styles from "./style";
import ICONS from "../../../consts/icon.const.js";
import FontStyle from "../../../style/font.style.js";
import { MEDIA_BASE_URL } from "../../../consts/base-url.const.js";

const ModalJenisPembayaran = ({
  children,
  visible,
  onClose,
  setSelected,
  data,
}) => {
  const selectItem = (item) => {
    setSelected(item);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <StatusBar
          translucent={false}
          barStyle={"dark-content"}
          backgroundColor={"white"}
        />
        <View style={styles.modal_style}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.headerButtonLeft}
              onPress={() => onClose()}
            >
              <Image style={styles.btnImage} source={ICONS.icon_left} />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
              <Text style={FontStyle.Manrope_Bold_16}>Jenis Pembayaran</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.contentContainer}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.kategoriBox}
                  onPress={() => selectItem(item)}
                >
                  <View style={styles.kategoriBox_Left}>
                    <Image
                      source={{
                        uri: `${MEDIA_BASE_URL}${item.img}`,
                      }}
                      style={styles.kategoriImage}
                    />
                  </View>
                  <View style={styles.ketegoriBox_Center}>
                    <Text style={FontStyle.Manrope_Bold_14}>
                      {item.paymentMethodName}
                    </Text>
                  </View>
                  <View style={styles.ketegoriBox_Right}>
                    <Image
                      source={ICONS.icon_right}
                      style={styles.icon_Right}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalJenisPembayaran;
