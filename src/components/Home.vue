<template>
<!-- Funcional -->
<section class="bg-gray-100 py-12">

<div class="container mx-auto px-4">
  <div class="card flex flex-row flex-wrap -mx-4 items-center justify-center">
    <div class="w-full md:w-1/2 px-4 mb-8 text-center">
      <h2 class="text-4xl font-bold text-sky-500">
        Aprende a bailar conmigo
      </h2>
      <h3 class="text-3xl font-bold text-purple-500">
          Las mejores coreograficas paso a paso.
        </h3>

        <p class="text-2xl font-bold text-black-600 my-4">
          ¿Quieres aprender a bailar de forma divertida y fácil? Soy coreografa y profesora de baile experimentada y
          estoy aqui para ayudarte y enseñarte para que des tus propias clases y vivir de esta profesion.
        </p>
        <p class="text-2xl font-bold text-black-600 my-4">
        Dale! En este curso aprenderás a bailar cada estilo coreográfico, paso a paso y para todos los niveles, desde principiantes hasta avanzados. Además, te enseñaré coreografías grupales e individuales, formaciones y canones. ¡No te pierdas esta oportunidad de aprender a bailar!
        </p>
        <p class="text-2xl font-bold text-black-600 my-4">
          ✴️Aprenderás a bailar salsa, bachata, reggaetón, latino, reggae, pop latino, pop dance, electro pop y muchos más. Mis clases son fáciles de entender y me gusta que mis estudiantes y futuros instructores aprendan a su propio ritmo. 👌
        </p>
        <!-- <a  class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" @click="openModal">
          <i class="fas fa-shopping-cart mr-2"></i>¡Adquiri mi curso ahora!
        </a> -->

        <a href="#precios" class="text-2xl bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">¡Adquiri mi curso ahora!</a>        

        <!-- Sección para el modal -->
        <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog" aria-modal="true" aria-labelledby="modal-headline">


              <!-- Contenido del modal -->
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4">Realizar pago</h2>
                <div class="mb-4">
                  <!-- Agrega aquí el componente de mercado pago -->
                </div>
                <div class="flex justify-end">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    @click="closeModal">Cerrar</button>
                </div>
              </div>
              <!-- Fin Sección modal -->

            </div>
          </div>
        </div>
        
    </div>
    <div class="w-full md:w-1/2 px-4 mb-8 text-center">
      <img src="https://files.fm/thumb_show.php?i=jdbhsjhzk" alt="">
    </div>

  </div>
</div>

</section>


<section class="bg-gray-100 py-8">
  <div class="card rounded-lg overflow-hidden shadow-lg mb-8">
    <div class="p-4">
      <h2 class="text-4xl font-bold text-purple-500 mb-4">¡Aprende a bailar desde casa!</h2>
      <p class="text-2xl font-bold text-black-600 mb-4">Este curso es totalmente online, lo que significa que puedes hacerlo en tus tiempos y horarios disponibles. 🕐</p>
      <p class="text-xl font-bold text-black-600 mb-8">Una vez que abones, recibirás un usuario y contraseña o un link para acceder al curso de inmediato y empezar a bailar. 🕺💃</p>
    </div>
  </div>
</section>

<section class="bg-gray-100 py-8">
 <div class="card rounded-lg overflow-hidden shadow-lg mb-8">
  <div class="p-4">
    <h2 class="text-4xl font-bold text-purple-500 mb-4">
      Modalidad Grabado
    </h2>
    <p class="text-2xl font-bold text-black-600 mb-4">
      Disfruta de nuestro curso en la modalidad grabado, que consta de 13 videos coreográficos explicados paso a paso. Podrás hacerlo en tus tiempos y horarios, sin preocuparte por perderte ninguna clase. Además, te daremos diferentes ideas de vestuarios para cada ritmo, para que puedas lucirte mientras bailas 👌.
    </p>

<div class="video-card">
  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/Cl_w9Djgq2w" frameborder="0" allowfullscreen></iframe>
  </div>
</div>

    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/N4NzXAMflpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->

    <!-- <div class="flex justify-center items-center">
      <i class="far fa-play-circle fa-3x text-red-500 mr-2"></i>
      <a href="#" class="text-red-500 font-bold hover:underline">¡Mira un adelanto de las coreografías aquí!</a>
    </div> -->


  </div>
