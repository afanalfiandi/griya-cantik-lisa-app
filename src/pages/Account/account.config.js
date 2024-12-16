import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const pickImage = async (setFoto) => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1], // Menambahkan rasio 1:1
    });

    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setFoto(uri);
    } else {
      Alert.alert("Pemilihan gambar dibatalkan");
    }
  } catch (error) {
    Alert.alert("Terjadi kesalahan saat memilih gambar");
    console.error("Error saat memilih gambar:", error);
  }
};
