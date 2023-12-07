<script setup>
    import { useOpciones } from '../stores/opciones';
    import {ref} from 'vue'
    import { useTemplos } from '../stores/templos';
    import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'
    const Opciones = useOpciones()
    const Templo = useTemplos()

    const temploBody = ref({
        nombre:'',
        direccion:'',
        capacidad:'',
        estado:''
    })
    const estado = ref(['arrendado','propio'])
    
</script>

<template>
    <div class="h-screen w-[100%] flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
            <form 
            @submit.prevent="Templo.registrarTemplo(temploBody)"
            class="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Registar Templo</h1>
                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Nombre</label>
                    <input v-model="temploBody.nombre"
                    class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username"
                        id="username" placeholder="Nombre" />
                </div>

                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Direccion</label>
                    <input v-model="temploBody.direccion" 
                    class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username"
                        id="username" placeholder="Direccion" />
                </div>

                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Capacidad</label>
                    <input  v-model="temploBody.capacidad"
                    class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username"
                        id="username" placeholder="Capacidad" />
                </div>
                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Estado</label>
                    <select 
                    v-model="temploBody.estado"
                        placeholder="Estado"
                        class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="" id="">
                        <option value="arrendado">Arrendado</option>
                        <option value="propio">Propio</option>
                    </select>
                     
                </div>
                <button type="submit"
                    class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Registrar</button>
                <button type="button"
                    @click="Opciones.handleTemploInicio"
                    class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>