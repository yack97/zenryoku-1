<template>
  <div class="login-container flex flex-col md:flex-row items-center justify-center h-screen mt-16">
    <!-- Imagen -->
    <div class="mb-12 md:mb-0 md:w-6/12 flex justify-center">
      <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" 
           class="w-full max-w-md" alt="Phone image" />
    </div>

    <!-- Login -->
    <div class="flex flex-col md:w-6/12 px-6 py-8 mx-auto">
      <router-link to="/loginAdmin">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-18 h-16 mr-2" src="../assets/Logo-zenryou (1).png" alt="logo">
        </a>
      </router-link>
      <div class="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Un paso que cambiará tu vida.
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu usuario</label>
              <input v-model="email" type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
              <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
            </div>
            <button type="submit" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Ingresar</button>
            <p v-if="error" class="mt-4 text-sm text-red-600">{{ error }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Importa Firestore
import { auth, db } from '../FirebaseConfig'; // Asegúrate de que la ruta sea correcta y exportes Firestore (db)

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null; // Restablece el error
      try {
        // Inicia sesión
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Obtén el documento del usuario desde Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          // Verifica si el rol es 'usuario'
          if (userData.role === "usuario") {
            this.$router.push({ name: 'user' }); // Redirige si el rol es 'usuario'
          } else {
            this.error = "Acceso denegado: No tienes el rol de usuario.";
            auth.signOut(); // Cierra la sesión del usuario
          }
        } else {
          this.error = "No se encontró información de rol para este usuario.";
          auth.signOut(); // Cierra la sesión del usuario
        }
      } catch (error) {
        this.error = error.message; // Muestra el mensaje de error
      }
    },
  },
};
</script>

<style scoped></style>