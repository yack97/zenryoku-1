<template>
  <div class="flex flex-col h-screen">
    <header class="flex-shrink-0">
      <NavComponenteAdmin />
    </header>

    <main class="flex flex-grow flex-col md:flex-row">
      <!-- Lateral Izquierdo -->
      <div class="w-full md:w-1/4 p-4">
        <FotoperfilUser />
        <PerfilUsuario />
      </div>

      <!-- Centro -->
      <div class="w-full md:w-1/2 bg-gray-800 p-4">
        <!-- Contenido del centro -->
        <rutinaSemana />
      </div>

      <!-- Lateral Derecho -->
      <div class="w-full md:w-1/4 p-4">
        <!-- Puedes agregar más contenido aquí -->
        <GaleriaImagnes />
      </div>
    </main>

    <footer class="flex-shrink-0">
      <Footer />
    </footer>
  </div>
</template>
<script>
import NavComponenteAdmin from '../components/NavComponenteAdmin.vue';
import Footer from '../components/Footer.vue';
import PerfilUsuario from '../components/PerfilUsuario.vue';
import FotoperfilUser from '../components/FotoperfilUser.vue';
import GaleriaImagnes from '../components/GaleriaImagnes.vue';
import rutinaSemana from '../components/rutinaSemana.vue';




export default {
  components: {
    NavComponenteAdmin,
    FotoperfilUser,
    PerfilUsuario,
    GaleriaImagnes,
    rutinaSemana,
    Footer,
  }
};
</script>