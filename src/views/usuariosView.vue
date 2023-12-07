<script setup>
 import navbar from '../components/navbar.vue'
 import { useOpciones } from '../stores/opciones';
 import usuario from '../components/usuario.vue';
 import RegistroCreyente from '../components/RegistroCreyente.vue'
 const Opciones = useOpciones()
</script>

<template>
    <div class="contenedor">

        <div class="navbar rounded-r-4xl">
            <navbar/>
        </div>

        <div class="contenedor-usuario ">
            <usuario v-if="Opciones.usuarioInicio"/>
            <RegistroCreyente v-if="Opciones.registroUsuario"/>
          
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
.contenedor-usuario{
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