<<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <Navbar />
      <div class="background-image background-image2 absolute inset-0 z-0"></div>

    </header>

    <main class="flex-grow flex flex-col items-center justify-center relative">
      <div class="background-image background-image1 absolute inset-0 z-0"></div>
      <Login class="z-10" />
    </main>


    <footer class="pt-6">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Login,
    Navbar,
    Footer,
  }
};
</script>

<style >
body {
  overflow-x: hidden; /* Previene el scroll horizontal */
}

/* Clase base para las imágenes de fondo */
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
  left: -10rem;
  width: 40rem;
  height: 40rem;
  background-image: url('../assets/Ellipse-2-3.svg');
  opacity: 0.3;
}

/* Imagen de fondo 2 (Elipse a la derecha, parte superior) */
.background-image2 {
  top: 0%;
  right: -1rem;
  width: 60rem;
  height: 60rem;
  background-image: url('../assets/Ellipse-1.svg');
  opacity: 01;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .background-image {
    width: 30rem;
    height: 30rem;
    left: -8rem;
    right: -8rem;
  }
}

@media (max-width: 768px) {
  .background-image {
    width: 20rem;
    height: 20rem;
    left: -5rem;
    right: -5rem;
  }
}

@media (max-width: 480px) {
  .background-image {
    width: 15rem;
    height: 15rem;
    left: -3rem;
    right: -3rem;
  }
}
</style>