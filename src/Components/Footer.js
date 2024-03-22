import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from "./estilos";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div style={styles.footerDatos}>
        <div style={styles.datos}>
          <Link style={styles.navLinkFooter} to={'/about'}>¿Quienes Somos?</Link>
          {/* aqui se define a donde te lleva el enlace nombrandolo desde como esta registrado en appjs */}
          <Link style={styles.navLinkFooter} to={'/legal'}>Informacion Legal</Link>
          <Link style={styles.navLinkFooter} to={'/contact'}>Contactanos</Link>
        </div>
        <div style={styles.redes}>
          Redes Sociales<br />
          <div style={styles.icons}>
            <a style={styles.iconsLink} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a style={styles.iconsLink} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a style={styles.iconsLink} href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a style={styles.iconsLink} href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
        <div style={styles.datos}>
          <a>Contactanos</a>
          Direccion: Av.Mexico<br />
          Telefono:7711223344<br />
          Correo:worldPet@gmail.com<br />

        </div>
      </div>

      <div style={styles.footer}>
        &copy; Sitio desarrollado por PM-Planeta-Mascotas 2024
      </div>
    </footer>

  );
};


export default Footer;
