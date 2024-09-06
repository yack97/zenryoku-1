<template>


<div class="inline-flex rounded-md shadow-sm pb-4 ms:pb-0" role="group">
  <button @click="currentComponent = 'IngresoForm'" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Inscritos por formulario

  </button>
  <button @click="currentComponent = 'CreateUsuario'" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Crear usuario

  </button>
  <button @click="currentComponent = 'DesigJob'"  type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    Designar tareas

  </button>
</div>

  <div class="mt-8 lg:mt-0 lg:w-7/10 lg:pl-20 lg:pr-20 sm:pl-2">
    <!-- Componente dinámico -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import IngresoForm from '../components/IngresoFormComponent.vue';
import CreateUsuario from '../components/CrearUsuarioComponent.vue';
import DesigJob from '../components/DesigJob.vue'

export default {
  components: {
    IngresoForm,
    CreateUsuario,
    DesigJob,
  },
  data() {
    return {
      currentComponent: 'IngresoForm', // Componente inicial
    };
  },
};
</script>