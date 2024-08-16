<template>
    <div class="  overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ">
  
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-indigo-600">Entrenamiento personalizado</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Transforma tu Cuerpo y Mente con el Método ZENRYOKU</h1>
              <p class="mt-6 text-xl leading-8 text-slate-200"><strong>Descubre un programa de 12 semanas diseñado para ayudarte a alcanzar tus objetivos de fitness y bienestar de manera sostenible.</strong> Integra ejercicios personalizados, guía nutricional flexible y soporte continuo para que puedas vivir una vida más saludable y equilibrada. ¡Libérate de las limitaciones y alcanza tu máximo potencial!</p>
            </div>
          </div>
        </div>
        <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="../assets/hero-zenryoku.webp" alt="" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-slate-200 lg:max-w-lg">
              <router-link to="/formulario">
  
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reserva tu Evaluación Inicial
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </button>
            </router-link>
  
              <ul role="list" class="mt-8 space-y-8 text-slate-200">
                <li class="flex gap-x-3">
                  <SparklesIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-slate-100">Personalización: </strong> Cada plan de entrenamiento y nutrición es único, diseñado específicamente para ti.</span>
                </li>
                <li class="flex gap-x-3">
                  <SparklesIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-slate-100">Equilibrio:</strong>Fomentamos un equilibrio entre fuerza, flexibilidad y bienestar mental.</span>
                </li>
                <li class="flex gap-x-3">
                  <SparklesIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-slate-100">Progresión:</strong>Planificamos tu progreso de forma gradual para evitar lesiones y asegurar resultados sostenibles.</span>
                </li>
                <li class="flex gap-x-3">
                  <SparklesIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span><strong class="font-semibold text-slate-100">Apoyo Integral:</strong>Te acompañamos en cada paso, ofreciendo soporte continuo y motivación.</span>
                </li>
              </ul>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-blue-800">Proceso de Transformación en 4 Pasos</h2>
              <ul>
                <li><strong>1.	Evaluación Inicial:</strong> Comenzamos con una consulta para entender tus objetivos, historial de entrenamiento y estado de salud. </li>
                <li><strong>2.	Plan Personalizado:</strong> Diseñamos un plan de entrenamiento y nutrición adaptado a tus necesidades. </li>
                <li><strong>3.	Implementación y Seguimiento::</strong> Trabajamos contigo para implementar el plan y realizamos un seguimiento continuo para asegurarnos de que estás en el camino correcto.</li>
                <li><strong>4.	Reevaluación y Ajustes:</strong> Realizamos evaluaciones periódicas y ajustamos tu plan según sea necesario para maximizar tus resultados.</li>
              </ul>
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-blue-800">Empieza tu Viaje de Transformación Hoy</h2>
              <p class="mt-6">Si estás listo para transformar tu cuerpo y mente, estamos aquí para ayudarte. Contáctanos para una consulta inicial y descubre cómo el Método ZENRYOKU puede cambiar tu vida.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, SparklesIcon } from '@heroicons/vue/20/solid'
  </script>
  
  <script setup>
  </script>