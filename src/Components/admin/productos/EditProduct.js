import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import colores from '../../paletaColores'; // Asegúrate de que esta ruta es correcta para tu proyecto

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${colores.separador}`,
    width: '100%',
  },
  select: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${colores.separador}`,
    width: '100%',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: colores.boton,
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imagePreview: {
    width: '100%',
    marginTop: '10px',
  }
};

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    ruta: ''
  });

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(`https://apibackend-one.vercel.app/api/productos/${id}`);
      const productData = await response.json();
      setProduct(productData);
    };
    fetchProductData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, ruta: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí convertimos todo a JSON, incluida la imagen codificada en Base64
    const response = await fetch(`https://apibackend-one.vercel.app/api/productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      Swal.fire('Actualizado!', 'El producto ha sido actualizado correctamente.', 'success');
      navigate('/product');
    } else {
      Swal.fire('Error!', 'Hubo un problema al actualizar el producto.', 'error');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        {/* Descripcion */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            value={product.descripcion}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        {/* Precio */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Precio:</label>
          <input
            type="number"
            name="precio"
            value={product.precio}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        {/* Categoria */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Categoria:</label>
          <select
            name="categoria"
            value={product.categoria}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option value="raza pequeña">Raza pequeña</option>
            <option value="raza grande">Raza grande</option>
            {/* Añade más categorías según tus necesidades */}
          </select>
        </div>

        {/* Imagen */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />
          {product.ruta && (
            <img src={product.ruta} alt="Vista previa" style={styles.imagePreview} />
          )}
        </div>

        <button type="submit" style={styles.submitButton}>Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProduct;
