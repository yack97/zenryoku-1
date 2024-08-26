<template>
  <div class="flex flex-col lg:flex-row justify-center items-start gap-8 p-4 lg:p-16">
    <!-- Contenedor para Crear/Editar Usuario -->
    <div class="w-full lg:w-1/2 flex flex-col gap-4">
      <form @submit.prevent="isEditing ? updateUser() : createUser()">
        <h2 class="text-xl lg:text-2xl font-bold">{{ isEditing ? 'Editar Usuario' : 'Crear Usuario' }}</h2>
        <div class="w-full flex flex-col justify-start items-start gap-1.5">
          <label for="email" class="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
            Email
          </label>
          <input
            type="text"
            v-model="email"
            class="w-full focus:outline-none text-slate-500 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-md border border-gray-200"
            placeholder="email@example.com"
          />
        </div>
        <div class="w-full flex flex-col justify-start items-start gap-1.5">
          <label for="password" class="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">
            Contraseña
          </label>
          <input
            type="password"
            v-model="password"
            class="w-full focus:outline-none text-slate-500 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-md border border-gray-200"
            placeholder="************"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {{ isEditing ? 'Actualizar Usuario' : 'Crear Usuario' }}
        </button>
      </form>
    </div>

    <!-- Contenedor para Lista de Usuarios -->
    <div class="w-full lg:w-1/2 flex flex-col gap-4">
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
                @click="startEditing(user)"
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
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateEmail, updatePassword } from "firebase/auth";
import { db } from '../FirebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
      users: [],
      isEditing: false,
      currentUserId: null,
    };
  },
  methods: {
    async createUser() {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
          uid: user.uid,
          email: user.email,
        });

        console.log("Usuario creado y guardado en Firestore:", user);

        this.email = "";
        this.password = "";

        this.fetchUsers();
      } catch (error) {
        console.error("Error al crear el usuario:", error.message);
      }
    },
    async startEditing(user) {
      this.isEditing = true;
      this.email = user.email;
      this.currentUserId = user.id;
    },
    async updateUser() {
      const auth = getAuth();
      try {
        const userRef = doc(db, "users", this.currentUserId);
        const userSnapshot = await getDocs(userRef);

        if (userSnapshot.exists()) {
          const userAuth = auth.currentUser;
          if (userAuth) {
            await updateEmail(userAuth, this.email);
            if (this.password) {
              await updatePassword(userAuth, this.password);
            }
          }

          await updateDoc(userRef, {
            email: this.email,
          });

          console.log("Usuario actualizado en Firestore y Auth:", this.email);

          this.email = "";
          this.password = "";
          this.isEditing = false;
          this.currentUserId = null;

          this.fetchUsers();
        }
      } catch (error) {
        console.error("Error al actualizar el usuario:", error.message);
      }
    },
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
        this.fetchUsers();
      } catch (error) {
        console.error("Error al eliminar el usuario:", error.message);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* Añade estilos adicionales aquí si es necesario */
</style>