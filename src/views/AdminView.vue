<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <NavComponenteAdmin />
    </header>
    <main class="flex-grow flex py-8">
      <div class="w-full ">
        <ListComponent />
      </div>
    </main>
  </div>
</template>

<script>
import NavComponenteAdmin from '../components/NavComponenteAdmin.vue';
import ListComponent from '../components/ListComponent.vue';

export default {
  components: {
    NavComponenteAdmin,
    ListComponent,
  },
};
</script>