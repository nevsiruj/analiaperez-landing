<template>
  <div class="p-6 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Clases</h1>

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
        <button
          @click="deleteClase(clase.id)"
          class="text-red-600 hover:text-red-800 focus:outline-none"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const BASE_URL =
  'https://firestore.googleapis.com/v1/projects/analiaperez-61440/databases/(default)/documents';
const API_KEY = 'AIzaSyBfP8VkBpuslBZ9Ppj-KGy0UJ5h4GubwtY'; // Si es necesario, según el método de autenticación

const clases = ref([]);
const newClase = ref({
  videoUrl: '',
  description: '',
});

const fetchClases = async () => {
  try {
    const response = await fetch(`${BASE_URL}/clases?key=${API_KEY}`);
    const data = await response.json();
    if (data.documents) {
      clases.value = data.documents.map((doc) => ({
        id: doc.name.split('/').pop(), // Extrae el ID del nombre del documento
        videoUrl: doc.fields.videoUrl.stringValue,
        description: doc.fields.description.stringValue,
      }));
    } else {
      clases.value = []; // Asegúrate de que 'clases' sea un array vacío si no hay datos
    }
    console.log('Fetched data:', data); // Log para depuración
  } catch (error) {
    console.error('Error fetching clases:', error);
  }
};

const addNewClase = async () => {
  try {
    const response = await fetch(`${BASE_URL}/clases?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          videoUrl: { stringValue: newClase.value.videoUrl },
          description: { stringValue: newClase.value.description },
        },
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    newClase.value = { videoUrl: '', description: '' }; // Clear form
    await fetchClases(); // Refresh the list
  } catch (error) {
    console.error('Error adding clase:', error);
  }
};

const deleteClase = async (id) => {
  try {
    console.log('Deleting clase with ID:', id); // Log para depuración
    const response = await fetch(`${BASE_URL}/clases/${id}?key=${API_KEY}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    await fetchClases(); // Refresh the list
  } catch (error) {
    console.error('Error deleting clase:', error);
  }
};

onMounted(fetchClases);
</script>

<style scoped>
/* Add any additional scoped styles here if needed */
</style>
