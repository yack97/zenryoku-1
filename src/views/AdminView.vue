<template>
  <header>
    <NavComponenteAdmin />
  </header>
  <div>
    <Calendar />
  </div>
  <div>
    <AdminComponent />
  </div>
</template>

<script>
import AdminComponent from '../components/AdminComponent.vue';
import NavComponenteAdmin from '../components/NavComponenteAdmin.vue';
import Calendar from '../components/CalendarComponente.vue';

export default {
  components: {
    AdminComponent,
    NavComponenteAdmin,
    Calendar,
  },
};
</script>