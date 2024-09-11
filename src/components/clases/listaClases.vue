<template>
  <div class="p-6 max-w-full mx-auto">
    <h1 class="text-2xl font-bold mb-4">Lista de Clases</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <!-- Mostrar una tarjeta para cada clase -->
      <div
        v-for="clase in clases"
        :key="clase.id"
        class="bg-white rounded-lg overflow-hidden shadow-md"
      >
        <!-- Ajusta la URL para que sea compatible con iframe -->
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
</template>

<script>
export default {
  data() {
    return {
      BASE_URL:
        'https://firestore.googleapis.com/v1/projects/analiaperez-61440/databases/(default)/documents',
      API_KEY: 'AIzaSyBfP8VkBpuslBZ9Ppj-KGy0UJ5h4GubwtY',
      clases: [],
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
      // Ajusta el formato del URL para que sea compatible con iframe
      if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (url.includes('drive.google.com')) {
        // Para Google Drive, usa el formato de visualización en línea
        return url.replace('/file/d/', '/file/d/').replace('/view', '/preview');
      }
      return url; // Si no es un URL compatible, retorna el mismo
    },
  },
  mounted() {
    this.fetchClases();
  },
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
