<script setup>
// import navbar from '../components/navbar.vue';
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { useOpciones } from '../stores/opciones';
import {useRouter} from 'vue-router'
const Opcion = useOpciones()
const router = useRouter()
const img = ref([
    '/src/assets/img/comunidad.jpg',
    '/src/assets/img/comunidad1.jpg'
])
const login = ()=>{
    router.push({name:'auth'})
}
</script>

<template>
    <header class="flex overflow-x-hidden items-center justify-between w-fill bg-[#1EA1CA] h-24">
        <div class="">
            <h1 class="text-3xl font-bold uppercase text-left text-white">IGlESIA</h1>
        </div>

        <div class="menu flex flex-row  justify-center items-center gap-10">

            <a href="#" class=" transform hover:translate-y-1 transition-transform ease-in duration-200 text-white ">

                <span class="text-sm font-medium">Nosotros</span>
            </a>

            <a href="#" class=" transform hover:translate-y-1 transition-transform ease-in duration-200 text-white ">

                <span class="text-sm font-medium">Comunidad</span>
            </a>

            <a href="#" class=" transform hover:translate-y-1 transition-transform ease-in duration-200 text-white ">

                <span class="text-sm font-medium">Contacto</span>
            </a>

            <a href="#"
                @click="login"
                class="flex flex-col items-center transform hover:translate-y-1 transition-transform ease-in duration-200 text-white ">
                <span class="flex items-center  w-12 text-lg text-white  "><i class="bx bx-user"></i></span>
                <span class="text-sm font-medium">Login</span>
            </a>
        </div>
    </header>
    <div class="contenedor-inicio mb-40">
        <h1 class="text-center text-[#1EA1CA] text-4xl mt-10 font-semibold">¡Bienvenidos a nuestra comunidad de fe y amor!</h1>
        <div class="inicio">
            <div class="imagen"></div>
            <div class="text flex flex-col items-center justify-center gap-8">
                <p class="text-lg">En nuestra iglesia, nos reunimos con alegría y devoción para celebrar la presencia de
                    Dios en nuestras vidas. Somos una familia diversa de creyentes que busca crecer espiritualmente, amar
                    incondicionalmente y servir con generosidad.</p>
                <br>
                <p class="text-lg">Nuestros servicios son momentos especiales donde la adoración trasciende las palabras y
                    nos sumergimos en la presencia divina. Cada culto es una oportunidad para fortalecer nuestra conexión
                    con Dios y con los demás miembros de la comunidad. La música inspiradora, la reflexión bíblica y la
                    oración ferviente son partes fundamentales de nuestras reuniones.
                </p>
            </div>
        </div>
    </div>

    <div class="conocenos shadow-2xl bg-[#1EA1CA] flex flex-col justify-center items-center rounded-s-2xl ">
        <h1 class="text-center text-5xl py-10 uppercase font-semibold text-white">Conocenos</h1>
        <div class="flex flex-col justify-center items-center gap-20">

            <div class="carusel w-[100vh]  mt-10">
    
                <Carousel>
                    <Slide v-for="slide in img" :key="slide">
    
                        <img class="  h-64 w-[80vh]" :src="slide" alt="" srcset="">
    
                    </Slide>
    
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
               
            </div>
            <p class=" text-white w-[100vh] text-center text-2xl">En nuestra iglesia, valoramos la inclusividad y damos la bienvenida a personas de todas las
                    edades, razas, géneros y trasfondos. Creemos que todos son amados y aceptados tal como son, y juntos
                    buscamos crecer en gracia y amor.
    
                    Explora nuestra página para conocer más acerca de nuestras actividades, eventos y oportunidades de servicio.
                    Si eres nuevo, nos encantaría conocerte y darte la bienvenida personalmente. ¡Únete a nosotros en esta
                    emocionante jornada de fe, esperanza y amor!
            </p>
        </div>
    </div>

    <div class="footer ">
        <footer class="w-full  text-gray-700 ">

        <div
            class="h-[40vh] flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap"
        >
            <div class="mt-4">
                    <p class="mt-2 text-xl mb-4 text-gray-500">Redes</p>
                    <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                </path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
            </div>

            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contacto</h2>
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-gray-900">Enviar Un Mensaje</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-gray-900">PQR</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-gray-900">+57 3128 38839</a>
                        </li>
                        <li class="mt-3">
                            <a class="text-gray-500 cursor-pointer hover:text-gray-900">Av 30 - #34 - 34</a>
                        </li>
                    </nav>
            </div>

        </div>
        <div class="bg-[#1EA1CA]">
            <div class="container px-5 py-4 mx-auto">
                <p class="text-sm text-white capitalize xl:text-center">©Pradilla 2023 - Todos los derechos reservados </p>
            </div>
        </div>
    </footer>
    </div>
</template>

<style scoped>
.inicio {
    padding: 60px;
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 70px;
}

.imagen {
    height: 40vh;
    width: 70vh;
    background: url(../assets/img/baner-usuarios.jpg);
    border-radius: 30px;
    background-size: cover;
}

.text {
    width: 60%;
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;

}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}</style>