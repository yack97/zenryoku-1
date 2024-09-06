// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',  // Aquí almacenamos el email del usuario.
  }),
  actions: {
    setEmail(email) {  // Acción para actualizar el email en el store.
      this.email = email;
    },
  },
});