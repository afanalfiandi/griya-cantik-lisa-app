import Constants from "expo-constants";

const apiUrl = "/api/";
const mediaUrl = "/storage/";

export const API_BASE_URL = Constants.expoConfig.extra.BASE_URL + apiUrl;
export const MEDIA_BASE_URL = Constants.expoConfig.extra.BASE_URL + mediaUrl;
