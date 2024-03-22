import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "../../estilos";

function Insertuser() {
  const initialState = {
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    telefono: "",
    tipo: "usuario", // Valor predeterminado para tipo
    preguntaRecuperacion: "colorFavorito", // Valor inicial
    respuestaPregunta: "",
    codigoRecuperacion: "",
    dispositivo: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      // Mostrar mensaje de éxito
      Swal.fire({
        title: "Éxito",
        text: "Usuario registrado exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          setFormData(initialState); // Restablecer el formulario
        }
      });
    } catch (error) {
      // Mostrar mensaje de error
      Swal.fire({
        title: "Error",
        text: `Error al registrar usuario: ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div style={styles.cincuenta}>
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Nombre:</label>
            <input
              style={styles.input}
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          {/* Apellido */}
          <div style={styles.inCincuenta}>
            <label style={styles.label}>Apellido:</label>
            <input
              style={styles.input}
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <label style={styles.label}>Correo:</label>
        <input
          style={styles.input}
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Contraseña:</label>
        <input
          style={styles.input}
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
        <label style={styles.label}>Teléfono:</label>
        <input
          style={styles.input}
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
          maxLength="10"
          minLength="10"
        />

        <label style={styles.label}>Tipo:</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="usuario">Usuario</option>
          <option value="administrador">Administrador</option>
        </select>
        <br />
        <label style={styles.label}>Pregunta de Recuperación:</label>
        <select
          name="preguntaRecuperacion"
          value={formData.preguntaRecuperacion}
          onChange={handleChange}
          required
        >
          <option value="colorFavorito">Color Favorito</option>
          <option value="nombreMascota">Nombre de Mascota</option>
          <option value="mejorAmigo">Mejor Amigo</option>
        </select>
        <br />

        <label style={styles.label}>Respuesta de Pregunta:</label>
        <input
          style={styles.input}
          type="text"
          name="respuestaPregunta"
          value={formData.respuestaPregunta}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Código de Recuperación:</label>
        <input
          style={styles.input}
          type="text"
          name="codigoRecuperacion"
          value={formData.codigoRecuperacion}
          onChange={handleChange}
        />

        <label style={styles.label}>Dispositivo:</label>
        <input
          style={styles.input}
          type="text"
          name="dispositivo"
          value={formData.dispositivo}
          onChange={handleChange}
          maxLength="10"
          minLength="10"
        />
        <button style={styles.registerButton} type="submit">
          Agregar Usuario
        </button>
      </form>
    </div>
  );
}

export default Insertuser;
