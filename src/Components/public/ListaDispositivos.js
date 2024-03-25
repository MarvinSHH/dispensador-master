// src/components/ListaDispositivos.js
import React, { useState, useEffect } from 'react';

const ListaDispositivos = ({ userId }) => {
  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    const obtenerDispositivos = async () => {
      try {
        const response = await fetch(`/usuarios/${userId}/dispositivos`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Asume que el token se guarda en localStorage
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener dispositivos');
        }
        const data = await response.json();
        setDispositivos(data);
      } catch (error) {
        console.error('Error al obtener dispositivos:', error);
      }
    };

    obtenerDispositivos();
  }, [userId]);

  return (
    <div>
      <h2>Mis Dispositivos</h2>
      {dispositivos.length > 0 ? (
        <ul>
          {dispositivos.map((dispositivo) => (
            <li key={dispositivo._id}>{dispositivo.nombre}</li> // Ajusta según la estructura de tus datos
          ))}
        </ul>
      ) : (
        <p>No tienes dispositivos asignados.</p>
      )}
    </div>
  );
};

export default ListaDispositivos;
