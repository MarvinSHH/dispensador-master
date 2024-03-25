import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Asegúrate de que la ruta sea correcta
import styles from '../estilos'; // Asegúrate de que los estilos estén definidos

const Perfil = () => {
    const { currentUser } = useAuth();
    const [datosPerfil, setDatosPerfil] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        telefono: '',
        tipo: '',
        preguntaRecuperacion: '',
        respuestaPregunta: '',
        codigoRecuperacion: '',
        dispositivo: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const cargarPerfil = async () => {
            if (!currentUser) {
                setError('No hay usuario logueado.');
                return;
            }
            try {
                const response = await fetch(`https://apibackend-one.vercel.app/api/usuarios/perfil`, {
                    headers: {
                        'Authorization': `Bearer ${currentUser.token}`,
                    },
                });
                if (!response.ok) throw new Error('No se pudo cargar el perfil del usuario.');
                const datos = await response.json();
                setDatosPerfil(datos);
            } catch (error) {
                setError(error.message);
            }
        };
        cargarPerfil();
    }, [currentUser]);

    const handleInputChange = (e) => {
        setDatosPerfil({
            ...datosPerfil,
            [e.target.name]: e.target.value,
        });
    };

    const actualizarCampo = async (campo, valor) => {
        if (!currentUser) {
            setError('No hay usuario logueado.');
            return;
        }
        try {
            const valorCampo = { [campo]: valor || datosPerfil[campo] };
            const response = await fetch(`https://apibackend-one.vercel.app/api/usuarios/${currentUser?._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${currentUser.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valorCampo),
            });
            if (!response.ok) throw new Error(`No se pudo actualizar el campo ${campo}.`);
            alert(`Campo ${campo} actualizado con éxito.`);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.title}>Modificando datos del usuario: {currentUser?.user?.nombre}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={styles.form}>
                {Object.keys(datosPerfil).map((campo) =>
                    campo !== '_id' && campo !== 'codigoRecuperacion' && campo !== '__v' && campo !== 'tipo' ? (
                        <div key={campo} style={styles.formGroup}>
                            <label style={styles.label}>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                            {campo === 'preguntaRecuperacion' ? (
                                <select
                                    name={campo}
                                    value={datosPerfil[campo]}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                >
                                    <>
                                        <option value="mejor amigo">¿Cuál es el nombre de tu mejor amigo?</option>
                                        <option value="color favorito">¿Cuál es tu color favorito?</option>
                                        <option value="nombre de tu mascota">¿Cómo se llama tu mascota?</option>
                                    </>
                                </select>
                            ) : (
                                <input
                                    type="text"
                                    name={campo}
                                    value={datosPerfil[campo]}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            )}
                            <button onClick={() => actualizarCampo(campo)} style={styles.button}>Guardar {campo}</button>
                        </div>
                    ) : null
                )}

            </div>
        </div>
    );
};

export default Perfil;
