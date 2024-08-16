<template>
    <div class="flex mt-32 p-16 mx-auto max-w-3xl text-center text-slate-50 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-20 dark:bg-gray-800 dark:text-white">
        <form>
            <div class="space-y-12">
                <div class="border-b border-slate-100/10 pb-12">
                    <h2 class="text-base font-semibold leading-7 text-slate-100">Profile</h2>
                    <p class="mt-1 text-sm leading-6 text-slate-100">🚀 ¿ESTÁS LISTO PARA TRANSFORMAR TU VIDA Y ALCANZAR TU MÁXIMO POTENCIAL? 💪</p>                </div>
                <div class="border-b border-gray-900/10 pb-12">

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="first-name"
                                class="block text-sm font-medium leading-6 text-slate-100">Nombre</label>
                            <div class="mt-2">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="last-name"
                                class="block text-sm font-medium leading-6 text-slate-100">Apellido</label>
                            <div class="mt-2">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div>
                            <label for="age" class="block text-sm font-medium leading-6 text-slate-100">Edad</label>
                            <div class="mt-2">
                                <input type="number" name="age" id="age" autocomplete="age"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="last-name"
                                class="block text-sm font-medium leading-6 text-slate-100">Numero de telefono</label>
                            <div class="mt-2">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm font-medium leading-6 text-slate-100">Email:</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="country" class="block text-sm font-medium leading-6 text-slate-100">Pais</label>
                            <div class="mt-2">
                                <select id="country" name="country" autocomplete="country-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-gray-700">
                                    <option v-for="pais in paises" :key="pais" :value="pais">{{ pais }}</option>

                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="sm:col-span-3 mt-8">
                        <fieldset>
                            <legend class="block text-sm font-medium leading-6 text-slate-100 mb-8">¿Con qué frecuencia haces ejercicio actualmente?</legend>
                            <div class="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="countries" value="USA"
                                    class="w-4 h-4 border-gray-300  focus:ring-blue-300  dark:bg-gray-700 dark:border-gray-600"
                                    checked>
                                <label for="country-option-1"
                                    class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Nunca
                                </label>
                            </div>

                            <div class="flex items-center mb-4">
                                <input id="country-option-2" type="radio" name="countries" value="Germany"
                                    class="w-4 h-4 border-gray-300  focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600">
                                <label for="country-option-2"
                                    class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    1-2 veces por semana
                                </label>
                            </div>

                            <div class="flex items-center mb-4">
                                <input id="country-option-3" type="radio" name="countries" value="Spain"
                                    class="w-4 h-4 border-gray-300  focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600">
                                <label for="country-option-3"
                                    class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    1-2 veces por semana
                                </label>
                            </div>

                            <div class="flex items-center mb-4">
                                <input id="country-option-4" type="radio" name="countries" value="United Kingdom"
                                    class="w-4 h-4 border-gray-300  focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600">
                                <label for="country-option-4"
                                    class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    5-7 veces por semana
                                </label>
                            </div>

                        </fieldset>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-slate-100 mt-8 mb-6">¿Cuál es tu trabajo (cargo y profesión)? </label>
                        <div class="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 " />
                        </div>
                        <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium leading-6 text-slate-100 mt-8 mb-6">¿Qué es lo que más te gustaría conseguir específicamente gracias a la mentoría?
                        </label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deja que tu corazon hable..."></textarea>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium leading-6 text-slate-100 mt-8 mb-6">¿Cuál es tu principal motivación para mejorar tu estado físico?
                        </label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-300 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deja que tu corazon hable..."></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-slate-100">Cancel</button>
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enviar</button>

            </div>
        </form>
    </div>
</template>

<script>
import { paises } from '../js/Paises.js';

export default {
  data() {
    return {
      paises,
    };
  },
};
</script>