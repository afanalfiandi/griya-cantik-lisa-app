import { post } from "../../shared/services/http.service";

export const authService = async (payload) => {
  try {
    const result = await post("auth", payload);
    return result;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};
