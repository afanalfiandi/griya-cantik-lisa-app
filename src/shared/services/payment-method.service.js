import { get } from "./http.service";

export const getPaymentMethod = async () => {
  try {
    const result = await get("payment_method/get");
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
