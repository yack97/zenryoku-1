<template>
  <Disclosure as="nav" class="fixed top-0 left-0 z-50 w-full backdrop-blur shadow-md" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <!-- Logo and desktop menu -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img class="h-12 w-auto" src="../assets/Logo-zenryou (1).png" alt="Your Company" />
            </router-link>
          </div>
          
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              ]" :aria-current="item.current ? 'page' : undefined">
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- Login button -->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <router-link to="/login">
            <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[
          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium'
        ]" :aria-current="item.current ? 'page' : undefined" @click="closeMenu">
          {{ item.name }}
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Contactanos', href: '/formulario', current: false },  // Cambiado a /formulario
]

// Función para cerrar el Disclosure
const closeMenu = () => {
  const disclosure = document.querySelector('button[aria-expanded="true"]')
  if (disclosure) {
    disclosure.click()
  }
}

</script>

<style>
/* Optionally, add custom styles here if needed */
</style>