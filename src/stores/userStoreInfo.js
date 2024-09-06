// stores/userStoreInfo.js
import { defineStore } from 'pinia';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../FirebaseConfig';
import { query, collection, where, getDocs } from "firebase/firestore";

export const useUserStoreInfo = defineStore('userStoreInfo', {
  state: () => ({
    formData: null,         // Datos del formulario obtenidos de Firestore
    selectedFile: null,     // Archivo seleccionado (foto)
    isAuthenticated: false, // Estado de autenticación del usuario
  }),
  actions: {
    async fetchUserData(email) { // Recibe 'email' como argumento
      if (!email) {
        console.error("Email no proporcionado.");
        return;
      }

      // Verifica si los datos ya están en localStorage
      const savedData = localStorage.getItem(`userFormData_${email}`);
      if (savedData) {
        this.formData = JSON.parse(savedData);
      } else {
        try {
          // Si no están en localStorage, consulta Firestore
          const usersQuery = query(collection(db, "formulario"), where("email", "==", email));
          const querySnapshot = await getDocs(usersQuery);

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              this.formData = doc.data();
              // Guarda los datos en localStorage
              localStorage.setItem(`userFormData_${email}`, JSON.stringify(this.formData));
            });
          } else {
            console.error("No se encontró el documento del usuario en Firestore.");
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      }
    },
    setFile(file) { // Método para almacenar el archivo seleccionado
      this.selectedFile = file;
    },
    async uploadPhoto() { // Método para subir la foto a Firebase Storage
      if (!this.selectedFile) {
        console.error("No se ha seleccionado ningún archivo para subir.");
        return;
      }

      try {
        // Lógica para subir la foto a Firebase Storage y actualizar Firestore
        console.log("Subiendo la foto:", this.selectedFile);
        // Aquí iría la lógica real de subida, que podrías implementar con Firebase Storage
      } catch (error) {
        console.error("Error al subir la foto:", error);
      }
    },
    checkAuth() { // Método para verificar el estado de autenticación del usuario
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.isAuthenticated = !!user;
      });
    }
  },
});