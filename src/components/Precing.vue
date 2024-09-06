<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Plan de Entrenamiento
                ZENRYOKU</h2>
            <p class="mb-5 font-light text-slate-200 sm:text-xl dark:text-slate-200">
                🚀 ¡Da el primer paso hacia tus metas con nuestro plan ideal para ti! 🌟 Incluye una consulta inicial
                gratuita para entender tus necesidades y crear una estrategia personalizada que te llevará al siguiente
                nivel. ¡Empieza hoy y transforma tu vida! 💪
            </p>
        </div>
        <div class="max-w-xl w-full p-8 mx-auto text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h2 class="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">Plan “Élite ZENRYOKU”</h2>
            <p class="mb-8 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Diseñado para personas comprometidas con sus objetivos de fitness y bienestar.
                Incluye soporte 24/7, videollamadas semanales y un seguimiento nutricional avanzado.
            </p>
            <!-- Lista de Beneficios -->
            <ul class="mb-8 space-y-4 text-left text-gray-900 dark:text-white">
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>Plan de entrenamiento personalizado (actualización semanal)</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>Plan de nutrición avanzado con seguimiento diario</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>Soporte 24/7 vía correo electrónico y WhatsApp</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>Videollamadas semanales para ajustes</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span>Evaluación mensual de progreso</span>
                </li>
            </ul>
            <router-link to="/formulario">
                <button
                    class="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    Saber más
                </button>
            </router-link>
        </div>
    </div>
</template>