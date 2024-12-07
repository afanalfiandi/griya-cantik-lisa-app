import { get } from "./http.service";

export const getSlot = async () => {
  try {
    const result = await get("slot/get");
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