</div>
</section>

          

<section class="bg-purple-200 py-12 mt-4">
  <div class="container mx-auto px-4">
    <div class="card bg-white rounded-lg p-8">
      <h2 class="text-4xl font-bold mb-4 text-purple-500">¿A quién va dirigido?</h2>
      <ul class="text-2xl mb-8">
        <li class="mb-2"><i class="fas fa-check text-green-500 mr-2"></i>A todos los que quieran aprender a bailar o enseñar a bailar en el ámbito privado, ya sea en gimnasios, estudios, clases particulares, etcétera.</li>
        <li class="mb-2"><i class="fas fa-check text-green-500 mr-2"></i>No necesitas conocimiento previo. Nuestras clases están diseñadas para todos los niveles.</li>
        <li class="mb-2"><i class="fas fa-check text-green-500 mr-2"></i>Podrás ver las grabaciones las veces que quieras a tu propio ritmo. No te preocupes si necesitas repasar algún paso o coreografía.</li>
        <li class="mb-2"><i class="fas fa-check text-green-500 mr-2"></i>Acceso ilimitado al curso durante 1 año. Podrás acceder a todas las clases grabadas durante todo un año.</li>
        <li class="mb-2"><i class="fas fa-check text-green-500 mr-2"></i>Certificado avalado por nuestro STUDIO de DANCE. Al finalizar el curso, recibirás un certificado que avala tu aprendizaje.</li>
      </ul>
      <a href="#precios" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-4xl">¡Adquiri mi curso ahora!</a>
      
    </div>
  </div>
</section>

        <!-- <div class="card m-3">

          <img
            src="https://files.fm/thumb_show.php?i=4hcan2s3p"
            alt="Dance Mix"
            class="rounded-lg mb-4"
          />
        </div> -->

<section class="bg-gray-100 py-8">
  <div class="container mx-auto px-4">
    <div class="card rounded-lg overflow-hidden shadow-lg bg-white">

      <div class="p-4">
        <div class="mb-4">
        <img src="https://files.fm/thumb_show.php?i=2vb59p268" alt="Bailarina bailando" class="w-full h-auto object-cover border border-black border-2">
        </div>
        <h2 class="text-4xl font-bold text-purple-500 mb-4">
          ¡Dance!
        </h2>
        <p class="text-lg text-gray-800 mb-4">
          ✴️Bailar es más que simplemente mover el cuerpo al ritmo de la música. <br>
          ✴️También es una forma de expresar sentimientos y emociones. Además, sabías que bailar es una de las mejores terapias para sentirnos bien? El cambio se produce a través del movimiento, y el movimiento cura.
        </p>
      </div>
    </div>
  </div>
</section>





  <!-- Sección de beneficios -->
  <section id="beneficios" class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8 text-purple-500">
        Beneficios de bailar
      </h2>
      <div class="flex flex-wrap -mx-4">
<div class="w-full md:w-1/3 px-4 mb-8 flex flex-col">
  <div class="bg-purple-500 text-white py-6 px-4 rounded-lg flex-grow">
            <h3 class="font-bold text-4xl  mb-2">Mejora la salud</h3>
           <p class="text-2xl font-bold text-black">
              Bailar es una excelente forma de hacer ejercicio y mejorar la
              salud cardiovascular, la resistencia y la fuerza muscular.
            </p>
          </div>
        </div>
  <div class="w-full md:w-1/3 px-4 mb-8 flex flex-col">
  <div class="bg-sky-400 text-white py-6 px-4 rounded-lg flex-grow">
            <h3 class="font-bold text-4xl mb-2">Reduce el estrés</h3>
             <p class="text-2xl font-bold text-black">
  Bailar puede ayudar a reducir el estrés y la ansiedad, ya que libera endorfinas y promueve la relajación.
