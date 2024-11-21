import { useNavigation } from "@react-navigation/native";
import { Alert, PixelRatio, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
const fontScale = PixelRatio.getFontScale();

//? ======================= GET FONT SIZE =======================
export const getFontSize = (size) => size / fontScale;

export function formatRupiah(number) {
  if (isNaN(number)) {
    return "invalid data";
  }
  return (
    "Rp " +
    parseInt(number)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}

export const calculateTotalPrice = (DATA) => {
  return DATA.reduce((total, item) => total + item.price, 0);
};

export const calculateTotalPriceToString = (DATA) => {
  // {calculateTotalPrice().toLocaleString()}
  return DATA.reduce((total, item) => total + item.price, 0).toLocaleString();
};

export const normalizeData = (data) => {
  if (!Array.isArray(data)) {
    return [data];
  }
  return data;
};

export const Print_r = (data) => {
  console.log(JSON.stringify(data, null, 2));
};

export const copyToClipboard = async (text) => {
  await Clipboard.setStringAsync(text);
};

export const NavigateTo = (address) => {
  const navigation = useNavigation();
  navigation.navigate(address ? address : "HomeScreen");
};

export const NavigateToWithParams = (address, params) => {
  const navigation = useNavigation();
  navigation.navigate(address ? address : "HomeScreen", {
    data: params,
  });
};

export const convertToIndonesianDate = (inputDate) => {
  // Tambahkan penanganan kesalahan untuk memeriksa apakah inputDate adalah string
  if (typeof inputDate !== "string") {
    console.error("Invalid input: inputDate should be a string");
    return "Invalid Date";
  }

  // Membuat objek Date dari string
  const dateObject = new Date(inputDate);

  // Mendapatkan tahun, bulan, dan hari dari objek Date
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();

  // Nama-nama bulan dalam bahasa Indonesia
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Mengambil nama bulan berdasarkan indeks bulan
  const monthName = months[month];

  // Mengembalikan tanggal dalam format yang diinginkan
  return `${day} ${monthName} ${year}`;
};

export const convertToIndonesianDate_Lengkap = (inputDate) => {
  // Tambahkan penanganan kesalahan untuk memeriksa apakah inputDate adalah string
  if (typeof inputDate !== "string") {
    console.error("Invalid input: inputDate should be a string");
    return "Invalid Date";
  }

  // Membuat objek Date dari string
  const dateObject = new Date(inputDate);

  // Memeriksa apakah objek Date valid
  if (isNaN(dateObject.getTime())) {
    console.error("Invalid Date object");
    return "Invalid Date";
  }

  // Mendapatkan tahun, bulan, dan hari dari objek Date
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();

  // Mendapatkan jam, menit, dan detik dari objek Date
  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const seconds = dateObject.getSeconds().toString().padStart(2, "0");

  // Nama-nama bulan dalam bahasa Indonesia
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Mengambil nama bulan berdasarkan indeks bulan
  const monthName = months[month];

  // Mengembalikan tanggal dan waktu dalam format yang diinginkan
  return `${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`;
};

export const convertToIndonesianDateSingkat = (inputDate) => {
  const monthsAbbreviation = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  const [year, month, day] = inputDate.split("-");
  const monthAbbreviation = monthsAbbreviation[parseInt(month, 10) - 1];

  return `${day} ${monthAbbreviation} ${year}`;
};
