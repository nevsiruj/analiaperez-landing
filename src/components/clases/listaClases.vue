<template>
  <div class="p-6 max-w-full mx-auto">
    <!-- Formulario de inicio de sesión -->
    <div v-if="!isAuthenticated">
      <h1 class="text-2xl font-bold mb-4">Acceso a Clases</h1>
      <form @submit.prevent="authenticate" class="mb-6">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">
            Nombre de Usuario
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Introduce tu nombre de usuario"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Introduce tu contraseña"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Acceder
        </button>
        <p v-if="authenticationFailed" class="text-red-600 mt-2">
          Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de
          nuevo.
        </p>
      </form>
    </div>

    <!-- Lista de clases -->
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">Lista de Clases</h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="clase in clases"
          :key="clase.id"
          class="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            width="100%"
            height="200"
            :src="formatVideoUrl(clase.videoUrl)"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ clase.description }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URL:
        'https://firestore.googleapis.com/v1/projects/analiaperez-61440/databases/(default)/documents',
      API_KEY: 'AIzaSyBfP8VkBpuslBZ9Ppj-KGy0UJ5h4GubwtY',
      clases: [],
      username: '',
      password: '',
      isAuthenticated: false,
      authenticationFailed: false,
    };
  },
  methods: {
    async fetchClases() {
      try {
        const response = await fetch(
          `${this.BASE_URL}/clases?key=${this.API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.documents) {
          this.clases = data.documents.map((doc) => ({
            id: doc.name.split('/').pop(),
            videoUrl: doc.fields.videoUrl.stringValue,
            description: doc.fields.description.stringValue,
          }));
        } else {
          this.clases = [];
        }
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching clases:', error);
      }
    },
    formatVideoUrl(url) {
      if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (url.includes('drive.google.com')) {
        return url.replace('/file/d/', '/file/d/').replace('/view', '/preview');
      }
      return url;
    },
    async authenticate() {
      try {
        // Consulta la colección de usuarios para verificar las credenciales
        const response = await fetch(
          `${this.BASE_URL}/users?key=${this.API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const users = data.documents || [];
        const user = users.find(
          (doc) =>
            doc.fields.username.stringValue === this.username &&
            doc.fields.password.stringValue === this.password
        );
        if (user) {
          // Usuario autenticado
          this.isAuthenticated = true;
          this.fetchClases();
        } else {
          // Autenticación fallida
          this.authenticationFailed = true;
        }
      } catch (error) {
        console.error('Error authenticating user:', error);
        this.authenticationFailed = true;
      }
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
