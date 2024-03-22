import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./estilos";

const ResetPassword = () => {
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (nuevaContrasena !== confirmarContrasena) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch('https://apibackend-one.vercel.app/api/usuarios/restablecer-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, nuevaContrasena }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error al restablecer la contraseña.");
      }

      setSuccessMessage("Tu contraseña ha sido restablecida con éxito.");
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Restablecer Contraseña</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleResetPassword}>
        <label style={styles.label}>Nueva Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Ingresa tu nueva contraseña"
          value={nuevaContrasena}
          onChange={(e) => setNuevaContrasena(e.target.value)}
          required
        />
        <label style={styles.label}>Confirmar Nueva Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Confirma tu nueva contraseña"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
          required
        />
        <button style={styles.registerButton} type="submit">Restablecer Contraseña</button>
      </form>
    </div>
  );
};

export default ResetPassword;
