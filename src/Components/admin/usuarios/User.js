import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import colores from "../../paletaColores.js"; // Asegúrate de que la ruta es correcta.

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://apibackend-one.vercel.app/api/usuarios");
    const data = await response.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch(`https://apibackend-one.vercel.app/api/usuarios/${id}`, {
      method: "DELETE",
    });
    Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
    fetchUsers(); // Recargar la lista de usuarios después de eliminar.
  };

  return (
    <div style={styles.bodyTab}>
      <h2 style={{ color: colores.negro, textAlign: "center" }}>Usuarios</h2>
      <Link to="/insert-user">
        <button style={{ backgroundColor: colores.boton, color: colores.textoBoton }}>
          Agregar Usuario
        </button>
      </Link>
      <div style={styles.tableForm}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
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
                  <button onClick={() => navigate(`/edit-user/${user._id}`)} style={buttonStyle}>
                    Editar
                  </button>
                  <button onClick={() => deleteUser(user._id)} style={buttonStyle}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

