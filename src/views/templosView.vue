<script setup>
 import navbar from '../components/navbar.vue'
 import registroTemplos from '../components/registroTemplos.vue';
 import templos from '../components/templos.vue';
 import { useOpciones } from '../stores/opciones';

 const Opciones = useOpciones()
</script>

<template>
    <div class="contenedor">

        <div class="navbar rounded-r-4xl">
            <navbar/>
        </div>

        <div class="contenedor-templos ">
            
            <div class="contenido-templos">
                <templos v-if="Opciones.temploInicio"/>
                <registroTemplos v-if="Opciones.registroTemplo"/>
            </div>
        </div>

    </div>
</template>

<style scoped>
.contenedor{
    display: grid;
    grid-template-columns: 14% 86%;
}
.navbar{
    background-color: white;
    width: 100%;
    box-shadow: 0px 10px 20px -3px rgba(0,0,0,0.5);
    left: 0;
    /* position: fixed; */
    top: 0;
    /* text-align: left; */
}
.contenedor-templos{
    height: 100vh;
    width: 100%;

    background-color: var(--azul-claro) ;
}
.contenido-templos{
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 150vh; */
    height: 100vh;
    /* margin-left: 20vh; */

}
</style>