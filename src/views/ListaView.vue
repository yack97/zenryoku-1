<template>
  <header>
    <NavComponenteAdmin />
  </header>
  <div >
    <ListComponent />
  </div>
  <div>
    <AdminComponent />
  </div>
</template>

<script>
import AdminComponent from '../components/AdminComponent.vue';
import NavComponenteAdmin from '../components/NavComponenteAdmin.vue';
import ListComponent from '../components/ListComponent.vue';

export default {
  components: {
    AdminComponent,
    NavComponenteAdmin,
    ListComponent,
  },
};
</script>