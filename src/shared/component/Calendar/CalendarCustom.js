import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import moment from "moment";
moment.locale("id");
import ICONS from "../../consts/icon.const";
import { styles } from "./style";
import FontStyle from "../../style/font.style";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { getFontSize } from "../../helper/helper";
import COLORS from "../../consts/colors.const";
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

  const generateCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const days = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isDisabled = date < today;
      days.push({
        date: `${currentYear}-${currentMonth + 1}-${day}`,
        dayNumber: day,
        isDisabled,
      });
    }

    return days;
  };

  const handleDatePress = (item) => {
    if (item && !item.isDisabled) {
      setFocusedDate(focusedDate === item.date ? null : item.date);
      setTanggal(focusedDate === item.date ? null : item.date);
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation */}
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

      {/* Days of the week */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {hariIndo.map((day, index) => (
          <Text key={index} style={{ ...FontStyle.Manrope_Bold_24, fontSize: getFontSize(12) }}>
            {day}
          </Text>
        ))}
      </View>

      {/* Dates */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          // justifyContent: "space-between",
          marginTop: 8,
          alignItems: 'center',
          width: responsiveScreenWidth(100),
          paddingLeft: 5
        }}
      >
        {generateCalendarGrid().map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleDatePress(item)}
            disabled={!item || item.isDisabled}
            style={{
              ...styles.dateContainer,
              backgroundColor:
                item && item.date === focusedDate ? COLORS.purple : "white",
              // borderRadius: 20,
              // borderWidth: 1,
              // borderColor: "#ccc",
              // opacity: item?.isDisabled ? 0.5 : 1,
            }}
          >
            <Text style={{
              ...FontStyle.Manrope_Bold_24,
              fontSize: getFontSize(12),
              color: item && item.date === focusedDate ? "white" : (item?.isDisabled ? 'grey' : 'black')
            }}>
              {item ? item.dayNumber : ""}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomCalendar;
