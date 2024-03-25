import React, { useContext } from 'react';
import { EmpresaContext } from './admin/pagina/EmpresaContext';
import styles from "./estilos";
import imgHome from '../assets/imgHome2.jpg'; // Asegúrate de que la ruta de la imagen es correcta
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios

const AboutUs = () => {
  const { empresa } = useContext(EmpresaContext);

  const customStyles = {
    ...styles,

    heroCustom: {
      ...styles.hero,
      backgroundImage: `url(${imgHome})`,
      backgroundSize: 'cover',
      color: 'white',
      height: '160px',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
    },
    featureCustom: {
      ...styles.feature,
      display: 'flex', // Esto asegurará que los elementos hijos se alineen según las reglas de flexbox.
      flexDirection: 'column', // Los elementos hijos se apilarán verticalmente.
      justifyContent: 'flex-start', // Esto alinea los hijos al inicio del eje principal (en este caso, la parte superior).
      padding: '20px',
      paddingTop: '25px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '5px',
      backgroundColor: '#ffffff',
      textAlign: 'left', // Cambia esto a 'center' si prefieres que el texto esté centrado
      height: '100%', // Asegúrate de que todos los divs tengan la misma altura.
    },
    featureContainerCustom: {
      ...styles.features,
      display: 'flex',
      flexDirection: 'row', // Puedes cambiarlo a 'column' si prefieres que sea vertical.
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'flex-start', // Esto asegura que todos los elementos de la característica se alineen en la parte superior.
    },
    // Asegúrate de que tus títulos tengan un margen inferior para empujar el texto hacia abajo.
    featureTitle: {
      marginBottom: '10px',
    },
    history: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },

    historyC: {
      marginTop: '30px',
      borderRadius: '5px',
      padding: '20px',
      backgroundColor: 'white',
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }
  };

  // En tu componente:
  return (

    <div style={{ ...styles.home, backgroundColor: colores.fondoPrincipal }}>
      <header style={customStyles.heroCustom}>
        <h1>¿Quienes Somos?</h1>
        <p>Conoce más sobre las políticas de nuestra empresa.</p>
      </header>
      <section style={customStyles.history}>
        <div style={customStyles.historyC}>
          <h2>
            historia de la empresa
          </h2>
          <p>
            En el vibrante año de 2024, nació una visión que cambiaría la forma en que las personas interactúan con sus adoradas mascotas: Planeta Mascotas. Fundada con pasión y dedicación, nuestra empresa surgió con el propósito de ofrecer un lugar único donde los amantes de los animales pudieran encontrar todo lo que necesitan para cuidar, mimar y consentir a sus fieles compañeros.
          </p><br />
          <p>
            Desde nuestros modestos comienzos como una pequeña tienda local en el corazón de la ciudad, hemos crecido y evolucionado constantemente, convirtiéndonos en un referente confiable y respetado en el mundo de las mascotas. A lo largo de los años, hemos expandido nuestra presencia, llegando a más hogares y comunidades, siempre con el compromiso de brindar productos y servicios de la más alta calidad.

          </p><br />
          <p>

            Nuestro equipo  está formado por apasionados expertos en el cuidado animal, quienes no solo comparten un profundo amor por los animales, sino también un compromiso inquebrantable con la excelencia y la satisfacción del cliente. Nos esforzamos por estar a la vanguardia de las últimas tendencias y avances en el mundo de las mascotas, asegurando que nuestros clientes siempre tengan acceso a lo mejor y más innovador.
          </p>
        </div>
      </section>

      <section style={customStyles.featureContainerCustom}>
        <div style={customStyles.featureCustom}>
          <h3 style={customStyles.featureTitle}>Misión</h3>
          <p>
            {empresa.mision}
          </p>
        </div>
        <div style={customStyles.featureCustom}>
          <h3 style={customStyles.featureTitle}>Visión</h3>
          <p>
            {empresa.vision}
          </p>
        </div>
        <div style={customStyles.featureCustom}>
          <h3 style={customStyles.featureTitle}>Valores</h3>
          <p>
            {empresa.valores}
          </p>
        </div>
      </section>
    </div>

  );

};

export default AboutUs;

