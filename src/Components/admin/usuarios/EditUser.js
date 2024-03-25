import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import colores from '../../paletaColores'; // Asegúrate de que este importe es correcto según tu estructura

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${colores.separador}`,
    width: '100%',
  },
  select: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${colores.separador}`,
    width: '100%',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: colores.boton,
    color: colores.textoBoton,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  }
};

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    telefono: '',
    tipo: '',
    preguntaRecuperacion: '',
    respuestaPregunta: '',
    dispositivo: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://apibackend-one.vercel.app/api/usuarios/${id}`);
      const userData = await response.json();
      setUser(userData);
    };
    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://apibackend-one.vercel.app/api/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      Swal.fire('Actualizado!', 'El usuario ha sido actualizado correctamente.', 'success');
      navigate('/user');
    } else {
      Swal.fire('Error!', 'Hubo un problema al actualizar el usuario.', 'error');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nombre:</label>
          <input type="text" name="nombre" value={user.nombre} onChange={handleInputChange} style={styles.input} />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Apellido:</label>
          <input type="text" name="apellido" value={user.apellido} onChange={handleInputChange} style={styles.input} />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Correo:</label>
          <input type="email" name="correo" value={user.correo} onChange={handleInputChange} style={styles.input} />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Contraseña:</label>
          <input type="password" name="contraseña" value={user.contraseña} onChange={handleInputChange} style={styles.input} />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Teléfono:</label>
          <input type="tel" name="telefono" value={user.telefono} onChange={handleInputChange} style={styles.input} />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Dispositivo:</label>
          <input type="text" name="dispositivo" value={user.dispositivo} onChange={handleInputChange} style={styles.input} />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Tipo de Usuario:</label>
          <select name="tipo" value={user.tipo} onChange={handleInputChange} style={styles.select}>
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Pregunta de Recuperación:</label>
          <select name="preguntaRecuperacion" value={user.preguntaRecuperacion} onChange={handleInputChange} style={styles.select}>
            <option value="colorFavorito">¿Cuál es tu color favorito?</option>
            <option value="nombreMascota">¿Cómo se llama tu primera mascota?</option>
            <option value="mejorAmigo">¿Cómo se llama tu mejor amigo de la infancia?</option>
          </select>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Respuesta de Pregunta:</label>
          <input type="text" name="respuestaPregunta" value={user.respuestaPregunta} onChange={handleInputChange} style={styles.input} />
        </div>
        
        </div>
        <button type="submit" style={styles.submitButton}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditUser;

