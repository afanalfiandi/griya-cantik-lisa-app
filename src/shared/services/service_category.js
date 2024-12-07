import { get } from "../../shared/services/http.service";

export const getServiceCategory = async (payload) => {
  try {
    const result = await get("service_category/get", payload);
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
