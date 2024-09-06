<template>
  <div class="inline-flex rounded-md shadow-sm pb-4 ms:pb-0 px-8 space-x-4" role="group">
    <button 
      @click="setCurrentComponent('IngresoForm')" 
      type="button" 
      :class="buttonClass(currentComponent === 'IngresoForm')"
    >
      Inscritos por formulario
    </button>
    
    <button 
      @click="setCurrentComponent('CreateUsuario')" 
      type="button" 
      :class="buttonClass(currentComponent === 'CreateUsuario')"
    >
      Crear usuario
    </button>
    
    <button 
      @click="setCurrentComponent('DesigJob')" 
      type="button" 
      :class="buttonClass(currentComponent === 'DesigJob')"
    >
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
  methods: {
    setCurrentComponent(component) {
      this.currentComponent = component;
    },
    buttonClass(isActive) {
      return [
        'px-4 py-2 text-sm font-medium rounded-md transition duration-200',
        isActive 
          ? 'bg-blue-900 text-white shadow-lg' 
          : 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-200'
      ].join(' ');
    }
  },
};
</script>