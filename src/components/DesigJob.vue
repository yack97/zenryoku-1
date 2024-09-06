<template>
  <div class="flex flex-col md:flex-row w-full h-full">
    <div class=" w-full md:w-1/3 h-full">
      <buscarUsuario />
      Esto es una columna
    </div>
    <div class=" w-full md:w-1/3 h-full">
      <DesignTareasUSer />
      Esto es otra columna
    </div>
    <div class="bg-red-500 w-full md:w-1/3 h-full">
      Esto es otra columna
    </div>
  </div>
</template>

<script>
import buscarUsuario from '../components/buscarUsuario.vue';
import DesignTareasUSer from '../components/DesignTareasUSer.vue';

export default {
  components: {
    buscarUsuario,
    DesignTareasUSer,
  },
};
</script>