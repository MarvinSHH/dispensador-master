import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Importa useAuth en lugar de AuthContext
import styles from "./estilos";

const FrmLogin = () => {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth(); // Usa el hook useAuth para acceder a login
    const [successMessage, setSuccessMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://apibackend-one.vercel.app/api/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, contraseña }),
            });
    
            const data = await response.json(); // Mueve esta línea aquí para evitar leer la respuesta dos veces
    
            if (!response.ok) {
                // Maneja errores como credenciales incorrectas
                throw new Error(data.error || "Error desconocido");
            }
    
            // Asegúrate de que la respuesta incluya tanto el token como la información del usuario
            if (data.token && data.user) {
                login(data); // Ahora pasas el objeto completo a la función login
                setSuccessMessage("Inicio de sesión exitoso. Bienvenido!");
                setTimeout(() => navigate('/'), 0);
            } else {
                throw new Error("La respuesta del servidor no contiene el token o la información del usuario.");
            }
    
        } catch (error) {
            console.error('Error al conectar con la API:', error);
            setError(error.message);
        }
    };
    


    return (
        <div style={styles.formContainer}>
            <h2 style={styles.title}>Iniciar Sesión</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Muestra el mensaje de éxito aquí */}
            <form onSubmit={handleLogin}>
                <label style={styles.label}>Correo:</label>
                <input style={styles.input} type="text" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

                <label style={styles.label}>Contraseña:</label>
                <input style={styles.input} type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />

                <button style={styles.registerButton} type="submit">Iniciar Sesión</button>
            </form>

            {/* Enlaces a otras páginas usando React Router */}
            <Link to="recuperar" style={styles.loginButtonText}>¿Olvidaste tu contraseña?</Link>
            <Link to="registro" style={styles.loginButtonText}>Registrarme</Link>
            {/* <Link to="recuperar-contrasena/:token" style={styles.loginButtonText}>Rec</Link> */}

        </div>
    );
};

export default FrmLogin;
