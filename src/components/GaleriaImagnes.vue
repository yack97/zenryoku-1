<template>
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-8">Cada Cambio cuneta</h2>
      <p class=" text-center mb-8">Dejemos registrado nuestro trabjao!</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="rounded-lg shadow-md p-4">
          <h2 class="text-xl font-bold mb-4">Antes</h2>
          <div class="grid grid-cols-1 gap-4">
            <img v-for="image in imagesBefore" :key="image.id" :src="image.url" alt="Imagen" class="w-full rounded-lg object-cover">
          </div>
        </div>
        <div class=" rounded-lg shadow-md p-4">
          <h2 class="text-xl font-bold mb-4">Después</h2>
          <div class="grid grid-cols-1 gap-4">
            <img v-for="image in imagesAfter" :key="image.id" :src="image.url" alt="Imagen" class="w-full rounded-lg object-cover">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagesBefore: [
          { id: 1, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 2, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 4, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 5, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 6, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        ],
        imagesAfter: [
          { id: 1, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 2, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 4, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 5, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
          { id: 6, url: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos específicos aquí si es necesario */
  </style>