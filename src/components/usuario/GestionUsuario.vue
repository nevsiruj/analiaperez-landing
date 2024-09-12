<template>
  <div class="p-6 max-w-lg mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold mb-4">Usuarios</h1>
      <router-link
        to="/lista-usuarios"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Ver Página de Usuarios
      </router-link>
    </div>

    <form @submit.prevent="addNewUser" class="mb-6">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          v-model="newUser.name"
          type="text"
          placeholder="Nombre"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">
          Usuario
        </label>
        <input
          id="username"
          v-model="newUser.username"
          type="text"
          placeholder="Usuario"
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
          v-model="newUser.password"
          type="password"
          placeholder="Contraseña"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Usuario
      </button>
    </form>

    <ul>
      <li
        v-for="user in users"
        :key="user.id"
        class="flex items-center justify-between py-2 px-4 border-b border-gray-200"
      >
        <span class="text-gray-900">
          {{ user.name }} - {{ user.username }}
        </span>
        <div>
          <button
            @click="previewUser(user)"
            class="text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            Preview
          </button>
          <button
            @click="deleteUser(user.id)"
            class="text-red-600 hover:text-red-800 focus:outline-none ml-4"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>

    <!-- Modal for user preview -->
    <div
      v-if="showPreview"
      class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-md relative"
      >
        <button
          @click="showPreview = false"
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div class="p-4">
          <h3 class="text-2xl font-bold mb-2">{{ previewName }}</h3>
          <p class="text-gray-700">Usuario: {{ previewUsername }}</p>
          <p class="text-gray-700">Contraseña: {{ previewPassword }}</p>
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
      users: [],
      newUser: {
        name: '',
        username: '',
        password: '',
      },
      previewName: '',
      previewUsername: '',
      previewPassword: '',
      showPreview: false,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch(
          `${this.BASE_URL}/users?key=${this.API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.documents) {
          this.users = data.documents.map((doc) => ({
            id: doc.name.split('/').pop(),
            name: doc.fields.name.stringValue,
            username: doc.fields.username.stringValue,
            password: doc.fields.password.stringValue,
          }));
        } else {
          this.users = [];
        }
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async addNewUser() {
      try {
        const response = await fetch(
          `${this.BASE_URL}/users?key=${this.API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fields: {
                name: { stringValue: this.newUser.name },
                username: { stringValue: this.newUser.username },
                password: { stringValue: this.newUser.password },
              },
            }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.newUser = { name: '', username: '', password: '' }; // Clear form
        await this.fetchUsers(); // Refresh the list
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async deleteUser(id) {
      try {
        console.log('Deleting user with ID:', id);
        const response = await fetch(
          `${this.BASE_URL}/users/${id}?key=${this.API_KEY}`,
          {
            method: 'DELETE',
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        await this.fetchUsers(); // Refresh the list
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    previewUser(user) {
      this.previewName = user.name;
      this.previewUsername = user.username;
      this.previewPassword = user.password;
      this.showPreview = true;
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here if needed */
</style>
