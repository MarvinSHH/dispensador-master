// src/components/AsignarDispositivo.js
import React, { useState } from 'react';

const AsignarDispositivo = ({ userId }) => {
  const [dispositivoId, setDispositivoId] = useState('');

  const asignarDispositivo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/usuarios/${userId}/dispositivo/${dispositivoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Asume que el token se guarda en localStorage
        },
      });
      if (!response.ok) {
        throw new Error('Error al asignar dispositivo');
      }
      alert('Dispositivo asignado correctamente');
      // Aquí podrías redirigir al usuario o actualizar la lista de dispositivos
    } catch (error) {
      console.error('Error al asignar dispositivo:', error);
      alert('Error al asignar dispositivo');
    }
  };

  return (
    <form onSubmit={asignarDispositivo}>
      <label>
        Dispositivo ID:
        <input type="text" value={dispositivoId} onChange={(e) => setDispositivoId(e.target.value)} required />
      </label>
      <button type="submit">Asignar Dispositivo</button>
    </form>
  );
};

export default AsignarDispositivo;
