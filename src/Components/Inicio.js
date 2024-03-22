import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmpresaContext } from './admin/pagina/EmpresaContext';

import styles from "./estilos";
import imgHome from '../assets/imgHome2.jpg';


const MainContent = () => {
  const { empresa } = useContext(EmpresaContext);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://apibackend-one.vercel.app/api/productos');
        const data = await response.json();
        setProductos(data.slice(0, 3)); // Asumiendo que estos son los más vendidos
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div style={styles.home}>

      <header style={{ ...styles.hero, backgroundImage: `url(${imgHome})` }}>
        <h1>Bienvenido a Planeta Mascotas</h1>
        <p>Descubre nuestros servicios y cómo podemos ayudarte a crecer.</p>
      </header>

      {/* Para esta seccion que sigue en teoria tiene que traer los datos desde la base de datos, entonces se tiene que modificar 
para que se traigan todos los datos desde la base */}

      <section style={styles.textDesc}>
        <h3>Descripcion de la empresa</h3>
        <p>
          {empresa.descripcion}
        </p>
      </section>

      <section style={styles.features}>
        <h2>Nuestros Productos más Vendidos</h2>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div style={styles.featureContainer}>
            {productos.map((producto, index) => (
              <div key={producto._id} style={styles.feature}>
                <h3>{producto.nombre}</h3>
                <img src={producto.ruta} alt={producto.nombre} style={estiloImg.imagen} />
                <p style={styles.featureDescription}>{producto.descripcion}</p>

                <Link to={`/producto/${producto._id}`}>
                  <button style={styles.featureBoton}>Ver detalles</button>
                </Link>
              </div>
            ))}
            {/* ...Si tienes una imagen que siempre va en este lugar... */}
            <div style={styles.featureImg}></div>
          </div>
        )}
      </section>

    </div>
  );
};

const estiloImg = {

  imagen: {
    
    width: '200px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '1rem',
  },
}
export default MainContent;
