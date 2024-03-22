// src/components/HeaderWrapper.js
import React from 'react';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta es correcta
import Header from '../Header';
import PrivHeader from '../admin/views/PrivHeader';
import PubHeader from '../public/pubHeader'; // Asegúrate de que el nombre del archivo coincide y es correcto.

const HeaderWrapper = () => {
  const { currentUser } = useAuth();
  console.log('Current user en HeaderWrapper:', currentUser);

  if (!currentUser) {
    return <Header />; // Para usuarios no autenticados
  } else if (currentUser.tipo === 'administrador') {
    return <PrivHeader />; // Para administradores
  } else {
    return <PubHeader />; // Para usuarios regulares
  }
};

export default HeaderWrapper;
