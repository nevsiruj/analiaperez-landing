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
      <div class="logo h-12 w-28 mb-5">
        <img
          src="https://stackblitz.com/files/vue-jvtso5/github/nevsiruj/analiaperez-landing/main/public/assets/images/logitoanalia.png"
          alt=""
        />
        <a href="#" class="text-white font-bold text-xl ml-2">Dance MIX</a>
      </div>

      <nav class="text-center md:text-left">
        <a href="#beneficios" class="text-white hover:underline mx-4"
          >Beneficios</a
        >
        <a href="#sobreMi" class="text-white hover:underline mx-4">Sobre mi</a>
        <a href="#precios" class="text-white hover:underline mx-4">Precios</a>

        <router-link to="/clases" class="text-white hover:underline mx-4">
          <i class="fas fa-user-circle mr-2"></i>
          <span class="font-bold">Ingresar</span>
        </router-link>
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
