import React, { createContext, useState, useContext } from "react";

const SelectedServiceContext = createContext();

export const SelectedServiceProvider = ({ children }) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const addService = (service) => {
        setSelectedServices((prev) => [...prev, service]);
    };

    const removeService = (serviceId) => {
        setSelectedServices((prev) =>
            prev.filter((service) => service.serviceId !== serviceId)
        );
    };

    const isSelected = (serviceId) => {
        return selectedServices.some((service) => service.serviceId === serviceId);
    };

    return (
        <SelectedServiceContext.Provider
            value={{ selectedServices, addService, removeService, isSelected }}
        >
            {children}
        </SelectedServiceContext.Provider>
    );
};

export const useSelectedService = () => useContext(SelectedServiceContext);
