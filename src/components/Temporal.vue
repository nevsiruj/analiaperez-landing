<template>
  <div>
    <h1>Tu usuario y contraseña temporal</h1>
    <p>Usuario: {{ usuario }}</p>
    <p>Contraseña: {{ contraseña }}</p>
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
