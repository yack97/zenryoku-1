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
      <ListarUsuarios />
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import ListarUsuarios from '../components/ListarUsuarios.vue';

export default {
  components: {
    ListarUsuarios,
  },
  data() {
    return {
      email: "",
      password: "",
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
          role: 'user', // Asignar rol 'user' al nuevo usuario
        });

        console.log("Usuario creado y guardado en Firestore:", user);

        this.email = "";
        this.password = "";

        // Aquí puedes llamar a una función para actualizar la lista de usuarios en el componente hijo si es necesario
      } catch (error) {
        console.error("Error al crear el usuario:", error.message);
      }
    },
    async startEditing(user) {
      this.isEditing = true;
      this.email = user.email;
      this.currentUserId = user.id;
    },
  },
  created() {
    // Puedes hacer una llamada a una función para obtener usuarios si lo deseas
  },
};
</script>