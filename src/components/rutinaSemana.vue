<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Rutina Semanal</h1>
      <ul>
        <li 
          v-for="(item, index) in rutinaSemana" 
          :key="index" 
          class="bg-gray-100 p-2 rounded mb-2 flex items-center"
        >
          <input 
            type="checkbox" 
            v-model="item.completed" 
            @change="updateTask(index)" 
            class="mr-2"
          />
          {{ item.nombre }} - {{ item.dia }}
        </li>
      </ul>
      <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { db } from '../FirebaseConfig'; // Importar Firestore
  import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
  import { useUserStore } from '../stores/userStore'; // Store del email del usuario
  
  export default {
    setup() {
      const userStore = useUserStore(); // Obtener el email del usuario desde el store
      const rutinaSemana = ref([]);
      const errorMessage = ref('');
  
      const fetchRoutineData = async () => {
        let email = userStore.email; // Obtener el email del usuario desde el store
  
        // Si no se encuentra el email en el store, buscar en el localStorage
        if (!email) {
          email = localStorage.getItem('userEmail'); // Asegúrate de que la clave sea correcta
        }
  
        // Si no hay email en ambos lugares, manejar el error
        if (!email) {
          errorMessage.value = 'No se encontró el email del usuario.';
          return;
        }
  
        const collectionName = `${email}`; // Usar el email directamente como nombre de la colección
        try {
          const querySnapshot = await getDocs(collection(db, collectionName));
          querySnapshot.forEach(doc => {
            const data = doc.data();
            rutinaSemana.value.push({ ...data, completed: data.completed || false, id: doc.id }); // Asegúrate de que 'completed' esté definido
          });
        } catch (error) {
          console.error('Error al obtener la rutina:', error);
          errorMessage.value = 'Error al cargar la rutina.';
        }
      };
  
      const updateTask = async (index) => {
        let email = userStore.email; // Obtener el email del usuario desde el store
  
        // Si no se encuentra el email en el store, buscar en el localStorage
        if (!email) {
          email = localStorage.getItem('userEmail'); // Asegúrate de que la clave sea correcta
        }
  
        // Si no hay email en ambos lugares, manejar el error
        if (!email) {
          console.error('No se encontró el email del usuario para actualizar la tarea.');
          return;
        }
  
        const collectionName = `${email}`; // Usar el email directamente como nombre de la colección
        const task = rutinaSemana.value[index];
  
        try {
          const taskDoc = doc(collection(db, collectionName), task.id); // Asegúrate de que task.id esté definido
          await updateDoc(taskDoc, { completed: task.completed });
          console.log('Tarea actualizada en Firestore.');
        } catch (error) {
          console.error('Error al actualizar la tarea en Firestore:', error);
        }
      };
  
      onMounted(fetchRoutineData);
  
      return {
        rutinaSemana,
        updateTask,
        errorMessage,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>