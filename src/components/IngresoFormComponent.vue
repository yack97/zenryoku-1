<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Nombre</th>
                    <th scope="col" class="px-6 py-3">Apellido</th>
                    <th scope="col" class="px-6 py-3">Edad</th>
                    <th scope="col" class="px-6 py-3">Teléfono</th>
                    <th scope="col" class="px-6 py-3">Email</th>
                    <th scope="col" class="px-6 py-3">País</th>
                    <th scope="col" class="px-6 py-3">Intensidad</th>
                    <th scope="col" class="px-6 py-3">Profesión</th>
                    <th scope="col" class="px-6 py-3">Objetivo</th>
                    <th scope="col" class="px-6 py-3">Motivación</th>
                </tr>
            </thead>
            <tbody id="data-table">
                <!-- Los datos de Firestore se insertarán aquí -->
            </tbody>
        </table>
    </div>
</template>

<script>
import { db } from '../FirebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default {
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const q = query(collection(db, "formulario"), orderBy("createdAt", "desc")); // Ordenar por createdAt de manera descendente
            const querySnapshot = await getDocs(q);
            const dataTable = document.getElementById("data-table");
            dataTable.innerHTML = ""; // Limpiar la tabla antes de llenarla

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const row = `
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${data.nombre}
                        </th>
                        <td class="px-6 py-4">${data.apellido}</td>
                        <td class="px-6 py-4">${data.edad}</td>
                        <td class="px-6 py-4">${data.telefono}</td>
                        <td class="px-6 py-4">${data.email}</td>
                        <td class="px-6 py-4">${data.selectedCountry}</td>
                        <td class="px-6 py-4">${data.frecuenciaSeleccionada}</td>
                        <td class="px-6 py-4">${data.profesion}</td>
                        <td class="px-6 py-4">${data.objetivo1}</td>
                        <td class="px-6 py-4">${data.objetivo2}</td>
                    </tr>
                `;
                dataTable.innerHTML += row;
            });
        }
    }
}
</script>

<style scoped></style>