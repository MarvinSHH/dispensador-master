import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./estilos";


const CatalogoProductos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://apibackend-one.vercel.app/api/productos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudieron obtener los productos');
                }
                return response.json();
            })
            .then(data => {
                setProductos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section style={styles.features}>
            <h2>Productos en Venta</h2>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div style={styles.featureContainer}>
                    {productos.map((producto) => (
                        <div key={producto._id} style={styles.feature}>
                            <h3>{producto.nombre}</h3>
                            <img src={producto.ruta} alt={producto.nombre} style={estiloImg.imagen} />
                            <p style={styles.featureDescription}>{producto.descripcion}</p>
                            <h2>$ {producto.precio} </h2>

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


        // <div style={styles.catalogoContainer}>
        //   <h2 style={styles.tituloCatalogo}>Productos en venta </h2>
        //   {loading ? (
        //     <p style={styles.textoCargando}>Cargando productos...</p>
        //   ) : (
        //     <div style={styles.catalogo}>
        //       {productos.map(producto => (
        //         <div key={producto._id} style={styles.producto}>
        //           <Link to={`/producto/${producto._id}`} style={styles.linkProducto}>
        //           <div key={producto._id} style={styles.feature}>
        //             <h3>{producto.nombre}</h3>
        //             <img src={producto.ruta} alt={producto.nombre} style={estiloImg.imagen} />
        //             <p>{producto.descripcion}</p>
        //             <button style={styles.featureBoton}>Ver detalles</button>
        //           </div>
        //           </Link>
        //         </div>
        //       ))}
        //     </div>
        //   )}
        // </div>
    );
};

const estiloImg = {
    catalogoContainer: {
        backgroundColor: '#f0f0f0', // Un color claro de fondo
        padding: '2rem',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '2rem auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    tituloCatalogo: {
        color: '#204056', // Un color oscuro para el título
        margin: '0 0 2rem 0',
        fontSize: '2rem',
    },
    textoCargando: {
        color: '#204056',
        fontSize: '1rem',
    },
    catalogo: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    producto: {
        backgroundColor: '#ffffff', // Fondo blanco para las tarjetas
        borderRadius: '10px',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '300px', // Ancho fijo para todas las tarjetas
        margin: '1rem',
    },
    imagen: {
        width: '200px',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '5px',
        marginBottom: '1rem',
    },
    nombreProducto: {
        color: '#204056', // Color de texto oscuro para el nombre
        fontSize: '1.25rem',
        margin: '0.5rem 0',
    },
    descripcionProducto: {
        color: '#204056', // Color de texto oscuro para la descripción
        fontSize: '1rem',
        marginBottom: '1rem',
    },
    botonDetalles: {
        backgroundColor: '#209CEE', // Un color azul para los botones
        color: '#ffffff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '1rem',
    },
    linkProducto: {
        textDecoration: 'none',
        color: 'inherit', // Hereda el color de texto del elemento padre
    },
};

export default CatalogoProductos;
