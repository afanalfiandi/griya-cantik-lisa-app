import Constants from "expo-constants";

const apiUrl = "/api/";
const mediaUrl = "/storage/images";
const serviceCategoryMedia = "/service_category/";
const serviceMedia = "/service/";
const bannerMedia = "/banner/";
const specialistMedia = "/specialist/";
const paymentMethodMedia = "/payment_method/";

export const API_BASE_URL = Constants.expoConfig.extra.BASE_URL + apiUrl;
export const MEDIA_BASE_URL = Constants.expoConfig.extra.BASE_URL + mediaUrl;
export const SERVICE_CATEGORY_MEDIA_BASE_URL =
  Constants.expoConfig.extra.BASE_URL + mediaUrl + serviceCategoryMedia;
export const BANNER_MEDIA_BASE_URL =
  Constants.expoConfig.extra.BASE_URL + mediaUrl + bannerMedia;
export const SERVICE_MEDIA_BASE_URL =
  Constants.expoConfig.extra.BASE_URL + mediaUrl + serviceMedia;
export const SPECIALIST_MEDIA_BASE_URL =
  Constants.expoConfig.extra.BASE_URL + mediaUrl + specialistMedia;
export const PAYMETHOD_MEDIA_BASE_URL =
  Constants.expoConfig.extra.BASE_URL + mediaUrl + paymentMethodMedia;
