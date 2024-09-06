<template>
  <header>
    <NavComponenteAdmin />
  </header>
  <div>
    <div >
    <ListComponent />
  </div>
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