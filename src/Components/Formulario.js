import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from "./estilos";

import imgFondo from '../assets/bienvenido.jpg'

import FrmLogin from "./FrmLogin";
import FrmRegistro from "./FrmRegistro";
import FrmRecuperar from "./FrmRecuperar";
import ResetPassword from "./ResetPassword";

const Formulario = () => {

  return (
    <div style={styles.container}>
      <div style={styles.imgArea}>
        <img style={styles.ImagenFondo} src={imgFondo} alt="Fondo" />
      </div>

      <div style={styles.formArea}>
        <Routes>
          <Route index element={<FrmLogin />} />
          <Route path="registro" element={<FrmRegistro />} />
          <Route path="recuperar" element={<FrmRecuperar />} />
          <Route path="recuperar-contrasena/:token" element={<ResetPassword />} />

        </Routes>

      </div>
    </div>
  );
};



export default Formulario;