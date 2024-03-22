import React, { useContext } from 'react';

import { EmpresaContext } from './admin/pagina/EmpresaContext';
import styles from "./estilos";
import imgHome from '../assets/imgHome2.jpg'; // Asegúrate de que la ruta de la imagen es correcta

const AboutUs = () => {
const { empresa } = useContext(EmpresaContext);

  return (
    <div >
      <div style={{  ...styles.heroOpc, backgroundImage: `url(${imgHome})` }}>
        <h1 style={{ color: styles.textColor }}>Quiénes Somos</h1>
      </div>

      <section style={styles.textDesc}>
        <h3 style={{ color: styles.textColor }}>Nuestra Historia</h3>
        <p>
          Planeta Mascotas comenzó en... (aquí va la historia de la empresa).
        </p>
      </section>

      <section style={{...styles.features, ...styles.textDesc}}>
        <div style={styles.feature}>
          <h3 style={{ color: styles.textColor }}>Misión</h3>
          <p>
            {empresa.mision}
          </p>
        </div>
        <div style={styles.feature}>
          <h3 style={{ color: styles.textColor }}>Visión</h3>
          <p>
          {empresa.vision}

          </p>
        </div>
        <div style={styles.feature}>
          <h3 style={{ color: styles.textColor }}>Valores</h3>
          <p>
          {empresa.valores}

          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
