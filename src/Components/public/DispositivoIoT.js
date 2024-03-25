import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DispositivoIoT() {
  const [dispositivos, setDispositivos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDispositivos();
  }, []);

  const fetchDispositivos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://apibackend-one.vercel.app/api/dispositivo/');
      setDispositivos(response.data);
    } catch (error) {
      console.error("Error al obtener dispositivos: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const enviarComando = async (id, comando) => {
    setIsLoading(true);
    try {
      await axios.post(`https://apibackend-one.vercel.app/api/dispositivo/comando/${id}`, { comando });
      alert(`Comando "${comando}" enviado.`);
    } catch (error) {
      console.error("Error al enviar comando: ", error);
      alert("Error al enviar comando.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Cargando dispositivos...</p>;

  return (
    <div>
      <h1>Control de Dispositivos IoT</h1>
      {dispositivos.map((dispositivo) => (
        <div key={dispositivo._id}>
          <h2>{dispositivo.nombre}</h2>
          <p>Temperatura: {dispositivo.temperatura}°C</p>
          <p>Humedad: {dispositivo.humedad}%</p>
          {/* Aquí se agregan los botones de control para cada dispositivo */}
          <button onClick={() => enviarComando(dispositivo._id, 'dispensar')}>DISPENSAR</button>
          <button onClick={() => enviarComando(dispositivo._id, 'bombaOn')}>ENCENDER BOMBA </button>
          <button onClick={() => enviarComando(dispositivo._id, 'bombaOff')}>APAGAR BOMBA </button>
          <button onClick={() => enviarComando(dispositivo._id, 'prenderLed')}> BOMBA </button>
          
          {/* Suponiendo que tengas una forma de identificar si el dispositivo puede "empezar motor", añade un botón si es necesario */}
          {/* <button onClick={() => enviarComando(dispositivo._id, 'motorStart')}>Iniciar Motor</button> */}
        </div>
      ))}
    </div>
  );
};


export default DispositivoIoT
