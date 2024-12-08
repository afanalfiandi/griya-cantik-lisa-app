
import { post } from "../../shared/services/http.service";

export const transactionService = async (payload) => {
    try {
        const result = await post("transaction/create", payload);
        return result;
    } catch (error) {
        if (error) {
            return error;
        }
    }
};





export const checkout = () => {


}

export const addItemToSelectedLayanan = (item, setSelectedLayanan) => {
    setSelectedLayanan(prevLayanan => {
        if (prevLayanan.some(existingItem => existingItem.serviceId === item.serviceId)) {
            return prevLayanan;
        }
        return [...prevLayanan, item];
    });
};

export const removeItemFromSelectedLayanan = (serviceId, setSelectedLayanan) => {
    setSelectedLayanan(prevLayanan => prevLayanan.filter(item => item.serviceId !== serviceId));
};