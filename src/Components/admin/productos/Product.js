// Product.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import colores from "../../paletaColores.js"; // Asegúrate de que la ruta sea la correcta

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://apibackend-one.vercel.app/api/productos");
      if (!response.ok) throw new Error('No se pudo obtener los productos');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Swal.fire("Error", "No se pudo cargar la lista de productos.", "error");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://apibackend-one.vercel.app/api/productos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error('Product deletion failed');
      fetchProducts(); // Refetch the products after deletion
      Swal.fire("Eliminado", "Producto eliminado con éxito.", "success");
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire("Error", "No se pudo eliminar el producto.", "error");
    }
  };

  return (
    <div style={styles.bodyTab}>
      <h2 style={{ color: colores.negro, textAlign: "center" }}>Productos</h2>
      <Link to="/insert-product">
        <button style={buttonStyle}>Agregar Producto</button>
      </Link>
      <div style={styles.tableForm}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Nombre</th>
              <th style={tableHeaderStyle}>Precio</th>
              <th style={tableHeaderStyle}>Categoría</th>
              <th style={tableHeaderStyle}>Imagen</th>
              <th style={tableHeaderStyle}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td style={tableCellStyle}>{product.nombre}</td>
                <td style={tableCellStyle}>{product.precio}</td>
                <td style={tableCellStyle}>{product.categoria}</td>
                <td style={tableCellStyle}><img src={product.ruta} alt="Producto" /></td>
                <td style={tableCellStyle}>
                  <button onClick={() => navigate(`/edit-product/${product._id}`)} style={buttonStyle}>Editar</button>
                  <button onClick={() => deleteProduct(product._id)} style={buttonStyle}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const styles = {
  bodyTab: {
    display: 'flex',
    backgroundColor: colores.fondoPrincipal,
    padding: "20px",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tableForm:{
    width:'60%',
    display: 'flex',
    justifyContent: 'center',
  }
};

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

export default Product;