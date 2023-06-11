<template>
  <section class="bg-gray-200 py-12">
    <div class="max-w-4xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">Ingresa al Curso 1</h2>
          <p class="text-lg mb-6">
            Aprende los mejores movimientos y entrenamientos con Analia Perez.
            Fit Dance. Capacitate con nosotros, ingresa ahora!
          </p>
          <a
            href="/clases2"
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
              mb-4
            "
          >
            <i class="fas fa-sign-in-alt mr-2"></i>
            <span>Acceder al Curso</span>
          </a>
          <br />
          <a
            href="https://wa.me/+5492255427173"
            class="text-gray-600 hover:text-gray-800 text-sm"
          >
            ¿Olvidaste tu usuario o contraseña?
          </a>
        </div>
        <div class="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">Ingresa al Curso 2</h2>
          <p class="text-lg mb-6">
            Aprende los mejores movimientos de baile con Analia Perez. Accede
            ahora y comienza a bailar como un verdadero experto. 💃
          </p>
          <a
            href="/clases"
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
              mb-4
            "
          >
            <i class="fas fa-sign-in-alt mr-2"></i>
            <span>Acceder al Curso</span>
          </a>
          <br />
          <a
            href="https://wa.me/+5492255427173"
            class="text-gray-600 hover:text-gray-800 text-sm"
          >
            ¿Olvidaste tu usuario o contraseña?
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PreClases',
  data() {
    return {
      // Aquí puedes definir los datos que utilizará el componente
    };
  },
  methods: {
    // Aquí puedes agregar los métodos que utilizará el componente
  },
};
</script>
