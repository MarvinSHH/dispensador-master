import React, { createContext, useState, useEffect } from 'react';

export const EmpresaContext = createContext();

export const EmpresaProvider = ({ children }) => {
    const [empresa, setEmpresa] = useState({});

    useEffect(() => {
        fetch('https://apibackend-one.vercel.app/api/empresas/65fa5db0af8cc41f7057a977')
            .then((response) => response.json())
            .then((data) => setEmpresa(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <EmpresaContext.Provider value={{ empresa }}>
            {children}
        </EmpresaContext.Provider>
    );
};
