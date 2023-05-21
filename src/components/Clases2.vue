<template>
  <div
    id="login-modal"
    class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    v-show="showModal"
  >
    <div
      class="
        bg-white
        rounded-lg
        overflow-hidden
        shadow-xl
        transform
        transition-all
        sm:max-w-lg sm:w-full
      "
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <h3 class="text-2xl leading-6 font-medium text-gray-900">
            Ingreso al sistema
          </h3>
          <div class="mt-2">
            <input
              type="text"
              v-model="username"
              placeholder="Usuario"
              class="my-2 p-2 w-full border-2 border-gray-300 rounded-md"
            />
            <input
              type="password"
              v-model="password"
              placeholder="Contraseña"
              class="my-2 p-2 w-full border-2 border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          @click="checkCredentials"
          class="
            inline-flex
            justify-center
            w-full
            rounded-md
            border border-transparent
            px-4
            py-2
            bg-green-600
            text-base
            leading-6
            font-medium
            text-white
            shadow-sm
            hover:bg-green-500
            focus:outline-none focus:border-green-700 focus:shadow-outline-green
            transition
            ease-in-out
            duration-150
            sm:text-sm sm:leading-5
          "
        >
          Ingresar
        </button>
      </div>
    </div>
  </div>

  <!--Contenido-->
  <section class="bg-gray-100 py-10" v-if="!showModal">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 text-purple-500">
        Pack 1 Fitness Dance "Baila y entrena al mismo tiempo" 👌
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Aquí vamos a agregar los videos de YouTube -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <!-- <iframe src="https://drive.google.com/file/d/1NkRKOQK5OCbvEyZYg694VLVw5ubB_Kxy/preview" width="640" height="480" allow="autoplay"></iframe> -->

          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1020NKTh8U87zU9sg9VxlVyIcdK1oSCIg/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">00 - Presentanción</h3>
          </div>
        </div>
        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1icPnn0z8sigqHzOgPm95SNg5yfxVHrsn/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">01 - Pop Latino</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1NkRKOQK5OCbvEyZYg694VLVw5ubB_Kxy/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">02 - Coreo Pop-Regge</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1dmh3kDjxq6ZY6MW2P0fbPEhQHmOuDyzW/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">
              03 - Reggaeton Intermedio-Avanzado
            </h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1dRm2mQemITlM9LBr_LpPy0p-V2R81pue/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">04 - Cumbia</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1txBT6zW6_U1TQjK7nOElAGyivwjOIl6K/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">05 - Bachata</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/11_NFcRSWQOqkHxCR9K9HAud8bAkcLJ8X/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">06 - Reggaeton Avanzado</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1tivscByA8a1m577-nLdACgBMuH2FPZeZ/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">07 - Electro Pop</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1ehY-SsHa0235w5OpolPBp_LwgHc8dIhQ/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">08 - Salsa</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1WRXBW7dnOllPrsDN72Pj91qJdE6AltO5/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">09 - Pop Dances</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/13s8j9ZgLXslp0IXllLzTWP5Mpa69jqjH/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">Coreo Grupal - Reggaeton</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1IjsW9O9hv1IY0onpdeKkjqYF2gGDMYAp/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">Coreo Grupal - Chocogesell</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1nddNljzVIQu8WO5ZFh4kRK8m0WAK3YY5/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">Coreo Grupal - Karol G</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1QvpZ7WRNDHZl4qxjQ89Q1IOyWbiU7Cqa/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">Coreo Grupal - Bachata</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de certificado -->
    <div class="mt-10">
      <h3 class="text-2xl font-bold mb-4 text-purple-500">
        Obtené tu certificado de finalización del curso
      </h3>
      <p class="text-lg mb-4">
        Contactanos por WhatsApp para recibir tu certificado.
      </p>
      <a
        href="https://wa.me/+5492255427173"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >Contactar por WhatsApp</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Clases',
  props: {},
  data() {
    return {
      showModal: true,
      username: '',
      password: '',
    };
  },
  methods: {
    checkCredentials() {
      const hardcodedUsername = 'admin';
      const hardcodedPassword = 'password';

      if (
        this.username === hardcodedUsername &&
        this.password === hardcodedPassword
      ) {
        alert('Inicio de sesión exitoso');
        this.showModal = false;
      } else {
        alert('Credenciales incorrectas');
      }
    },
  },
};
</script>

<style scoped></style>
