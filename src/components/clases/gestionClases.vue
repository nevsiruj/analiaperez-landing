<template>
  <div class="p-6 max-w-lg mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold mb-4">Clases</h1>
      <router-link
        to="/lista-clases"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Ver Página de Clases
      </router-link>
    </div>

    <form @submit.prevent="addNewClase" class="mb-6">
      <div class="mb-4">
        <label for="videoUrl" class="block text-sm font-medium text-gray-700">
          Video URL
        </label>
        <input
          id="videoUrl"
          v-model="newClase.videoUrl"
          type="url"
          placeholder="Video URL"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div class="mb-4">
        <label
          for="description"
          class="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          id="description"
          v-model="newClase.description"
          type="text"
          placeholder="Description"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Clase
      </button>
    </form>

    <ul>
      <li
        v-for="clase in clases"
        :key="clase.id"
        class="flex items-center justify-between py-2 px-4 border-b border-gray-200"
      >
        <span class="text-gray-900">
          {{ clase.videoUrl }} - {{ clase.description }}
        </span>
        <div>
          <button
            @click="previewVideo(clase.videoUrl)"
            class="text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            Preview
          </button>
          <button
            @click="deleteClase(clase.id)"
            class="text-red-600 hover:text-red-800 focus:outline-none ml-4"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>

    <!-- Modal for video preview -->
    <div
      v-if="showPreview"
      class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-4xl relative"
      >
        <button
          @click="showPreview = false"
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <iframe
          width="100%"
          height="450"
          :src="previewUrl"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <div class="p-4">
          <h3 class="text-2xl font-bold mb-2">{{ previewDescription }}</h3>
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
      API_KEY: 'AIzaSyBfP8VkBpuslBZ9Ppj-KGy0UJ5h4GubwtY', // Si es necesario, según el método de autenticación
      clases: [],
      newClase: {
        videoUrl: '',
        description: '',
      },
      previewUrl: '',
      previewDescription: '',
      showPreview: false,
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
            id: doc.name.split('/').pop(), // Extrae el ID del nombre del documento
            videoUrl: doc.fields.videoUrl.stringValue,
            description: doc.fields.description.stringValue,
          }));
        } else {
          this.clases = []; // Asegúrate de que 'clases' sea un array vacío si no hay datos
        }
        console.log('Fetched data:', data); // Log para depuración
      } catch (error) {
        console.error('Error fetching clases:', error);
      }
    },
    async addNewClase() {
      try {
        const response = await fetch(
          `${this.BASE_URL}/clases?key=${this.API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fields: {
                videoUrl: { stringValue: this.newClase.videoUrl },
                description: { stringValue: this.newClase.description },
              },
            }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.newClase = { videoUrl: '', description: '' }; // Clear form
        await this.fetchClases(); // Refresh the list
      } catch (error) {
        console.error('Error adding clase:', error);
      }
    },
    async deleteClase(id) {
      try {
        console.log('Deleting clase with ID:', id); // Log para depuración
        const response = await fetch(
          `${this.BASE_URL}/clases/${id}?key=${this.API_KEY}`,
          {
            method: 'DELETE',
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        await this.fetchClases(); // Refresh the list
      } catch (error) {
        console.error('Error deleting clase:', error);
      }
    },
    previewVideo(videoUrl) {
      this.previewUrl = videoUrl.replace('watch?v=', 'embed/'); // Ajusta el formato de la URL para iframe
      this.previewDescription =
        this.clases.find((clase) => clase.videoUrl === videoUrl)?.description ||
        '';
      this.showPreview = true;
    },
  },
  mounted() {
    this.fetchClases();
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here if needed */
</style>