</p>

          </div>
        </div>
       <div class="w-full md:w-1/3 px-4 mb-8 flex flex-col">
  <div class="bg-pink-500 text-white py-6 px-4 rounded-lg flex-grow">
            <h3 class="font-bold text-4xl  mb-2">Bailar mejora la autoestima</h3>
             <p class="text-2xl font-bold text-black">
              Bailar puede ayudar a mejorar la autoestima y la confianza, ya que
              permite expresarse y ser creativo.
            </p>
          </div>
        </div>
      </div>

     <div class="flex justify-center">
  <img 
    src="https://stackblitz.com/files/vue-jvtso5/github/nevsiruj/analiaperez-landing/main/public/assets/images/bailaConmigo.jpeg" 
    alt="Imagen de persona bailando" 
    class="mx-auto w-full sm:w-auto"
  >
</div>

    </div>
  </section>

  <!-- Sección de llamado a la acción -->
  <section class="bg-gray-900 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-4 text-purple-500">¡Comienza a bailar y certificate hoy mismo!</h2>
      <p class="text-2xl text-white mb-8">Este es tu momento.
No esperes más para formarte y capacitarte con nosotros <strong class="text-purple-500">Studio Mix Dance A.P</strong></p>
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-3xl">¡Adquiri mi curso ahora!</a>
    </div>
  </section>


  <section id="sobreMi" class="bg-cool-gray-100 py-16">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-4 text-purple-500">Sobre Analia Perez</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="rounded-circle">
  <img src="https://files.fm/thumb_show.php?i=3rrpwftsx" alt="Foto de Analia Perez" />
</div>

     <div class="m-2">
  <div class="bg-white rounded-lg shadow-lg p-4">
    <p class="text-gray-700 text-xl mb-4">
      Analía Pérez es una reconocida profesora de baile de Villa Gesell, comprometida con la enseñanza y la difusión de la danza en su comunidad. Nació y creció en la ciudad, donde ha desempeñado un papel activo en la escena del baile desde una temprana edad.
    </p>
    <p class="text-gray-700 text-xl mb-4">
      Se recibió en la academia de danzas internacionales de Buenos Aires. También hizo un instructorado profesional en el ceaf de mar del plata y muchas capacitaciones en diferentes escuelas y estudios. Da clases desde el 2005 y actualmente en la casa de la cultura de su ciudad como profesora de baile y en varios estudios de danza.
      Fundó su propio estudio Dance en el año 2021. Desde entonces ha enseñado y capacitado a numerosos bailarines y futuros instructores. También comenzó con su academia de cursos online en el 2020, a los que se han formado más de 1000 alumnos de al menos 4 países.
    </p>
    <p class="text-gray-700 text-xl mb-4">
      En el ámbito del baile, Analía ha sido reconocida por su talento y su dedicación a la enseñanza. Ha participado en numerosos festivales y competencias de danza, y ha ganado varios premios por sus coreografías y su estilo innovador. Ahora, como propietaria y directora de su propia escuela de baile, quiere compartir su pasión y su experiencia con todos aquellos que quieran aprender y disfrutar de la danza.
    </p>
    <div class="flex items-center mt-4">
      <i class="fas fa-graduation-cap fa-lg text-gray-500 mr-2"></i>
      <span class="text-gray-500 text-xl">Instructora profesional de danza</span>
    </div>
    <div class="flex items-center mt-2">
      <i class="fas fa-chalkboard-teacher fa-lg text-gray-500 mr-2"></i>
      <span class="text-gray-500 text-xl">Más de 15 años de experiencia</span>
    </div>
    <div class="flex items-center mt-2">
      <i class="fas fa-trophy fa-lg text-gray-500 mr-2"></i>
      <span class="text-gray-500 text-xl">Ganadora de múltiples premios en festivales y competencias de danza</span>
    </div>
  </div>
</div>


        <a href="https://wa.me/+5492255427173" target="_blank" rel="noopener" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
  <i class="fab fa-whatsapp"></i> Contacta con Analía
