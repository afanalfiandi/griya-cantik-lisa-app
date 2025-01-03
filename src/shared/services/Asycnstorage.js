import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const DATA_KEY = "selectedServices";
const DATA_KEY_riwayat = "riwayat_checkout";

export const getUserSession = async (setData) => {
  try {
    const userSession = await AsyncStorage.getItem("user_session");
    if (userSession) {
      const userObject = JSON.parse(userSession);
      const userArray = [userObject];
      setData(userArray);
    }
  } catch (error) {
    console.error("Error fetching user session:", error);
  }
};

// **CREATE**: Tambah Data Baru
export const addDataServices = async (newData) => {
  try {
    const existingData = await getDataServices();
    const updatedData = [...(existingData || []), newData];
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
  } catch (error) {
    Alert.alert("Gagal menambahkan data");
    console.error("Gagal menambahkan data:", error);
  }
};

// **READ**: Ambil Data
export const getDataServices = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return [];
  }
};

// **DELETE**: Hapus Data Berdasarkan serviceId
export const deleteDataServices = async (serviceId) => {
  try {
    const existingData = await getDataServices();
    const updatedData = existingData.filter(
      (item) => item.serviceId !== serviceId
    );
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
    Alert.alert("Berhasil dihapus!");
  } catch (error) {
    console.error("Gagal menghapus data:", error);
  }
};

// **CREATE**: Tambah Data Baru
export const addDataLiked = async (newData) => {
  try {
    const existingData = await getDataLiked();
    const updatedData = [...(existingData || []), newData];
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
    Alert.alert("Berhasil ditambahkan!");
  } catch (error) {
    Alert.alert("Gagal menambahkan data!");
    console.error("Gagal menambahkan data:", error);
  }
};

// **READ**: Ambil Data
export const getDataLiked = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return [];
  }
};

// **UPDATE**: Perbarui Data Berdasarkan ID
export const updateDataLiked = async (serviceId, updatedFields) => {
  try {
    const existingData = await getDataLiked();
    const updatedData = existingData.map((item) =>
      item.serviceId === serviceId ? { ...item, ...updatedFields } : item
    );
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
    Alert.alert("Data berhasil diperbarui!");
  } catch (error) {
    console.error("Gagal memperbarui data:", error);
  }
};

// **DELETE**: Hapus Data Berdasarkan serviceId
export const deleteDataLiked = async (serviceId) => {
  try {
    const existingData = await getDataLiked();
    const updatedData = existingData.filter(
      (item) => item.serviceId !== serviceId
    );
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updatedData));
  } catch (error) {
    Alert.alert("Gagal menghapus data");
    console.error("Gagal menghapus data:", error);
  }
};

export const addDataRiwayat = async (newData) => {
  try {
    const existingData = await getDataRiwayat();
    const updatedData = [...(existingData || []), newData];
    await AsyncStorage.setItem(DATA_KEY_riwayat, JSON.stringify(updatedData));
    Alert.alert("Berhasil ditambahkan!");
  } catch (error) {
    Alert.alert("Gagal menambahkan data!");
    console.error("Gagal menambahkan data:", error);
  }
};

export const getDataRiwayat = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(DATA_KEY_riwayat);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Gagal membaca data:", error);
    return [];
  }
};

// const exampleUsage = async () => {
//     // Tambah Data Baru
//     const newItem = {
//       id: 3,
//       nama: "Smoothing Rambut",
//       kategori: "Hair Care",
//       harga: 250000,
//       image: "ICONS.kategori_3",
//       keterangan: "Deskripsi produk smoothing rambut.",
//       isLoved: false,
//       imageDetail: [
//         { id: 1, image: "ICONS.kategori_3" },
//         { id: 2, image: "ICONS.kategori_3" },
//       ],
//     };
//     await addData(newItem);

//     // Ambil Data
//     const allData = await getData();

//     // Perbarui Data
//     await updateData(2, { harga: 350000, isLoved: true });

//     // Hapus Data
//     await deleteData(1);

//     // Ambil Data Lagi Setelah Perubahan
//     const updatedData = await getData();
//   };
