import AsyncStorage from "@react-native-async-storage/async-storage";

const UserSessionUtils = {
  async setUserSession(sessionData) {
    try {
      await AsyncStorage.setItem("user_session", JSON.stringify(sessionData));
    } catch (error) {
      console.error("Failed to store user session", error);
    }
  },

  async getUserSession() {
    try {
      const value = await AsyncStorage.getItem("user_session");
      return JSON.parse(value);
    } catch (error) {
      console.error("Failed to get user session", error);
      return null;
    }
  },

  async removeUserSession() {
    try {
      await AsyncStorage.removeItem("user_session");
    } catch (error) {
      console.error("Failed to remove user session", error);
    }
  },
};

export default UserSessionUtils;
