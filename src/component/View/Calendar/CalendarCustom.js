import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import moment from 'moment';
moment.locale('id'); // Atur bahasa Indonesia
import ICONS from '../../library/icon_library';
import { getFontSize } from '../../helper/helper';
import COLORS from '../../library/colors_library';
import FontStyle from '../../style/FontStyle';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const bulanIndo = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const hariIndo = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const CustomCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Bulan saat ini
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Tahun saat ini
    const [focusedDate, setFocusedDate] = useState(null); // Tanggal yang difokuskan

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
            setFocusedDate(item.date);
            // alert(`Tanggal dipilih: ${item.date}`);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.navigation}>
                <TouchableOpacity onPress={handlePreviousMonth} style={styles.navButton}>
                    <Image source={ICONS.icon_left} style={styles.navButtonICON} />
                </TouchableOpacity>
                <Text style={FontStyle.Manrope_Bold_14}>
                    {`${bulanIndo[currentMonth]}, ${currentYear}`}
                </Text>
                <TouchableOpacity onPress={handleNextMonth} style={styles.navButton}>
                    <Image source={ICONS.icon_right} style={styles.navButtonICON} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={generateDaysInMonth()}
                keyExtractor={(item) => item.date}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleDatePress(item)}
                        disabled={item.isDisabled}
                        style={[styles.dateContainer,
                        item.isDisabled && styles.disabledDate,
                        item.date === focusedDate && styles.focusedDate,
                        ]}>
                        <Text style={[FontStyle.NunitoSans_Regular_12_grey,
                        // styles.dayName,
                        item.isDisabled && styles.disabledText,
                        item.date === focusedDate && styles.focusedText
                        ]}>{item.dayName}</Text>
                        <Text style={[FontStyle.Manrope_Bold_24,
                        // styles.dayNumber,
                        item.isDisabled && styles.disabledText,
                        item.date === focusedDate && styles.focusedText
                        ]}>
                            {item.dayNumber}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // backgroundColor: 'pink',
        height: responsiveScreenHeight(18)
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    navButton: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        // backgroundColor: '#ddd',
        borderRadius: 5,
    },
    navButtonICON: {
        width: getFontSize(16),
        height: getFontSize(16),
        tintColor: COLORS.cyan

    },
    navText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    monthText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: COLORS.grey_form,
        height: responsiveScreenHeight(10),
        width: responsiveScreenWidth(15),
        borderRadius: responsiveScreenWidth(100)
    },
    dayName: {
        fontSize: 14,
        color: '#888',
    },
    dayNumber: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledDate: {
        opacity: 0.9, // Gaya untuk tanggal yang di-disable
    },
    disabledText: {
        color: '#ccc', // Warna teks untuk tanggal yang di-disable
    },
    focusedDate: {
        backgroundColor: COLORS.purple, // Latar belakang untuk tanggal yang di-fokuskan
    },
    focusedText: {
        color: 'white', // Warna teks untuk tanggal yang di-fokuskan
    },
});

export default CustomCalendar;
