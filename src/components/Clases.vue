<template>
  <section class="bg-gray-100 py-10">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-4">Clases de baile</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Aquí vamos a agregar los videos de YouTube -->

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">Título del video</h3>
              <p class="text-gray-700">Descripción del video</p>
            </div>
          </div>
          <!-- Agregar más iframes aquí -->
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2">Título del video</h3>
              <p class="text-gray-700">Descripción del video</p>
            </div>
          </div>
          <!-- Agregar más iframes aquí -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Clases',
  props: {},
};
</script>

<style scoped>
iframe {
  border: none;
}

.video-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.video-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.video-card p {
  font-size: 1rem;
  color: #718096;
  margin-bottom: 1rem;
}
</style>
