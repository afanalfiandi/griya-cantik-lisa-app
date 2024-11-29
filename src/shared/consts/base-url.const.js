import Constants from "expo-constants";

const apiUrl = "/api/";
const mediaUrl = "/storage/images";
const serviceCategoryMedia = "/service_category/";

export const API_BASE_URL = Constants.expoConfig.extra.BASE_URL + apiUrl;
export const MEDIA_BASE_URL = Constants.expoConfig.extra.BASE_URL + mediaUrl;
export const SERVICE_CATEGORY_MEDIA_BASE_URL =
  Constants.expoConfig.extra.BASE_URL + mediaUrl + serviceCategoryMedia;
