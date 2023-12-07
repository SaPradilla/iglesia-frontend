<script setup>
    import { useAuth } from '../stores/auth';
    import { useOpciones } from '../stores/opciones';

    const Opciones = useOpciones()
    const auth = useAuth()
</script>

<template>
    <div class="flex-row">
        <div class="flex min-h-screen flex-col w-56 justify-normal  ">

            <div class="flex items-center  h-20 shadow-md">
                <h1 class="text-3xl font-bold uppercase text-left text-[#1EA1CA]">IGlESIA</h1>
            </div>


            <ul 
            
            class="flex flex-col justify-items-start text-left">
                <li 
                @click="Opciones.handleTemploInicio"
                class="">
                    <a href="#"
                        class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="flex items-center  h-12 w-12 text-lg text-gray-400"><i
                                class="bx bx-church"></i></span>
                        <span class="text-sm font-medium">Templos</span>
                    </a>
                </li>

                <li
                @click="Opciones.handleInicioUsuario"
                >
                    <a href="#"
                        class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="flex items-center  h-12 w-12 text-lg text-gray-400"><i
                                class="bx bx-user"></i></span>
                        <span class="text-sm font-medium">Usuarios</span>
                    </a>
                </li>
                <li
                @click=""
                >
                    <a href="#"
                        class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="flex items-center  h-12 w-12 text-lg text-gray-400"><i
                                class="bx bx-calendar-event"></i></span>
                        <span class="text-sm font-medium">Sesiones</span>
                    </a>
                </li>

                <li
                @click=""
                >
                    <a href="#"
                        class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="flex items-center  h-12 w-12 text-lg text-gray-400"><i
                                class="bx bx-building-house"></i></span>
                        <span class="text-sm font-medium">Institutos</span>
                    </a>
                </li>

                <li
                @click="auth.logout"
                >
                    <a href="#"
                        class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="flex items-center  h-12 w-12 text-lg text-gray-400"><i
                                class="bx bx-log-out"></i></span>
                        <span class="text-sm font-medium">Logout</span>
                </a>
            </li>
            </ul>
    </div>
</div>
</template>

<style scoped>.sidebar {
    right: 0px;
    /* background-color: red; */

}</style>