import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Components/context/AuthContext'; // Asegura que la ruta sea correcta
import { EmpresaProvider } from './Components/admin/pagina/EmpresaContext.js';
import HeaderWrapper from './Components/context/HeaderWrapper.js';


import styles from './Components/estilos.js';
//Vistas de la parte libre a los usuarios 
import CatalogoProductos from './Components/CatalogoProductos.js';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import ProductDetails from './Components/Producto';
import Formulario from './Components/Formulario';//Es para dirigir a todos los formularios de login, recuperar contraseña y registrarse

//Carga las visatas del footer
import Legal from './Components/informacionLegal.js';
import AboutUs from './Components/aboutUs.js';
import ContactPage from './Components/contactPage.js';
// import nombre de la funcion/componente from lugar de donde viene

// Estos van a ser las vistas para la parte del ADMIN 
import Product from './Components/admin/productos/Product.js';
import User from './Components/admin/usuarios/User.js';
import InsertProduct from './Components/admin/productos/InsertProduct.js';
import Insertuser from './Components/admin/usuarios/InsertUser.js';
import EditUser from './Components/admin/usuarios/EditUser.js';
import EditProduct from './Components/admin/productos/EditProduct.js';
import EmpresaForm from './Components/admin/pagina/EmpresaForm.js';

//Esto va para las vistas de la parte publica, del usuario registrado
import Perfil from './Components/public/Perfil.js';
import DispositivoIoT from './Components/public/DispositivoIoT.js';

const AuthRoute = ({ children, allowedRoles }) => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Puede ser un componente de carga
  }
  if (!currentUser) {
    // Si el usuario no está logueado, redirige a la página de registro
    return <Navigate to="/registrarse/" />;
  } else if (allowedRoles && !allowedRoles.includes(currentUser.tipo)) {
    // Si el usuario no tiene el rol permitido, redirige al inicio
    return <Navigate to="/" />;
  }
  // Si el usuario está logueado y tiene el rol permitido, muestra el contenido protegido
  return children;
};

const RegistroRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : <Formulario />;
};

const EmpresaRoute = () => <AuthRoute allowedRoles={['administrador']}><EmpresaForm /></AuthRoute>;
const InsertProRoute = () => <AuthRoute allowedRoles={['administrador']}><InsertProduct /></AuthRoute>;
const InsertUserRoute = () => <AuthRoute allowedRoles={['administrador']}><Insertuser /></AuthRoute>;
const ProductRoute = () => <AuthRoute allowedRoles={['administrador']}><Product /></AuthRoute>;
const UserRoute = () => <AuthRoute allowedRoles={['administrador']}><User /></AuthRoute>;
const ProfileRoute = () => <AuthRoute allowedRoles={['usuario', 'administrador']}><Perfil /></AuthRoute>;
const IoTDeviceRoute = () => <AuthRoute allowedRoles={['usuario']}><DispositivoIoT /></AuthRoute>;
const EditUserRoute= () => <AuthRoute allowedRoles={['administrador']}><EditUser /></AuthRoute>;
const EditProductRoute= () => <AuthRoute allowedRoles={['administrador']}><EditProduct /></AuthRoute>;


const App = () => {
  return (
    <EmpresaProvider>
      <AuthProvider>
        <Router>
          <HeaderWrapper />
          <main style={styles.body}>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/catalogo" element={<CatalogoProductos />} />
              <Route path="/insert-user" element={<InsertUserRoute />} />
              <Route path="/registrarse/*" element={<RegistroRoute />} />
              <Route path="/product" element={<ProductRoute />} />
              <Route path="/user" element={<UserRoute />} />
              <Route path="/perfil" element={<ProfileRoute />} />
              <Route path="/dispositivoIoT" element={<IoTDeviceRoute />} />
              <Route path="/empresaForm" element={<EmpresaRoute />} />
              <Route path="/insert-product" element={<InsertProRoute />} />
              <Route path="/producto/:id" element={<ProductDetails />} />
              <Route path="/edit-user/:id" element={<EditUserRoute />} />
              <Route path="/edit-product/:id" element={<EditProductRoute />} />

            </Routes>
          </main>
          <Footer />
        </Router>
      </AuthProvider>
    </EmpresaProvider>
  );
};

export default App;

// cntrl + k cntrl + c para comentar
// rfce para estructurar el formato react base 