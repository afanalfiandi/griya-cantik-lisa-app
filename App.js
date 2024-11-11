import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View } from 'react-native';
import Home_Screen from './src/pages/Home/Home_Screen';
import Splash from './src/pages/Splash/Splash_Screen';

import { useFonts } from 'expo-font';
import { fontImports } from './src/component/library/font_library';
import { getFontSize } from './src/component/helper/helper';
import styles from './App_Style';
import COLORS from './src/component/library/colors_library';
import ICONS from './src/component/library/icon_library';
import Explore_Screen from './src/pages/Explore/Explore_Screen';
import Riwayat_Screen from './src/pages/Riwayat/Riwayat_Screen';
import Akun_Screen from './src/pages/Akun/Akun_Screen';
import Boarding_Screen from './src/pages/Boarding/Boarding_Screen';
import Login_Screen from './src/pages/Login/Login_Screen';
import Booking_Screen from './src/pages/Booking/Booking_Screen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(fontImports);
  if (!fontsLoaded) {
    return null;
  }

  const tabScreens = [
    {
      name: 'Home_Screen',
      component: Home_Screen,
      title: 'Home',
      showIcon: true,
      iconSource: ICONS.tab_menu_home,
      headerShown: false,
    },
    {
      name: 'Explore_Screen',
      component: Explore_Screen,
      title: 'Kategori',
      showIcon: true,
      iconSource: ICONS.tab_menu_explore,
      headerShown: false,
    },
    {
      name: 'Riwayat_Screen',
      component: Riwayat_Screen,
      title: 'Riwayat',
      showIcon: true,
      iconSource: ICONS.tab_menu_riwayat,
      headerShown: false,
    },
    {
      name: 'Akun_Screen',
      component: Akun_Screen,
      title: 'Akun',
      showIcon: true,
      iconSource: ICONS.tab_menu_akun,
      headerShown: false,
    },
    {
      name: 'Boarding_Screen',
      component: Boarding_Screen,
      title: '',
      headerShown: false,
      headerTransparent: true,
      hideTabBar: true,
    },
    {
      name: 'Login_Screen',
      component: Login_Screen,
      title: '',
      headerShown: false,
      headerTransparent: true,
      hideTabBar: true,
    },
    {
      name: 'Splash',
      component: Splash,
      title: '',
      headerShown: false,
      headerTransparent: true,
      hideTabBar: true,
    },
    {
      name: 'Booking_Screen',
      component: Booking_Screen,
      title: '',
      headerShown: false,
      headerTransparent: true,
      hideTabBar: true,
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitleStyle: {
            fontSize: getFontSize(18),
            fontFamily: 'Manrope-Bold',
            color: COLORS.purple,
          },
          headerStyle: {
            backgroundColor: COLORS.white,
            elevation: 0,
          },
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar_Style,
        }}
      >
        {tabScreens.map((screen, index) => {
          const options = {
            title: screen.title,
            headerTitleAlign: screen.headerTitleAlign || 'center',
            headerShown: screen.headerShown !== undefined ? screen.headerShown : true,
            headerTransparent: screen.headerTransparent || false,
            tabBarStyle: screen.hideTabBar ? { display: 'none' } : styles.tabBar_Style,
            tabBarButton: screen.hideTabBar ? () => null : undefined,
          };

          if (screen.showIcon) {
            options.tabBarIcon = ({ focused }) => (
              <View style={styles.buttonicon}>
                <View
                  style={styles.bgbtnicon} >
                  <Image
                    source={screen.iconSource}
                    resizeMode="contain"
                    style={{ ...styles.iconStyle, tintColor: focused ? COLORS.purple : COLORS.grey }}
                  />

                  <View style={{ ...styles.dotStyle, backgroundColor: focused ? COLORS.purple : COLORS.white }} />
                </View>
              </View>
            );
          }

          return <Tab.Screen key={index} name={screen.name} component={screen.component} options={options} />;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
