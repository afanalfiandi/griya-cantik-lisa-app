import { get } from "./http.service";

export const getTransaction = async (customerID) => {
  try {
    const result = await get("transaction/get?customerID=" + customerID);
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
