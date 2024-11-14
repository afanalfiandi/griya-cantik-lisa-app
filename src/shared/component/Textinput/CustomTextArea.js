import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import COLORS from '../../enum/colors_library';
import { getFontSize } from '../../helper/helper';


const CustomTextArea = ({
    input, setInput, formTitle, placeHolder,
    keyboardType, nameRef, ContainerWidth,
    ContainerPaddingHorizontal, ContainerPaddingLeft,
    ContainerPaddingRight, formPaddingHorizontal,
    isSecureForm, formHeight,
    maxLength, iconForm, minLength, borderRadius, isMultiline,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


    return (
        <View style={[styles.form_style,
        isFocused || input ? styles.inputFocused : null,
        {
            width: responsiveScreenWidth(ContainerWidth ? ContainerWidth : 94),
            paddingHorizontal: responsiveScreenWidth(ContainerPaddingHorizontal ? ContainerPaddingHorizontal : 0),
            paddingVertical: responsiveScreenHeight(1),
            paddingLeft: responsiveScreenWidth(ContainerPaddingLeft ? ContainerPaddingLeft : 0),
            paddingRight: responsiveScreenWidth(ContainerPaddingRight ? ContainerPaddingRight : 0),
            height: formHeight ? formHeight : 120,
            borderRadius: responsiveScreenHeight(1.5)
        }
        ]}>

            <View style={[styles.input_container,
            ]}>
                <TextInput
                    style={{
                        ...
                        styles.inputStyle,
                        paddingLeft: 15
                    }}
                    placeholder={placeHolder ? placeHolder : 'Setting Placeholder'}
                    secureTextEntry={isSecureForm ? isSecureEntry : null}
                    // multiline
                    placeholderTextColor={COLORS.grey_font_form}
                    value={input}
                    onChangeText={setInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    cursorColor={'black'}
                    ref={nameRef}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    maxLength={maxLength}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formTitle: {
        fontSize: 12
    },
    form_style: {
        flexDirection: "row",
        width: "100%",
        // borderRadius: responsiveScreenHeight(50),
        marginVertical: 4.5,
        // borderWidth: 1,
        // borderColor: "grey",
        marginBottom: 16,
        backgroundColor: COLORS.grey_form

    },
    inputStyle: {
        // backgroundColor: 'pink',
        fontFamily: 'Manrope-Medium',
        fontSize: getFontSize(14),
        color: COLORS.cyan,
        height: '100%',
        textAlignVertical: 'top'
    },
    inputFocused: {
        borderWidth: 1,
        borderColor: COLORS.cyan,
        backgroundColor: 'white',
        color: COLORS.cyan
    },
    image_container: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: 'flex-end',
        // backgroundColor: 'pink',
        paddingRight: '2%'
    },
    icon_style: {
        width: getFontSize(16),
        height: getFontSize(16),
        tintColor: COLORS.purple,
    },
    input_container: {
        // backgroundColor: "yellow",
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    show_container: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'pink',
        // opacity: 0.5,
    },
});

export default CustomTextArea;
