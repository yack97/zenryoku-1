<template>
    <div
        class="flex mt-32 p-16 mx-auto max-w-3xl text-center text-slate-50 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-20 dark:bg-gray-800 dark:text-white">
        <form @submit.prevent="handleSubmit">
            <div class="space-y-12">
                <div class="border-b border-slate-100/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-slate-100">Profile</h2>
                    <p class="mt-1 text-sm leading-6 text-slate-100">🚀 ¿ESTÁS LISTO PARA TRANSFORMAR TU VIDA Y ALCANZAR
                        TU MÁXIMO POTENCIAL? 💪</p>
                </div>
                <div class="border-b border-gray-900/10 pb-12">

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="first-name"
                                class="block text-sm font-medium leading-6 text-slate-100">Nombre</label>
                            <div class="mt-2">
                                <input type="text" name="nombre" id="nombre" v-model="nombre" autocomplete="given-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="last-name"
                                class="block text-sm font-medium leading-6 text-slate-100">Apellido</label>
                            <div class="mt-2">
                                <input type="text" name="apellido" id="apellido" v-model="apellido"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div>
                            <label for="age" class="block text-sm font-medium leading-6 text-slate-100">Edad</label>
                            <div class="mt-2">
                                <input type="number" name="edad" id="edad" v-model="edad" autocomplete="age"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="telefono" class="block text-sm font-medium leading-6 text-slate-100">Numero de
                                telefono</label>
                            <div class="mt-2">
                                <input type="text" name="telefono" id="telefono" v-model="telefono"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm font-medium leading-6 text-slate-100">Email:</label>
                            <div class="mt-2">
                                <input id="email" v-model="email" name="email" type="email" autocomplete="email"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="country" class="block text-sm font-medium leading-6 text-slate-100">Pais</label>
                            <div class="mt-2">
                                <select id="country" name="country" v-model="selectedCountry"
                                    autocomplete="country-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-gray-700">
                                    <option v-for="pais in paises" :key="pais" :value="pais">{{ pais }}</option>

                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="sm:col-span-3 mt-8">
                        <fieldset>
                            <legend class="block text-sm font-medium leading-6 text-slate-100 mb-8">
                                ¿Con qué frecuencia haces ejercicio actualmente?
                            </legend>
                            <div class="flex items-center mb-4" v-for="(opcion, index) in opciones" :key="index">
                                <input :id="'option-' + index" type="radio" name="frecuencia-ejercicio"
                                    :value="opcion.value"
                                    class="w-4 h-4 border-gray-300 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600"
                                    v-model="frecuenciaSeleccionada" @change="guardarFrecuencia" />
                                <label :for="'option-' + index"
                                    class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {{ opcion.texto }}
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="first-name"
                            class="block text-sm font-medium leading-6 text-slate-100 mt-8 mb-6">¿Cuál es tu trabajo
                            (cargo y profesión)? </label>
                        <div class="mt-2">
                            <input type="text" name="profesion" id="profesion" v-model="profesion" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 " />
                        </div>
                        <div class="sm:col-span-3">
                            <label for="first-name"
                                class="block text-sm font-medium leading-6 text-slate-100 mt-8 mb-6">¿Qué es lo que más
                                te gustaría conseguir específicamente gracias a la mentoría?
                            </label>
                            <textarea id="objetivo1" v-model="objetivo1" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Deja que tu corazon hable..."></textarea>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="first-name"
                                class="block text-sm font-medium leading-6 text-slate-100 mt-8 mb-6">¿Cuál es tu
                                principal motivación para mejorar tu estado físico?
                            </label>
                            <textarea id="objetivo2" v-model="objetivo2" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-300 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Deja que tu corazon hable..."></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { paises } from '../js/Paises.js';
import { db } from '../FirebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
        };
    },
    methods: {
        async handleSubmit() {
            this.error = null; // Limpia el error anterior

            // Validar el correo y el enlace
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
                    createdAt: Timestamp.now(), // Marca de tiempo actual
                });

                console.log('Formulario guardado');
                // Limpia los campos del formulario después de guardarlos
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
            } catch (error) {
                console.error('Error al guardar el formulario:', error);
                this.error = 'Error al guardar. Inténtalo de nuevo.';
            }
        },
        isValidEmail(email) {
            // Validar el formato del correo electrónico
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
    },
};
</script>