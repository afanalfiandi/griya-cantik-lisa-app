import { get } from "../../shared/services/http.service";

const HomeService = {
  async getBanner() {
    try {
      const result = await get("banner/get");
      return result;
    } catch (error) {
      if (error) {
        return error;
      }
    }
  },
};

export default HomeService;
