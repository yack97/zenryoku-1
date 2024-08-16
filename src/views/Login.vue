<template>
    <div>
      <div class="background-image background-image1"></div>
      <div class="background-image background-image2"></div>
        <Login />

    </div>
  </template>
  
  <script>
  import Login from '../components/Login.vue'
  
  export default {
  components: {
    Login
  }
  };
  </script>

<style>
body {
  overflow-x: hidden; /* Previene el scroll horizontal */
}

/* Clase base para las imágenes de fondo */
.background-image {
  position: absolute;
  width: 50rem; /* Ancho de la imagen */
  height: 50rem; /* Altura de la imagen */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1; /* Asegura que la imagen esté en una capa baja */
  pointer-events: none; /* Hace que la imagen no interfiera con eventos del ratón */
}

/* Imagen de fondo 1 (Elipse a la izquierda, parte superior) */
.background-image1 {
  left: -15rem; /* Coloca la imagen fuera de la pantalla a la izquierda */
  top: 25%; /* Posiciona en la parte superior */
  transform: translateY(-50%); /* Corrige el centrado vertical */
  background-image: url('../assets/Ellipse-2-3.svg');
  opacity: 0.2; /* Ajusta la opacidad */
}

/* Imagen de fondo 2 (Elipse a la derecha, parte superior) */
.background-image2 {
  right: -20rem; /* Coloca la imagen fuera de la pantalla a la derecha */
  top: 25%; /* Posiciona en la parte superior */
  transform: translateY(-50%); /* Corrige el centrado vertical */
  background-image: url('../assets/Ellipse-1.svg');
  opacity: 0.5; /* Ajusta la opacidad */
}


</style>
  