import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate para la navegación
import styles from "./estilos";

const FrmRegistro = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [telefono, setTelefono] = useState("");
    const [preguntaRecuperacion, setPreguntaRecuperacion] = useState("");
    const [respuestaPregunta, setRespuestaPregunta] = useState("");
    const navigate = useNavigate(); // Para redirigir al usuario después del registro

    const handleRegister = async (e) => {
        e.preventDefault();
        const usuario = {
            nombre,
            apellido,
            correo,
            contraseña: contrasena,
            telefono,
            tipo: "usuario", // Tipo por defecto
            preguntaRecuperacion,
            respuestaPregunta,
            dispositivo: "", // Manejado como vacío
        };
        
        try {
            const response = await fetch('https://apibackend-one.vercel.app/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            }

            const data = await response.json();
            console.log("Registro exitoso:", data);
            navigate("/registrarse/"); // Ajusta a la ruta deseada después del registro
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Error en el registro. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.title}>Registro</h2>
            <form onSubmit={handleRegister}>
                <div style={styles.cincuenta}>
                    <div style={styles.inCincuenta}>
                        <label style={styles.label}>Nombre:</label>
                        <input style={styles.input} type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div style={styles.inCincuenta}>
                        <label style={styles.label}>Apellido:</label>
                        <input style={styles.input} type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                </div>

                <label style={styles.label}>Correo:</label>
                <input style={styles.input} type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

                <label style={styles.label}>Contraseña:</label>
                <input style={styles.input} type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />

                <label style={styles.label}>Teléfono:</label>
                <input style={styles.input} type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                <label style={styles.label}>Pregunta de Recuperación:</label>
                <select style={styles.input} value={preguntaRecuperacion} onChange={(e) => setPreguntaRecuperacion(e.target.value)}>
                    <option value="">Selecciona una pregunta</option>
                    <option value="mejor amigo">¿Cuál es el nombre de tu mejor amigo?</option>
                    <option value="color favorito">¿Cuál es tu color favorito?</option>
                    <option value="nombre de tu mascota">¿Cómo se llama tu mascota?</option>
                </select>

                <label style={styles.label}>Respuesta:</label>
                <input style={styles.input} type="text" placeholder="Respuesta" value={respuestaPregunta} onChange={(e) => setRespuestaPregunta(e.target.value)} />

                <button style={styles.registerButton} type="submit">¡Regístrate ahora!</button>
            </form>
            <Link to="/login" style={styles.loginButtonText}>¿Ya tengo cuenta?</Link>
        </div>
    );
};

export default FrmRegistro;

           
