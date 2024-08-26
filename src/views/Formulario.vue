<template>
  <header>
    <Navbar />
  </header>
  <main class="relative">
    <div class="background-image background-image1"></div>
    <div class="background-image background-image2"></div>
    <Formulario />
    <div class="background-image background-image3"></div>
    <div class="background-image background-image4"></div>
  </main>
  <Footer />
</template>

<script>
import Formulario from '../components/Formulario.vue'; 
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Formulario,
    Footer,
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden; /* Previene el scroll horizontal */
}

main {
  padding: 1rem; /* Agrega un poco de padding para mantener el contenido separado del borde */
}

.background-image {
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  pointer-events: none;
  transition: all 0.3s ease-in-out; /* Transición suave para ajustes de tamaño */
}

/* Imagen de fondo 1 (Elipse a la izquierda, parte superior) */
.background-image1 {
  top: 0%;
  left: -1rem;
  width: 50rem;
  height: 50rem;
  background-image: url('../assets/Ellipse-2-3.svg');
  opacity: 0.6;
}

/* Imagen de fondo 2 (Elipse a la derecha, parte superior) */
.background-image2 {
  top: 0%;
  right: -1rem;
  width: 50rem;
  height: 50rem;
  background-image: url('../assets/Ellipse-1.svg');
  opacity: 0.9;
}

/* Imagen de fondo 3 (Elipse a la izquierda, parte inferior, color invertido) */
.background-image3 {
  bottom: 0%;
  left: -1rem;
  width: 40rem;
  height: 40rem;
  background-image: url('../assets/Ellipse-1.svg');
  opacity: 05;
}

/* Imagen de fondo 4 (Elipse a la derecha, parte inferior, color invertido) */
.background-image4 {
  bottom: 0%;
  right: -1rem;
  width: 50rem;
  height: 50rem;
  background-image: url('../assets/Ellipse-2-3.svg');
  opacity: 0.6;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .background-image {
    width: 30rem;
    height: 30rem;
    left: -8rem;
    right: -8rem;
    bottom: -8%;
  }
}

@media (max-width: 768px) {
  .background-image {
    width: 20rem;
    height: 20rem;
    left: -5rem;
    right: -5rem;
    bottom: -5%;
  }
}

@media (max-width: 480px) {
  .background-image {
    width: 15rem;
    height: 15rem;
    left: -3rem;
    right: -3rem;
    bottom: -3%;
  }
}
</style>