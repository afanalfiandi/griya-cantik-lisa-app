import { get } from "./http.service";

export const getSpecialist = async () => {
  try {
    const result = await get("specialist/get");
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
