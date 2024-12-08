import React, { createContext, useContext, useState } from 'react';

const ServiceContext = createContext();

export const useServiceContext = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
    const [selectedService, setSelectedService] = useState([]);

    return (
        <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
            {children}
        </ServiceContext.Provider>
    );
};
