import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js'

import imgLogo from '../../assets/logoP.png';
import styles from '../estilos.js'; 

function PubHeader() {
  const { logout } = useAuth(); // Usa el hook useAuth para acceder a la función logout
  const navigate = useNavigate(); // Hook de React Router para manejar la navegación programática

  const handleLogout = () => {
    logout(); // Llama a la función logout de tu contexto de autenticación
    navigate("/"); // Redirige al usuario al inicio
  };

  return (
    <header style={styles.header}>
      <div style={styles.head}>
        <div style={styles.logo}>
          <img style={styles.logo} src={imgLogo} alt="Logo"/>
        </div>
        <div style={styles.navStyles}>
          <nav style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Inicio</Link>
            <Link to="/catalogo" style={styles.navLink}>Productos</Link>
            <Link to="/dispositivoIoT" style={styles.navLink}>Dashboard</Link>
            <Link to="/perfil" style={styles.navLink}>Perfil</Link>
            {/* Reemplaza el enlace de cerrar sesión por un botón o elemento clickable que llame a handleLogout */}
            <button onClick={handleLogout} style={styles.navLink}>Cerrar Sesión</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PubHeader;
