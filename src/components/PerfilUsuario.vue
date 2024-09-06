<template>
  <div class="flex flex-col p-4 space-y-4">
    <!-- Input para cargar foto -->
    <input type="file" @change="onFileChange"
      class="mt-4 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded cursor-pointer" />

    <!-- Botón para subir foto -->
    <button @click="uploadPhoto" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Cambiar foto
    </button>

    <!-- Título -->
    <h2 class="text-xl font-bold">Perfil de Usuario</h2>

    <!-- Información del usuario -->
    <div v-if="formData" class="space-y-2">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Email:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.email }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Nombre:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.nombre }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Apellido:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.apellido }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Edad:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.edad }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Teléfono:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.telefono }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>País:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.selectedCountry }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Intensidad:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.frecuenciaSeleccionada }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Profesión:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.profesion }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Objetivo 1:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.objetivo1 }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Objetivo 2:</strong></p>
              </th>
              <td class="px-6 py-4">{{ formData.objetivo2 }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Foto de perfil -->
      <div class="mt-4">
        <img v-if="formData.foto" :src="formData.foto" alt="Foto de perfil"
          class="w-32 h-32 rounded-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../FirebaseConfig';
import { query, collection, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      formData: null,
      selectedFile: null,
      isAuthenticated: false,
    };
  },
  methods: {
    async fetchUserData(user) {
      const username = this.$route.params.username;

      if (user && username) {
        // Verifica si los datos ya están en localStorage
        const savedData = localStorage.getItem(`userFormData_${username}`);
        if (savedData) {
          this.formData = JSON.parse(savedData);
        } else {
          // Si no están en localStorage, consulta Firestore
          const usersQuery = query(collection(db, "formulario"), where("email", "==", username));
          const querySnapshot = await getDocs(usersQuery);

          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              this.formData = doc.data();
              // Guarda los datos en localStorage
              localStorage.setItem(`userFormData_${username}`, JSON.stringify(this.formData));
            });
          } else {
            console.error("No se encontró el documento del usuario");
          }
        }
      } else {
        console.error("No se pudo obtener el username desde la ruta.");
      }
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadPhoto() {
      // Lógica para subir la foto a Firebase Storage y actualizar Firestore
    },
  },
  created() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isAuthenticated = true;
        this.fetchUserData(user);
      } else {
        console.error("No hay usuario autenticado");
      }
    });
  },
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
</style>