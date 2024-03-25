import React, { useState, useEffect } from 'react';

const EmpresaForm = () => {
    const [empresa, setEmpresa] = useState({
        descripcion: '',
        mision: '',
        vision: '',
        valores: '',
        politicas: '',
        terminos: '',
        privacidad: '',
        contacto: '',
    });

    useEffect(() => {
        // Aquí asumimos que tienes un endpoint GET /api/empresas/:id
        // que devuelve la información de la empresa
        const idEmpresa = "65fa5db0af8cc41f7057a977";
        fetch(`https://apibackend-one.vercel.app/api/empresas/${idEmpresa}`)
            .then((response) => response.json())
            .then((data) => setEmpresa(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmpresa((prevEmpresa) => ({
            ...prevEmpresa,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí asumimos que tienes un endpoint PUT /api/empresas/:id
        // para actualizar la información de la empresa
        const idEmpresa = "65fa5db0af8cc41f7057a977";
        fetch(`https://apibackend-one.vercel.app/api/empresas/${idEmpresa}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(empresa),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                alert('Información actualizada correctamente');
            })
            .catch((error) => {
                alert('Hubo un problema al actualizar la información');
                console.error('Error:', error);
            });
    };

    // Estilos
    const formStyles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        input: {
            width: '100%',
            height: '150px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '10px',
            fontSize: '16px',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        button: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#5cb85c',
            color: 'white',
            fontSize: '18px',
        },
    };

    return (
        <div style={formStyles.container}>
            <h1>Configuración de la Empresa</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(empresa).filter(key => key !== '__v' && key !== '_id').map((key) => (
                    <div key={key}>
                        <label style={formStyles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <textarea
                            style={formStyles.input}
                            name={key}
                            value={empresa[key]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}

                <button type="submit" style={formStyles.button}>
                    Actualizar
                </button>
            </form>
        </div>
    );
};

export default EmpresaForm;
