<script setup>
    import { useOpciones } from '../stores/opciones';
    import {ref} from 'vue'
    import { useTemplos } from '../stores/templos';
    import { useUsuario } from '../stores/usuario';

    const Opciones = useOpciones()
    const Usuario = useUsuario()

    const usuarioBody = ref({
        nombre:'',
        edad:'',
        tipo_documento:'',
        documento:'',
        isActive:true,
        contrasena:'',
    })

    
</script>

<template>
    <div class="h-screen w-[100%] flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
            <form 
            @submit.prevent="Usuario.registrarUsuario(usuarioBody)"
            class="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registar Usuario</h1>
                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Nombre</label>
                    <input v-model="usuarioBody.nombre"
                    class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username"
                        id="username" placeholder="Nombre" />
                </div>

                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Edad</label>
                    <input v-model="usuarioBody.edad" 
                    class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username"
                        id="username" placeholder="Edad" />
                </div>

 
                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Tipo de documento</label>
                    <select 
                        v-model="usuarioBody.tipo_documento"
                        placeholder="Seleccione"
                        class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="" id="">
                        <option value="">-- Seleccione -- </option>
                        <option value="CC">CC</option>
                        <option value="TI">TI</option>
                        <option value="CE">CE</option>
                        <option value="PPT">PPT</option>
                        <option value="PP">PP</option>
                    </select>
                     
                </div>

                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Documento</label>
                    <input  v-model="usuarioBody.documento"
                    class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username"
                        id="username" placeholder="Documento" />
                </div>

                <div class="inline-flex items-center">
                    Activo?
                    <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    for="checkbox-3"
                    data-ripple-dark="true"
                    >
                    
                    <input
                        type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                        id="checkbox-3"
                        checked
                        v-model="usuarioBody.isActive"
                    />
                    <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                        </svg>
                    </div>
                    </label>
                </div>

                <button type="submit"
                    class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Registrar</button>
                <button type="button"
                    @click="Opciones.handleInicioUsuario()"
                    class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>