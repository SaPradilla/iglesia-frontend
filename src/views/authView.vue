<script setup>
    import Login from '../components/auth/Login.vue';
</script>

<template>
    <div class="contenedor-auth">
        <Login/>
    </div>
</template>

<style scoped>
    .contenedor-auth{
        background-color: var(--azul-claro);
        background-size: cover;
        height: 100vh;
    }
</style>