</a>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 py-8">
  <div class="container mx-auto px-2">
    <h2 class="text-3xl font-bold text-center mb-4">Testimonios</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="https://files.fm/thumb.php?i=vhdxth6tj" alt="Testimonial Image" class="w-full h-auto">
          <div class="p-4">
            <h3 class="text-lg font-bold text-purple-500 mb-4">Tamara</h3>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="https://files.fm/thumb_show.php?i=yjynmyhrv" alt="Testimonial Image" class="w-full h-auto">
          <div class="p-4">
            <h3 class="text-lg font-bold text-purple-500 mb-4">Yesi</h3>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="https://files.fm/thumb_show.php?i=qsaksnypr" alt="Testimonial Image" class="w-full h-auto">
          <div class="p-4">
            <h3 class="text-lg font-bold text-purple-500 mb-4"></h3>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="https://files.fm/thumb_show.php?i=sn6r9jxw3" alt="Testimonial Image" class="w-full h-auto">
          <div class="p-4">
            <h3 class="text-lg font-bold text-purple-500 mb-4">Rodri</h3>
          </div>
        </div>
      </div>      
         <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="https://files.fm/thumb_show.php?i=bv4bvusgg" alt="Testimonial Image" class="w-full h-auto">
          <div class="p-4">
          </div>
        </div>
      </div>
        <div class="w-full md:w-1/2 px-4 mb-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="https://files.fm/thumb_show.php?i=t36py8txd" alt="Testimonial Image" class="w-full h-auto">
          <div class="p-4">
            <h3 class="text-3xl font-bold text-purple-500 mb-2">Mari</h3>
          </div>
        </div>             
    </div>
  </div>
</section>

<section class="bg-gray-100 py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-4 text-purple-500">Seguinos en Instagram</h2>
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> -->
    <div class="insta-card rounded-full overflow-hidden">
  <a href="#">
  <!-- Imagen seccion IG -->
    <img src="https://stackblitz.com/files/vue-jvtso5/github/nevsiruj/analiaperez-landing/main/public/assets/images/imagenIG.jpg" alt="Instagram post image" class="mx-auto w-96 h-96 rounded-full object-cover">
    <!-- <div class="insta-overlay flex items-center justify-center">
      <i class="fab fa-instagram fa-3x text-white"></i>
    </div> -->
  </a>
</div>

    </div>
    <div class="text-center mt-4">
      <a href="https://www.instagram.com/Analia.Dance/" class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded" target="_blank">
        Seguir a @analia.dance
      </a>
    </div>
  </div>
</section>

<section id="precios" class="bg-gray-100 py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-purple-500">Precios del curso</h2>

    <div class="flex flex-wrap justify-center">

    <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0 md:pr-2">
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">Opcion en Pesos</h3>
      <p class="text-gray-700 mb-4">Acceso ilimitado al curso durante 1 año</p>
      <p class="text-4xl font-bold text-purple-500 mb-4">$8500 ARS</p>
      <!-- <a @click="openModal()" class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">¡Adquirir ahora!</a> -->
      <!-- <a href="https://mpago.la/1maCNCV" class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">¡Adquirir ahora!</a> -->

      <a href="https://mpago.la/22hi4Zo" class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">¡Adquirir ahora!</a>

    <script src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
    data-preference-id="266655375-911e7705-596d-49e0-8fb6-6d33f7cfc25d" data-source="button">
    </script>

         <!-- <div id="paymentBrick_container"></div> -->
      

             <!-- Sección para el modal -->
        <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog" aria-modal="true" aria-labelledby="modal-headline">


              <!-- Contenido del modal -->
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4">Realizar pago</h2>
                <div class="mb-4">
                  <!-- Agrega aquí el componente de mercado pago -->
         

                </div>
                <div class="flex justify-end">
                
                  <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    @click="closeModal">Cerrar</button>
                </div>
              </div>
        

            </div>
          </div>
        </div>
              <!-- Fin Sección modal -->

    </div>
  </div>
</div>

      

<div class="w-full md:w-1/3 px-4 mb-8 md:mb-0 md:pl-2 md:pr-2">
  <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">Opcion en Dolares</h3>
      <p class="text-gray-700 mb-4">Acceso ilimitado al curso durante 1 año</p>
      <p class="text-4xl font-bold text-purple-500 mb-4">$49</p>
      <a href="#" class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">¡Adquirir ahora!</a>
    </div>
  </div>
</div>


 <div class="mt-10">
    
      <a
        href="https://wa.me/+5492255427173"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
        <i class="fab fa-whatsapp mr-2"></i>Contactar por WhatsApp</a
      >
    </div>
 
    </div>
  </div>
</section>


