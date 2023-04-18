<template>
  <div class="bg-white p-6 rounded-lg shadow-lg mt-5">
    <h1 class="text-2xl font-bold mb-4">Tu usuario y contraseña</h1>
    <p class="text-lg mb-2">Usuario: user2023</p>
    <p class="text-lg mb-4">Contraseña: analiadance.2023</p>
    <button
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        inline-flex
        items-center
      "
    >
      <router-link to="/preclases" class="text-white hover:underline mx-4">
        <i class="fas fa-sign-in-alt mr-2"></i>
        <span>Ingresar al Curso</span>
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      contraseña: '',
    };
  },
  mounted() {
    this.generarUsuarioYContraseña();
  },
  methods: {
    generarUsuarioYContraseña() {
      const caracteres =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let usuario = '';
      let contraseña = '';
      for (let i = 0; i < 8; i++) {
        usuario += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        );
        contraseña += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        );
      }
      this.usuario = usuario;
      this.contraseña = contraseña;
    },
  },
};
</script>
