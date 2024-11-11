import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import COLORS from '../../component/library/colors_library';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import FontStyle from '../../component/style/FontStyle';

export default function Splash() {
    const navigation = useNavigation();
    useEffect(() => {
        navig();
    }, []);

    const navig = async () => {
        setTimeout(async () => {
            navigation.navigate("Boarding_Screen");
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} />
            <Text style={FontStyle.Manrope_Bold_24_White}>Griya Cantik Lisa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
