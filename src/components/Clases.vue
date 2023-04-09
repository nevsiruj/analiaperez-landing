<template>
  <section class="bg-gray-100 py-10">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 text-purple-500">Curso Mix DANCE</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Aquí vamos a agregar los videos de YouTube -->
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
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
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
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
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">Título del video</h3>
            <p class="text-gray-700">Descripción del video</p>
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
        href="https://wa.me/123456789"
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
};
</script>

<style scoped></style>
