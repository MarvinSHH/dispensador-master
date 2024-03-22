import React, { useEffect, useState } from 'react';
import { useParams,Link} from 'react-router-dom';

import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios


const ProductDetails = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://apibackend-one.vercel.app/api/productos/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <div style={styles.loading}>Cargando detalles del producto...</div>;
  if (!producto) return <div style={styles.error}>Producto no encontrado</div>;

  return (
    <div style={styles.productDetails}>
      <h1 style={styles.productTitle}>{producto.nombre}</h1>
      <div style={styles.productImgWrapper}>
        <img style={styles.productImg} src={producto.ruta} alt={producto.nombre} />
      </div>
      <p style={styles.productDescription}>{producto.descripcion}</p>
      <p style={styles.productPrice}>Precio: ${producto.precio}</p>
      <Link to="/catalogo" style={styles.navLink}>
        <button style={styles.featureBoton}>Regresar</button>
      </Link>
      {/* ... más detalles ... */}
    </div>
  );
};

// Aquí definimos los estilos
const styles = {
  productDetails: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    background: '#fff',
  },
  productImgWrapper: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  productImg: {
    maxWidth: '500px',
    maxHeight:'300px',
    height: 'auto',
    borderRadius: '5px',
  },
  productTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  productDescription: {
    color: '#666',
    lineHeight: '1.6',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: '20px',
  },
  loading: {
    textAlign: 'center',
    padding: '20px',
    color: '#4CAF50',
  },
  featureBoton: {

    backgroundColor: colores.boton, // Usado para el color de fondo de los botones, especialmente el botón de registro
    color: colores.textoBoton,
    padding: 15,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: '125px',
  },
  error: {
    textAlign: 'center',
    padding: '20px',
    color: '#f44336',
  }
};

export default ProductDetails;
