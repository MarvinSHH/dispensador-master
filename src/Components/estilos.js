// Estilos.js
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils/index.js';
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios

const styles = {
    
  body:{
    paddingTop:'100px',
    height:'100%',
  } ,
  header: {
    backgroundColor: colores.fondoHeader,
    color: colores.textoHeader,
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  head: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: colores.fondoLogo,
    width: '190px',
    height: '80px',
    marginLeft: '10px',
  },
  navStyles: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: '10px',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'right',
    padding: '10px 0',
  },
  navLink: {
    color: colores.textoNavLink,
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '20px',
  },

  // Estilos extras que se pasan para el header de la parte publica, en donde se hace un subMenu
  subMenu: {
    display: 'block', // Inicialmente oculto
    position: 'absolute',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1
  },
  subNavLink: {
    color: '#000',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    // Estilos adicionales para los enlaces del submenú aquí...
  },


//ESTOS SON LOS ESTILOS APLICADOS PARA LOS FORMULARIOS, QUE VAN TODO LO QUE ESTA EN LA SECCION DE INICIAR SESION

  container: { //Esta es para el color de la principal
    backgroundColor: colores.fondoPrincipal,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
},
imgArea: {//Este es para ajustar parametros del lado de la imagen 
    width: '2500px',
    minWidth: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    borderRight: `solid 3px ${colores.separador}`,
},
ImagenFondo: {//Ajuste del tamaño de la imagen

    maxWidth: '780px',
    minHeight: '555px',
    minWidth: '300px'
},
formArea: {//Ajusta el parametros del lado de los formularios 
    minWidth: '358px',
    width: '1360px',
    maxWidth: '1500px',
    display: 'flex',
    justifyContent: 'center',
},
formContainer: {//ajuste general de los formularios
    backgroundColor: colores.fondoForm,
    borderRadius: 10,
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '35%',
    minWidth: '290px',
},
cincuenta: { //usado para separar lo input de nombre y apellido
    display: 'flex',
    width: '96%',
    justifyContent: 'space-between'
},
inCincuenta: { //medidas de los imput divididos a la mitad
    width: '45%',
},
title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colores.negro,
    textAlign: "center",
    marginBottom: 20,
},
label: {
    fontSize: 16,
    color: colores.negro,
    marginBottom: 5,
},
input: {
    width: '93%',
    backgroundColor: "#fff",
    borderColor: colores.bordeInput,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
},
registerButton: {
    backgroundColor: colores.boton, // Usado para el color de fondo de los botones, especialmente el botón de registro
    color: colores.textoBoton,
    padding: 15,
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: '100%',
},
loginButtonText: {
    display: 'flex',
    justifyContent: 'right',
    color: colores.linkText,
    textAlign: "center",
    marginTop: 5,
    paddingBottom: '10px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
},


//Estilos aplicados para el home de la pagina
home:{

  backgroundColor: colores.fondoPrincipal,

},

hero: {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px 20px',
  height:'566px',
  textAlign: 'center',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  fontSize:'25px',
  color:'white', 
  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
},
heroOpc:{
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px 20px',
  height:'130px',
  textAlign: 'center',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  fontSize:'25px',
  color:'white', 
  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
},
textDesc:{
  marginTop:'50px',
  marginLeft:'20px',
  paddingLeft:'40px',
  paddingRight:'40px',
  padding:'10px',
  marginRight:'37px',
  backgroundColor:'white',
  borderRadius:'10px',

},
features: {
  backgroundColor: colores.fondoPrincipal,

  padding: '20px 20px',
  textAlign: 'center',
},
featureContainer: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Esto centrará las cards si no llenan toda la línea
  gap: '20px', // Espacio entre las cards
  marginTop: '20px',
},
feature: {
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  width: '25%',
  minHeight: '430px',
  overflow: 'hidden', // Esto ocultará cualquier contenido que sobrepase el cuadro
},

featureDescription: {
  height: '110px', // Ajusta a la altura que desees
  overflow: 'hidden', // Para ocultar contenido que excede la altura máxima
  textOverflow: 'ellipsis', // Para poner puntos suspensivos si el texto es muy largo
  marginBottom: '10px', // Espacio antes del botón "Ver detalles"
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
  width: '100%',
},
//ESTILOS PARA EL FOOTER
footerDatos:{
  height:'auto',
  backgroundColor:colores.footerColorUp,
  display:'flex',
  justifyContent:'space-between',
  paddingLeft:'10px',
  paddingRight:'10px',

  margin:'0',
},
datos:{
  color:'#daebff',
  display:'flex',
  paddingTop:'10px',
  paddingBottom:'10px',
  flexDirection:'column',
  justifyContent:'center',
},
redes:{
  color:'#daebff',
  display:'flex',
  paddingTop:'10px',
  paddingBottom:'10px',
  flexDirection:'column',
  justifyContent:'center',
},
icons:{
  paddingTop:'10px',
  display:'flex',
  justifyContent:'space-between',
},
footer: {
  padding:0,
  margin:0,
  backgroundColor: "black",
  display:'flex',
  justifyContent:'center',
  color: "white",
  height:'22px'

},
navLinkFooter:{
  color: '#fff', // Color blanco para el texto del enlace
  textDecoration: 'none', // Elimina el subrayado de los enlaces
  // Estilos para los estados hover y active
  '&:hover, &:active': {
    color: '#fff', // Mantiene el color blanco al pasar el mouse y al hacer clic
    textDecoration: 'none', // Asegura que no haya subrayado al pasar el mouse
  },
},
iconsLink: {
  color: '#fff', // Establece el color de los íconos a blanco
  textDecoration: 'none', // Elimina el subrayado de los íconos
  // Añade estilos para hover o focus si es necesario
  '&:hover, &:focus': {
    color: '#fff', // Color cuando el mouse está sobre el ícono o está enfocado
    textDecoration: 'none',
  },
},

};



export default styles;
