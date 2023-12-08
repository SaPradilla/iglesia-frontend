<script setup>
    import {ref} from 'vue'
    import { useUsuario } from '../../stores/usuario';
    const Usuario = useUsuario()

    const usuarioData = ref({
        documento:'108756839',
        contrasena:'sena123456'
    })

</script>

<template>
    <div class="contenedor-login">
        <h1>Login</h1>
        <div class="formulario-login">
        <form @submit.prevent="Usuario.loginUsuario(usuarioData)">
            <input v-model="usuarioData.documento" type="text" name="documento" id="" placeholder="Documento">
            <input v-model="usuarioData.contrasena" type="password" name="contrasena" id="" placeholder="Contraseña">
            <input type="submit" value="Acceder" >
        </form>
      </div>
    </div>
</template>

<style scoped>
    .contenedor-login{
        height: 100vh;
        display: flex;
        justify-content: center;
        gap: 5vh;
        flex-direction: column;
    }
    h1{
        font-size: 3em;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        color: var(--azul);
    }
    .formulario-login{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 40vh;
        width: 50vh;
        border-radius: 10px;
        box-shadow: 0px 15px 20px -3px rgba(0,0,0,0.1);
        
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4vh;
    }

    input[type="text"],input[type="password"]{
        background-color: rgba(172, 172, 172, 0.259) ;
        width: 30vh;
        padding: 15px;
        border-style: solid;
        border-color: var(--azul);
        border-radius: 10px;
        transition: all 0.2s ease-in;
        outline-color: var(--azul);
        box-shadow: 0px 15px 20px -3px rgba(0,0,0,0.3);


    }
    input[type="text"]:focus,input[type="password"]:focus{
        /* background-color: red; */
        outline: none;
        border-color: var(--azul-mas-claro);
        /* background-color: red; */
        /* color: var(--azul-claro); */
    }
    input[type="text"]:hover,input[type="password"]:hover{
        /* background-color: red; */
        outline: none;
        border-color: var(--azul-mas-claro);
        /* background-color: red; */
        /* color: var(--azul-claro); */
        

    }

    input[type="submit"]{
        background-color:var(--azul);
        /* border: none; */
        padding: 15px;
        width:20vh;
        border-radius: 43px;
        color: white;
        transition: all 0.2s ease-in;
    }
    input[type="submit"]:hover{
        transform: translateY(-2px);
        filter: brightness(90%);
    }

</style>