import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import colores from "../../paletaColores.js";

function User() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Cambiado a null para manejar mejor el estado inicial

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://apibackend-one.vercel.app/api/usuarios"
    );
    const data = await response.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch(`https://apibackend-one.vercel.app/api/usuarios/${id}`, {
      method: "DELETE",
    });
    Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
    fetchUsers(); // Recargar la lista de usuarios después de eliminar
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const saveUser = async () => {
    await fetch(
      `https://apibackend-one.vercel.app/api/usuarios/${editingUser._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingUser),
      }
    );
    Swal.fire(
      "Actualizado",
      "El usuario ha sido actualizado con éxito",
      "success"
    );
    setEditingUser(null); // Cerrar el modal de edición
    fetchUsers(); // Recargar la lista de usuarios para reflejar los cambios
  };

  return (
    <div style={styles.bodyTab}>
      <h2 style={{ color: colores.negro, textAlign: "center" }}>Usuarios</h2>
      <Link to="/insert-user">
        <button
          style={{ backgroundColor: colores.boton, color: colores.textoBoton }}
        >
          Agregar Usuario
        </button>
      </Link>
      <div style={styles.tableForm}>
        <table
          style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Nombre</th>
              <th style={tableHeaderStyle}>Tipo</th>
              <th style={tableHeaderStyle}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td style={tableCellStyle}>{user.nombre + " " + user.apellido}</td>
                <td style={tableCellStyle}>{user.tipo}</td>
                <td style={tableCellStyle}>
                  <button
                    onClick={() => setEditingUser(user)}
                    style={buttonStyle}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    style={buttonStyle}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {editingUser && (
        <div>
          <h2>Editar Usuario</h2>
          <input
            name="nombre"
            value={editingUser.nombre || ""}
            onChange={handleEditChange}
          />
          <input
            name="apellido"
            value={editingUser.apellido || ""}
            onChange={handleEditChange}
          />
          <input
            name="correo"
            value={editingUser.correo || ""}
            onChange={handleEditChange}
          />
          <input
            name="contraseña"
            value={editingUser.contraseña || ""}
            onChange={handleEditChange}
          />
          <input
            name="telefono"
            value={editingUser.telefono || ""}
            onChange={handleEditChange}
          />
          <input
            name="tipo"
            value={editingUser.tipo || ""}
            onChange={handleEditChange}
          />
          <input
            name="preguntaRecuperacion"
            value={editingUser.preguntaRecuperacion || ""}
            onChange={handleEditChange}
          />
          <input
            name="respuestaPregunta"
            value={editingUser.respuestaPregunta || ""}
            onChange={handleEditChange}
          />
          <input
            name="dispositivo"
            value={editingUser.dispositivo || ""}
            onChange={handleEditChange}
          />
          {/* Incluye aquí los demás campos que necesitas editar */}
          <button onClick={saveUser}>Guardar Cambios</button>
          <button onClick={() => setEditingUser(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: colores.fondoHeader,
  color: colores.textoHeader,
  textAlign: "center",
  border: `1px solid ${colores.separador}`,
};

const tableCellStyle = {
  textAlign: "center",
  border: `1px solid ${colores.separador}`,
};

const buttonStyle = {
  backgroundColor: colores.boton,
  color: colores.textoBoton,
  margin: "0 5px",
};


const styles = {
  bodyTab: {
    display: 'flex',
    backgroundColor: colores.fondoPrincipal,
    padding: "20px",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  tableForm: {
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
  }
};
export default User;

