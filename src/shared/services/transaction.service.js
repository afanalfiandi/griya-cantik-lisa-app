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

export const getTransactionByNymber = async (transactionNumber) => {
  try {
    const result = await get("transaction/get?transactionNumber=" + transactionNumber);
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
