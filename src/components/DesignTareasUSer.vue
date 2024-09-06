<template>
  <div class="rounded-lg p-4">
    <h2>Tareas de la semana {{ weekRange }}</h2>

    <form @submit.prevent="submitForm">
      <div
        v-for="(serie, index) in series"
        :key="index"
        class="grid gap-6 mb-6 md:grid-cols-2 relative"
      >
        <div>
          <label
            for="serie"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Series
          </label>
          <input
            type="text"
            v-model="serie.value"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Serie"
            required
          />
        </div>
        <div>
          <label
            for="repeticiones"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeticiones
          </label>
          <input
            type="text"
            v-model="serie.repeticiones"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Repeticiones"
            required
          />
        </div>
        <button
          type="button"
          @click="removeSerie(index)"
          class="absolute right-0 top-0 text-red-600 hover:text-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:focus:ring-red-800"
        >
          Eliminar
        </button>
      </div>

      <button
        type="button"
        @click="addSerie"
        class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-4"
      >
        Agregar más series
      </button>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { format, startOfWeek, endOfWeek, differenceInWeeks } from 'date-fns';
import { useUserStore } from '../stores/userStore'; // Store del email del usuario
import { db } from '../FirebaseConfig'; // Importar Firestore
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  setup() {
    const userStore = useUserStore(); // Obtener email del usuario desde el store
    const currentDate = new Date();
    const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    const endOfWeekDate = endOfWeek(currentDate, { weekStartsOn: 1 });
    const series = ref([{ value: '', repeticiones: '' }]);
    const exerciseStartDate = ref(null);
    const exerciseWeeks = ref(0);

    // Calcular rango de fechas (lunes a sábado)
    const weekRange = computed(() => {
      const start = format(startOfWeekDate, 'dd/MM/yyyy');
      const end = format(endOfWeekDate.setDate(endOfWeekDate.getDate() - 1), 'dd/MM/yyyy');
      return `${start} - ${end}`;
    });

    // Calcular cuántas semanas de ejercicio lleva el usuario
    const fetchExerciseData = async () => {
      const email = userStore.email; // Obtener el email del usuario desde el store
      if (!email) {
        console.error('Email no encontrado en el store.');
        return;
      }

      const collectionName = `${email}_repeticion`;
      const querySnapshot = await getDocs(collection(db, collectionName));
      const exerciseDates = querySnapshot.docs.map(doc => doc.data().createdAt.toDate());

      if (exerciseDates.length > 0) {
        // Obtener la fecha del primer ejercicio
        exerciseStartDate.value = new Date(Math.min(...exerciseDates));
        // Calcular la diferencia en semanas
        exerciseWeeks.value = differenceInWeeks(currentDate, exerciseStartDate.value) + 1; // +1 para contar la semana actual
      }
    };

    onMounted(fetchExerciseData);

    const addSerie = () => {
      series.value.push({ value: '', repeticiones: '' });
    };

    const removeSerie = (index) => {
      if (series.value.length > 1) {
        series.value.splice(index, 1);
      }
    };

    // Función para enviar los datos a Firestore
    const submitForm = async () => {
      const email = userStore.email; // Obtener el email del usuario desde el store
      if (!email) {
        console.error('Email no encontrado en el store.');
        return;
      }

      const collectionName = `${email}`; // Nombre de la colección
      const data = {
        series: series.value,
        weekRange: weekRange.value,
        weekNumber: exerciseWeeks.value, // Usar el número de semanas de ejercicio
        createdAt: new Date(), // Fecha de creación
        email: email, // Guardar el email del usuario
      };

      try {
        // Utiliza addDoc con la referencia correcta a la colección
        await addDoc(collection(db, collectionName), data);
        console.log('Datos guardados en Firestore con éxito.');
      } catch (error) {
        console.error('Error al guardar los datos en Firestore:', error);
      }
    };

    return {
      weekRange,
      series,
      addSerie,
      removeSerie,
      submitForm,
      exerciseWeeks, // Agregar esta propiedad para acceder al número de semanas de ejercicio
    };
  },
};
</script>