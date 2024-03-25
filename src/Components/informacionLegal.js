import React, { useContext } from 'react';
import { EmpresaContext } from './admin/pagina/EmpresaContext';
import styles from "./estilos";
import imgHome from '../assets/imgHome2.jpg';
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios

function Legal() {
  const { empresa } = useContext(EmpresaContext);

  const customStyles = {
    ...styles,
    heroCustom: {
      ...styles.hero,
      backgroundImage: `url(${imgHome})`,
      backgroundSize: 'cover',
      color: 'white',
      height:'160px',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    textDescCustom: {
      ...styles.textDesc,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: colores.negro,
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      margin: '20px auto',
      maxWidth: '800px',
    },
    sectionHeader: {
      color: colores.negro,
      paddingBottom: '10px',
      borderBottom: `2px solid ${colores.separador}`,
      marginBottom: '20px',
    },
    paragraph: {
      textAlign: 'justify',
      marginBottom: '20px',
    },
  };

  return (
    <div style={{ ...styles.home, backgroundColor: colores.fondoPrincipal }}>
      <header style={customStyles.heroCustom}>
        <h1>Información Legal</h1>
        <p>Conoce más sobre las políticas de nuestra empresa.</p>
      </header>

      <section style={customStyles.textDescCustom}>
        <h3 style={customStyles.sectionHeader}>Políticas de la Empresa</h3>
        <p style={customStyles.paragraph}>
          {empresa.politicas}
        </p>
        <h4 style={customStyles.sectionHeader}>Términos y Condiciones</h4>
        <p style={customStyles.paragraph}>
          {empresa.terminos}
        </p>
        <h4 style={customStyles.sectionHeader}>Política de Privacidad</h4>
        <p style={customStyles.paragraph}>
          {empresa.privacidad}
        </p>
      </section>
    </div>
  );
};

export default Legal;
