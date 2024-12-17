import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import moment from "moment";
import ICONS from "../../consts/icon.const";
import { styles } from "./style";
import FontStyle from "../../style/font.style";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
moment.locale("id");

const bulanIndo = [
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
const hariIndo = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const CustomCalendar = ({ setTanggal }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [focusedDate, setFocusedDate] = useState(null);

  const today = new Date();

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setFocusedDate(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setFocusedDate(null);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateDaysInMonth = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isDisabled = date < today;
      days.push({
        date: `${currentYear}-${currentMonth + 1}-${day}`,
        dayName: hariIndo[date.getDay()],
        dayNumber: day,
        isDisabled,
      });
    }
    return days;
  };

  const handleDatePress = (item) => {
    if (!item.isDisabled) {
      setFocusedDate(focusedDate === item.date ? null : item.date);
      setTanggal(focusedDate === item.date ? null : item.date);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={handlePreviousMonth}
          style={styles.navButton}
        >
          <Image source={ICONS.icon_left} style={styles.navButtonICON} />
        </TouchableOpacity>
        <Text style={FontStyle.Manrope_Bold_14}>
          {`${bulanIndo[currentMonth]}, ${currentYear}`}
        </Text>
        <TouchableOpacity onPress={handleNextMonth} style={styles.navButton}>
          <Image source={ICONS.icon_right} style={styles.navButtonICON} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: responsiveScreenWidth(100),
          marginBottom: responsiveScreenHeight(2),
          paddingHorizontal: responsiveScreenWidth(3),
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {generateDaysInMonth().map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDatePress(item)}
              disabled={item.isDisabled}
              style={[
                styles.dateContainer,
                item.isDisabled && styles.disabledDate,
                item.date === focusedDate && styles.focusedDate,
              ]}
            >
              <Text
                style={[
                  FontStyle.NunitoSans_Regular_12_grey,
                  item.isDisabled && styles.disabledText,
                  item.date === focusedDate && styles.focusedText,
                ]}
              >
                {item.dayName}
              </Text>
              <Text
                style={[
                  FontStyle.Manrope_Bold_24,
                  item.isDisabled && styles.disabledText,
                  item.date === focusedDate && styles.focusedText,
                ]}
              >
                {item.dayNumber}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* <FlatList
        data={generateDaysInMonth()}
        keyExtractor={(item) => item.date}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          
        )}
      /> */}
    </View>
  );
};

export default CustomCalendar;
