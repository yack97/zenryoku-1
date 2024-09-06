<template>
    <div class="flex flex-col md:flex-row items-center gap-4">
      <label for="search" class="block text-sm font-medium text-gray-700">
        Buscar usuario:
      </label>
      <input
        type="text"
        id="search"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="searchTerm"
        placeholder="email"
      />
      <button @click="fetchUserData" class="bg-blue-500 text-white px-4 py-2 rounded">Buscar</button>
    </div>
  
    <!-- Título -->
    <h2 class="text-xl font-bold mt-4">Perfil de Usuario</h2>
  
    <!-- Información del usuario -->
    <div v-if="userStoreInfo.formData" class="space-y-2 mt-4">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Email:</strong></p>
              </th>
              <td class="px-6 py-4">{{ userStoreInfo.formData.email }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Nombre:</strong></p>
              </th>
              <td class="px-6 py-4">{{ userStoreInfo.formData.nombre }}</td>
            </tr>
            <!-- Añade más filas aquí para los otros campos -->
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Profesión:</strong></p>
              </th>
              <td class="px-6 py-4">{{ userStoreInfo.formData.profesion }}</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <p><strong>Objetivo 1:</strong></p>
              </th>
              <td class="px-6 py-4">{{ userStoreInfo.formData.objetivo1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Foto de perfil -->
      <div class="mt-4">
        <img v-if="userStoreInfo.formData.foto" :src="userStoreInfo.formData.foto" alt="Foto de perfil"
             class="w-32 h-32 rounded-full object-cover" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useUserStore } from '../stores/userStore'; // Store para manejar el email
  import { useUserStoreInfo } from '../stores/userStoreInfo'; // Store para manejar la lógica común
  
  export default {
    setup() {
      const userStore = useUserStore(); // Accede al store del email
      const userStoreInfo = useUserStoreInfo(); // Accede al store de la lógica común
  
      const searchTerm = ref(""); // Campo de búsqueda de email
  
      // Función para buscar y almacenar el email, y luego ejecutar la lógica común
      const fetchUserData = async () => {
        const email = searchTerm.value;
  
        if (email) {
          try {
            // Guarda el email en el store
            userStore.setEmail(email);
            // Llama a la función del otro store para realizar la lógica común
            await userStoreInfo.fetchUserData(email);
          } catch (error) {
            console.error("Error al buscar el usuario:", error);
          }
        } else {
          console.error("Por favor, ingrese un email.");
        }
      };
  
      // Inicializa la verificación de autenticación al montar el componente
      onMounted(() => {
        userStoreInfo.checkAuth();
      });
  
      return {
        searchTerm,
        userStoreInfo,
        fetchUserData,
      };
    },
  };
  </script>