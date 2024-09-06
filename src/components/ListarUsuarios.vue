<template>
  <div>
    <h2 class="text-xl lg:text-2xl font-bold">Lista de Usuarios</h2>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="$emit('edit-user', user)"
            >
              Editar
            </button>
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              @click="deleteUser(user.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '../FirebaseConfig';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.users = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error.message);
      }
    },
    async deleteUser(userId) {
      try {
        await deleteDoc(doc(db, "users", userId));
        console.log("Usuario eliminado:", userId);
        this.fetchUsers(); // Actualiza la lista después de eliminar
      } catch (error) {
        console.error("Error al eliminar el usuario:", error.message);
      }
    },
  },
  created() {
    this.fetchUsers(); // Llama a la función al crear el componente
  },
};
</script>