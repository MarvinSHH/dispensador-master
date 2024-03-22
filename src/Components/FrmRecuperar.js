import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./estilos";

const FrmRecuperar = () => {
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleRecuperar = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://apibackend-one.vercel.app/api/usuarios/solicitar-recuperacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al solicitar la recuperación de contraseña.");
            }

            setSuccessMessage("Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.");
            setTimeout(() => navigate('/login'), 5000); // Ajusta la ruta según sea necesario

        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.title}>Recuperar Contraseña</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleRecuperar}>
                <label style={styles.label}>Correo:</label>
                <input
                    style={styles.input}
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <button style={styles.registerButton} type="submit">Enviar solicitud</button>
            </form>
        </div>
    );
};

export default FrmRecuperar;
