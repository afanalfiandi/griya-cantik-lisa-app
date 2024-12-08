import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image, View } from "react-native";
import { useFonts } from "expo-font";
import { fontImports } from "./src/shared/consts/font.const";
import mainStyle from "./src/shared/style/main.style";
import COLORS from "./src/shared/consts/colors.const";
import tab from "./src/shared/consts/tab.const";
import { ToastProvider } from "react-native-toast-notifications";
import { SelectedServiceProvider } from "./src/shared/component/context/selectedServicesContext";
import { ServiceProvider } from "./src/shared/component/context/servicesSelected";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(fontImports);

  if (!fontsLoaded) {
    return null;
  }

  const tabOptions = (screen) => {
    const options = {
      title: screen.title,
      headerTitleAlign: screen.headerTitleAlign ?? "center",
      headerShown: screen.headerShown ? screen.headerShown : false,
      headerTransparent: screen.headerTransparent ?? false,
      tabBarStyle: screen.hideTabBar
        ? mainStyle.hideTabBar
        : mainStyle.tabBar_Style,
      tabBarButton: screen.hideTabBar ? () => null : undefined,
    };

    if (screen.showIcon) {
      options.tabBarIcon = ({ focused }) => (
        <TabIcon focused={focused} screen={screen} />
      );
    }

    return options;
  };

  const TabIcon = ({ focused, screen }) => {
    return (
      <View style={mainStyle.buttonicon}>
        <View style={mainStyle.bgbtnicon}>
          <Image
            source={screen.iconSource}
            resizeMode="contain"
            style={{
              ...mainStyle.iconStyle,
              tintColor: focused ? COLORS.purple : COLORS.grey,
            }}
          />
          <View
            style={{
              ...mainStyle.dotStyle,
              backgroundColor: focused ? COLORS.purple : COLORS.white,
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <ServiceProvider>
      <ToastProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerTitleStyle: mainStyle.headerTitleStyle,
              headerStyle: mainStyle.hea,
              tabBarShowLabel: false,
              tabBarStyle: mainStyle.tabBar_Style,
            }}
          >
            {tab.map((screen, index) => {
              return (
                <Tab.Screen
                  key={index}
                  name={screen.name}
                  component={screen.component}
                  options={tabOptions(screen)}
                />
              );
            })}
          </Tab.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </ServiceProvider>
  );
}
