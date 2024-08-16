<template>
    <div>
        <Hero />
        <Video />
        <Precing />
        <Frase />
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Video from '../components/Video.vue'
import Precing from '../components/Precing.vue'
import Frase from '../components/Frase.vue'

export default {
  components: {
    Hero,
    Video,
    Precing,
    Frase
  }
};
</script>
