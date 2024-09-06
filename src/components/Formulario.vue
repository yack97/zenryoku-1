<template>
    <div class="flex mt-32 p-8 mx-auto max-w-3xl text-center text-slate-900 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-600 xl:p-20 dark:bg-gray-800 dark:text-white">
        <form @submit.prevent="handleSubmit">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-lg font-semibold leading-7 text-gray-800 dark:text-slate-100">Transforma tu vida hoy: ¡Solicita tu plan personalizado de entrenamiento y bienestar!</h2>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">🚀 ¿ESTÁS LISTO PARA TRANSFORMAR TU VIDA Y ALCANZAR TU MÁXIMO POTENCIAL? 💪</p>
                </div>
                <div class="border-b border-gray-900/10 pb-12">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="nombre" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100">Nombre <span class="text-red-500">*</span></label>
                            <div class="mt-2">
                                <input type="text" name="nombre" id="nombre" v-model="nombre" required autocomplete="given-name" placeholder="Ej: Juan"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="apellido" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100">Apellido <span class="text-red-500">*</span></label>
                            <div class="mt-2">
                                <input type="text" name="apellido" id="apellido" v-model="apellido" required autocomplete="family-name" placeholder="Ej: Pérez"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="edad" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100">Edad <span class="text-red-500">*</span></label>
                            <div class="mt-2">
                                <input type="number" name="edad" id="edad" v-model="edad" required autocomplete="age" placeholder="Ej: 25"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="telefono" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100">Número de teléfono <span class="text-red-500">*</span></label>
                            <div class="mt-2">
                                <input type="tel" name="telefono" id="telefono" v-model="telefono" required placeholder="Ej: 1234567890"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100">Email: <span class="text-red-500">*</span></label>
                            <div class="mt-2">
                                <input id="email" v-model="email" name="email" type="email" required autocomplete="email" placeholder="Ej: ejemplo@dominio.com"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="pais" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100">País <span class="text-red-500">*</span></label>
                            <div class="mt-2">
                                <select id="pais" name="pais" v-model="selectedCountry" required autocomplete="country-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-gray-700 mt-2">
                                    <option value="" disabled selected>Selecciona tu país</option>
                                    <option v-for="pais in paises" :key="pais" :value="pais">{{ pais }}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-3 mt-8">
                        <fieldset>
                            <legend class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100 mb-8">¿Con qué frecuencia haces ejercicio actualmente? <span class="text-red-500">*</span></legend>
                            <div class="flex items-center mb-4" v-for="(opcion, index) in opciones" :key="index">
                                <input :id="'option-' + index" type="radio" name="frecuencia-ejercicio" :value="opcion.value" required
                                    class="w-4 h-4 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" v-model="frecuenciaSeleccionada" />
                                <label :for="'option-' + index" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {{ opcion.texto }}
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="profesion" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100 mt-8 mb-6">¿Cuál es tu trabajo (cargo y profesión)? <span class="text-red-500">*</span></label>
                        <div class="mt-2">
                            <input type="text" name="profesion" id="profesion" v-model="profesion" required autocomplete="given-name" placeholder="Ej: Entrenador Personal"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="objetivo1" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100 mt-8 mb-6">¿Qué es lo que más te gustaría conseguir específicamente gracias a la mentoría? <span class="text-red-500">*</span></label>
                        <textarea id="objetivo1" v-model="objetivo1" rows="4" required placeholder="Deja que tu corazón hable..."
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"></textarea>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="objetivo2" class="block text-sm font-medium leading-6 text-gray-800 dark:text-slate-100 mt-8 mb-6">¿Cuál es tu principal motivación para mejorar tu estado físico? <span class="text-red-500">*</span></label>
                        <textarea id="objetivo2" v-model="objetivo2" rows="4" required placeholder="Deja que tu corazón hable..."
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"></textarea>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enviar</button>
            </div>
        </form>
    </div>
    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <div class="relative bg-white p-4 rounded-lg shadow-lg w-4/5 h-4/5">
            <!-- Botón de Cerrar -->
            <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <!-- Contenido del modal (iframe) -->
            <iframe :src="calendlyLink" class="w-full h-full border-0"></iframe>
        </div>
    </div>
</template>


<script>
import { paises } from '../js/Paises.js';
import { db } from '../FirebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            paises,
            nombre: '',
            apellido: '',
            edad: '',
            telefono: '',
            email: '',
            selectedCountry: '',
            opciones: [
                { texto: 'Nunca', value: 'Nunca' },
                { texto: '1-2 veces por semana', value: '1-2 veces por semana' },
                { texto: '3-4 veces por semana', value: '3-4 veces por semana' },
                { texto: '5-7 veces por semana', value: '5-7 veces por semana' },
            ],
            frecuenciaSeleccionada: '',
            profesion: '',
            objetivo1: '',
            objetivo2: '',
            showModal: false,
            calendlyLink: 'https://calendly.com/carlosbazan-zenryoku/asesoria-1-1',
            error: null, 
        };
    },
    methods: {
        async handleSubmit() {
            this.error = null;

            if (!this.isValidEmail(this.email)) {
                this.error = 'Por favor, ingrese un correo electrónico válido.';
                return;
            }

            try {
                const usuariosCollection = collection(db, 'formulario');
                await addDoc(usuariosCollection, {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    edad: this.edad,
                    telefono: this.telefono,
                    email: this.email,
                    selectedCountry: this.selectedCountry,
                    frecuenciaSeleccionada: this.frecuenciaSeleccionada,
                    profesion: this.profesion,
                    objetivo1: this.objetivo1,
                    objetivo2: this.objetivo2,
                    createdAt: Timestamp.now(),
                });

                console.log('Formulario guardado');
                this.limpiarFormulario();
                this.showModal = true; // Mostrar el modal DESPUÉS de guardar con éxito
            } catch (error) {
                console.error('Error al guardar el formulario:', error);
                this.error = 'Error al guardar. Inténtalo de nuevo.';
                this.showModal = false;
            }
        },


        isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        closeModal() {
            this.showModal = false; // Cierra el modal
            this.mostrarAlerta(); // Muestra la alerta inmediatamente
        },
        limpiarFormulario() {
            this.nombre = '';
            this.apellido = '';
            this.edad = '';
            this.telefono = '';
            this.email = '';
            this.selectedCountry = '';
            this.frecuenciaSeleccionada = '';
            this.profesion = '';
            this.objetivo1 = '';
            this.objetivo2 = '';
        },
        mostrarAlerta() {
            Swal.fire({
                title: 'Cada paso cuenta!!',
                text: 'Muchas gracias por querer contactarnos, haremos que cada pequeño paso tenga valor',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                background: '#1a1a1a',
                color: '#ffffff',
                iconColor: '#3085d6',
                confirmButtonColor: '#3085d6'
            });
        },
    },
};
</script>