<template>
  <header class="bg-gradient-to-r from-fuchsia-400 to-cyan-500 py-4">
    <div
      class="
        container
        mx-auto
        flex flex-col
        md:flex-row
        justify-between
        items-center
      "
    >
      <a href="#" class="text-white font-bold text-xl ml-2">Dance MIX</a>

      <nav class="text-center md:text-left">
        <a href="#beneficios" class="text-white hover:underline mx-4"
          >Beneficios</a
        >
        <a href="#sobreMi" class="text-white hover:underline mx-4">Sobre mi</a>
        <a href="#precios" class="text-white hover:underline mx-4">Precios</a>

        <router-link to="/clases" class="text-white hover:underline mx-4"
          >Clases</router-link
        >
      </nav>
    </div>
  </header>
  Esto debería solucionar el problema de la visualización en dispositivos
  móviles.
</template>

<script>
export default {
  name: 'Header',
  props: {},
};
</script>
