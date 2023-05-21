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
            src="https://drive.google.com/file/d/1W1InZforc4o99YqzJI6zjC41derZh-Yp/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">01 - Presentanción</h3>
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
            <h3 class="text-2xl font-bold mb-2">02 - Entrada en Calor</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/14GgSCCIBNzZ5Rsa8Ban_tAcvN3ANG0ku/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">03 - Clase Coreo 1</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1lzF7m9un-OZ6jA_Kq229L2ZegwNm27CN/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">04 - Entrenamiento</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1lzF7m9un-OZ6jA_Kq229L2ZegwNm27CN/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">
              05 - Clase de Welbarre Basic
            </h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1POsGcf2xpBL-otF9dueQ7GdjF7UOJCG-/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">06 - Clase 2 Correo</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/15S_SJvEQOyFc5f4w7HjQ-OGogFkCQmki/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">07 - Entrenamiento 2</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1-baDjCnZtrCdwTowYde0u5PCe27VPXl3/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">08 - Freedance Avanzado</h3>
          </div>
        </div>

        <!-- Agregar más iframes aquí -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://drive.google.com/file/d/1Pr5BWT-MPewdIXob7fAjtD-Uuyk2yW86/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-2xl font-bold mb-2">09 - Estiramiento Final</h3>
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
      showModal: false,
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
