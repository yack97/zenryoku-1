<template>
  <header>
    <Navbar />
  </header>
    <div>
        <Hero />
        <Video />
        <Precing />
        <Frase />
    </div>
    <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue';
import Video from '../components/Video.vue';
import Precing from '../components/Precing.vue';
import Frase from '../components/Frase.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    Hero,
    Video,
    Precing,
    Frase,
    Footer,
  }
};
</script>
