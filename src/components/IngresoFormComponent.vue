<template>
      <!-- Botones de ordenamiento y campo de búsqueda -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-4 px-6">
      <div class="mb-2 md:mb-0">
        <button
          @click="sortAsc"
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition duration-300"
        >
          Ordenar Ascendente
        </button>
        <button
          @click="sortDesc"
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg ml-0 md:ml-2 mt-2 md:mt-0 transition duration-300"
        >
          Ordenar Descendente
        </button>
      </div>
      <div class="w-full md:w-auto">
        <input
          v-model="searchQuery"
          @input="searchUsers"
          type="text"
          class="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Buscar por email o nombre"
        />
      </div>
    </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">


    <!-- Tabla de datos -->
    <table class="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-4 py-3">Nombre</th>
          <th scope="col" class="px-4 py-3">Apellido</th>
          <th scope="col" class="px-4 py-3">Edad</th>
          <th scope="col" class="px-4 py-3 hidden md:table-cell">Teléfono</th>
          <th scope="col" class="px-4 py-3">Email</th>
          <th scope="col" class="px-4 py-3 hidden lg:table-cell">País</th>
          <th scope="col" class="px-4 py-3 hidden lg:table-cell">Intensidad</th>
          <th scope="col" class="px-4 py-3 hidden xl:table-cell">Profesión</th>
          <th scope="col" class="px-4 py-3 hidden xl:table-cell">Objetivo</th>
          <th scope="col" class="px-4 py-3 hidden xl:table-cell">Motivación</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in filteredUsers"
          :key="user.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ user.nombre }}
          </th>
          <td class="px-4 py-4">{{ user.apellido }}</td>
          <td class="px-4 py-4">{{ user.edad }}</td>
          <td class="px-4 py-4 hidden md:table-cell">{{ user.telefono }}</td>
          <td class="px-4 py-4">{{ user.email }}</td>
          <td class="px-4 py-4 hidden lg:table-cell">{{ user.selectedCountry }}</td>
          <td class="px-4 py-4 hidden lg:table-cell">{{ user.frecuenciaSeleccionada }}</td>
          <td class="px-4 py-4 hidden xl:table-cell">{{ user.profesion }}</td>
          <td class="px-4 py-4 hidden xl:table-cell">{{ user.objetivo1 }}</td>
          <td class="px-4 py-4 hidden xl:table-cell">{{ user.objetivo2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  import { ref, computed } from 'vue';  // Importar ref y computed
  import { useUserStoreInfo } from '../stores/userStoreInfo';
  
  export default {
    setup() {
      const userStore = useUserStoreInfo();
      const searchQuery = ref('');  // Definir la variable ref
  
      // Obtener todos los usuarios al montar el componente
      userStore.fetchAllUsers();
  
      // Computed property para filtrar usuarios según el campo de búsqueda
      const filteredUsers = computed(() => {
        if (!searchQuery.value) {
          return userStore.formData;
        }
        return userStore.formData.filter((user) => 
          user.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      // Funciones para ordenar de manera ascendente y descendente
      const sortAsc = () => {
        userStore.formData.sort((a, b) => a.nombre.localeCompare(b.nombre));
      };
  
      const sortDesc = () => {
        userStore.formData.sort((a, b) => b.nombre.localeCompare(a.nombre));
      };
  
      // Función de búsqueda por email o nombre
      const searchUsers = () => {
        // La lógica está en filteredUsers (computed property)
      };
  
      return {
        searchQuery,
        filteredUsers,
        sortAsc,
        sortDesc,
        searchUsers,
      };
    },
  };
  </script>
  
  <style scoped></style>