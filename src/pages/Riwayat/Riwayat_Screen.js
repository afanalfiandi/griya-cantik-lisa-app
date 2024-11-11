import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Riwayat_Screen() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <StatusBar barStyle={"dark-content"} backgroundColor={'white'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
