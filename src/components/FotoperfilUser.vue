<template>
  <div class="flex justify-center items-center flex-col relative w-full max-w-xs mx-auto">
  <div class="pb-3">
    <h2>Foto de perfil </h2>
  </div>
    <div class="w-[200px] h-[200px]">
      <img 
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
        class="w-full h-full object-cover" 
        style="clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);" 
        alt="Hexagonal Image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
};
</script>
