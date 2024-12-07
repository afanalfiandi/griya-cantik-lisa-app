import { get } from "../../shared/services/http.service";

const ServicesService = {
  async getServices(params, isCategory) {
    try {
      const endPoint = isCategory
        ? "service/get/category/" + params
        : "service/get";

      const result = await get(endPoint);
      return result;
    } catch (error) {
      if (error) {
        return error;
      }
    }
  },
};

export default ServicesService;
