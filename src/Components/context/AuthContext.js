import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Añadir estado de carga aquí

  useEffect(() => {
    // Esta función se ejecuta al cargar el componente para verificar si hay datos de usuario en localStorage
    const loadData = async () => {
      setIsLoading(true); // Comienza la carga
      try {
        const user = localStorage.getItem('user');
        if (user) {
          setCurrentUser(JSON.parse(user));
        }
      } catch (error) {
        console.error("Error loading the user from localStorage", error);
      }
      setIsLoading(false); // Termina la carga
    };
    
    loadData();
  }, []);

  const login = (response) => {
    const { token, user } = response;
    const userData = { ...user, token };
    
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    isLoading, // Asegúrate de exponer isLoading aquí
    login,
    logout,
  };

  // Mientras isLoading es true, puedes decidir mostrar un spinner o un componente de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
