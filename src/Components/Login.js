import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Inicio = () => {
  const navigateTo = (screen) => {
    console.log(`Navigating to ${screen}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Iniciar dasdas</Text>
          <View style={styles.inputContainer}>
            {/* Usuario Label */}
            <Text style={styles.inputLabel}>Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu usuario"
              placeholderTextColor="#4a4646"
            />
            {/* Contraseña Label */}
            <Text style={styles.inputLabel}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu contraseña"
              secureTextEntry={true}
              placeholderTextColor="#4a4646"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5, 7, 12, 0.75)",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center', // Esto centra el contenido verticalmente
    alignItems: 'center', // Esto centra el contenido horizontalmente
  },
  loginContainer: {
    width: "90%",
    backgroundColor: "#FFF", // Fondo blanco para el contenedor de inicio de sesión
    borderRadius: 10,
    overflow: "hidden",
    padding: 30, // Espaciado interno para todo el contenedor
    alignItems: 'center', // Asegura que los elementos internos también se centren
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 20,
    color: "#000", // Cambiado a negro para contraste
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%', // Asegura que el contenedor de input use todo el ancho disponible
  },
  inputLabel: {
    color: "#000",
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start', // Alinea las etiquetas a la izquierda
  },
  input: {
    backgroundColor: "#FFF",
    color: "#000",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
    width: '100%', // Asegura que el input use todo el ancho disponible
  },
  button: {
    backgroundColor: "#0CB7F2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: '100%', // Los botones también deben expandirse al ancho completo
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default Inicio;
