<template>
 <div
    id="login-modal"
    class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    v-if="showModal"
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
          @click="checkUser()"
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
  <section class="bg-gray-200 py-12">
    <div class="max-w-4xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4">
            ¡Bienvenido al curso de baile!
          </h2>
          <p class="text-lg mb-6">
            Aprende los mejores movimientos de baile con Analia Perez. 
            Accede ahora y comienza a bailar como un verdadero experto. 💃
          </p>
          <button
             @click="openModal()"
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
        </div>
          <a
            href="https://wa.me/+5492255427173"
            class="text-gray-600 hover:text-gray-800 text-sm"
          >
            ¿Olvidaste tu usuario o contraseña?
          </a>
      </div>
    </div>
  </section>
</template>

<script>
  import { authenticate } from '../auth';
export default {

   name: 'PreClases',
  data() {
    return {
      showModal: false,
      password: "",
      username: ""
      
      // Aquí puedes definir los datos que utilizará el componente
    };
  },
  methods: {
    openModal(){
      this.showModal = true;
    },
    checkUser(){
      authenticate(this.username, this.password)
      .then(() => {
        window.location = "../clases"
      })
      .catch(() => {
        
      });

    }
    // Aquí puedes agregar los métodos que utilizará el componente
  },
};
</script>
