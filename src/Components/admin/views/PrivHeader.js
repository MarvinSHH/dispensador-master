import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de que la ruta de importación es correcta
import imgLogo from '../../../assets/logoVar.png';
import styles from '../../estilos';
function PrivHeader() {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const { logout } = useAuth(); // Usa el hook useAuth para acceder a la función logout
    const navigate = useNavigate(); // Hook de React Router para manejar la navegación programática

    const toggleSubMenu = (e) => {
        e.stopPropagation();
        setShowSubMenu(!showSubMenu);
    };

    const closeSubMenu = () => {
        if (showSubMenu) {
            setShowSubMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', closeSubMenu);

        return () => {
            window.removeEventListener('click', closeSubMenu);
        };
    }, [showSubMenu]);

    const handleLogout = () => {
        logout(); // Llama a la función logout de tu contexto de autenticación
        navigate("/"); // Redirige al usuario al inicio
    };

    return (
        <header style={styles.header} onClick={closeSubMenu}>
            <div style={styles.head}>
                <div style={styles.logo}>
                    <img style={styles.logo} src={imgLogo} alt="Logo" />
                </div>
                <h2 style={styles.textHead}> Planeta Mascotas</h2>
                <div style={styles.navStyles}>
                    <nav style={styles.navLinks}>

                        <div style={styles.navLink} onClick={toggleSubMenu}>
                            <Link to="" style={styles.navLink}>Administrador --</Link>

                            {showSubMenu && (
                                <div style={styles.subMenu}>
                                    <Link to="/user" style={styles.subNavLink}>usuarios</Link>
                                    <Link to="/product" style={styles.subNavLink}>Productos</Link>
                                    <Link to="/empresaForm" style={styles.subNavLink}>Panel Page</Link>

                                    {/* Más enlaces del submenú */}
                                </div>
                            )}
                        </div>
                        <Link to="/" style={styles.navLink}>Inicio</Link>
                        <Link to="/catalogo" style={styles.navLink}>Productos</Link>
                        {/* Reemplaza este enlace por un botón o elemento clickable que llame a handleLogout */}
                        <button onClick={handleLogout} style={styles.navLink}>Cerrar Sesión</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default PrivHeader;


