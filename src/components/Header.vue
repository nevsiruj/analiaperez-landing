<template>
  <header class="bg-gradient-to-r from-fuchsia-400 to-cyan-500 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-white font-bold text-xl ml-2">Dance MIX</a>

      <nav>
        <!-- <a href="#" class="text-white hover:underline mx-4">Inicio</a> -->
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
</template>

<script>
export default {
  name: 'Header',
  props: {},
};
</script>