<a href="https://wa.me/+5492255427173" class="whatsapp" target="_blank" rel="noopener noreferrer">
  <!-- <i class="fa fa-whatsapp"></i> -->
    <i class="fab fa-whatsapp fa-3x"></i>
</a>

 <!-- <button @click="mostrarTemporal">Generar usuario y contraseña temporal</button>
    <div v-if="mostrarPaginaTemporal">
      <Temporal />
    </div> -->

  <footer class="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6">
    <div class="container mx-auto px-4">
      <p class="text-center">Dance MIX. &copy; 2023. </p>
    </div>
  </footer>
</template>


<script>


// const mp = new MercadoPago('TEST-e81e145a-fe1d-4eec-b023-2fab28fd976e');
const mp = new MercadoPago('APP_USR-98ab05c8-ccf2-415c-91f4-ff085035f189');
const bricksBuilder = mp.bricks();


// Integracion de preferencia 

const url = 'https://api.mercadopago.com/checkout/preferences';
// const accessToken = 'TEST-3803991155417712-040921-27c390e89bd3b83779feb04c799cc870-266655375';
const accessToken = 'APP_USR-2193470693752697-041712-4e4888b81e28061ecfa133901b8f0858-698110879';

let preference = {
  // el "purpose": "wallet_purchase" solo permite pagos registrados
  // para permitir pagos de guests puede omitir esta propiedad
  // "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Curso Baila Conmigo",
      "quantity": 1,
      "unit_price": 7000
    }
  ],
  "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "cash"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    },
    "binary_mode": true
};

const prefId = '698110879-50b0d64b-2f8f-487c-9e56-9abed4c2e791'

const crearPreferencia = () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(preference)
  })
  .then(response => response.json())
  .then(data => {
    const preferenceId = data.id;
    console.log(preferenceId);
    // Aquí puedes utilizar el ID de preferencia para renderizar el widget de pago de Bricks
  })
  .catch(error => {
    console.error(error);
    // Aquí puedes manejar los errores de la solicitud HTTP
  });
} 

// crearPreferencia()

const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
     locale: "es-AR",
   initialization: {
     /*
      "amount" es el monto total a pagar por todos los medios de pago con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
     */
     amount: 7000,
     preferenceId: prefId,
   },
   customization: {
     paymentMethods: {
       ticket: "all",
       creditCard: "all",
       debitCard: "all",
       mercadoPago: "all",
     },
   },
   callbacks: {
     onReady: () => {
       /*
        Callback llamado cuando el Brick está listo.
        Aquí puede ocultar cargamentos de su sitio, por ejemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback llamado al hacer clic en el botón enviar datos
       return new Promise((resolve, reject) => {
         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // recibir el resultado del pago
             resolve();
           })
           .catch((error) => {
             // manejar la respuesta de error al intentar crear el pago
             reject();
           });
       });
     },
     onError: (error) => {
       // callback llamado para todos los casos de error de Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};
renderPaymentBrick(bricksBuilder);

// window.addEventListener('scroll', function() {
//   var whatsappButton = document.querySelector('.whatsapp');
//   var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (distanceFromTop > 100) {
//     whatsappButton.classList.add('visible');
//   } else {
//     whatsappButton.classList.remove('visible');
//   }
// });


export default {
   components: {
  },
  name: 'Home',
  props: {},
   data() {
    return {
      showModal: false,
      mostrarPaginaTemporal: false

    };
  },  
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    mostrarTemporal() {
      this.mostrarPaginaTemporal = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* ajusta este valor para modificar la curvatura de las esquinas de la tarjeta */
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.rounded-circle {
  border: 3px solid #fff; /* ancho y color del borde */
  border-radius: 50%; /* redondeado del borde */
  overflow: hidden; /* para recortar la imagen dentro del círculo */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* sombra para dar profundidad */
}

.rounded-circle img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover; /* para ajustar la imagen al tamaño del círculo */
}

.video-card {
  position: relative;
  padding-bottom: 56.25%;
  /* Proporción 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 1.5rem;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.insta-card img {
  border-radius: 50%;
}


/* Whatsapp */

.whatsapp {
  position: fixed;
  left: 20px;
  bottom: 20px;
  background-color: green;
  color: #fff;
  text-decoration: none;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}

.whatsapp:hover {
  background-color: #25d366;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}



</style>
