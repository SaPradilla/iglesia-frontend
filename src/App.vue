<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from 'vue'
import { useAuth } from './stores/auth';

const auth = useAuth()

onMounted(()=>{
  auth.ObtenerToken()
})
</script>

<template>
 
  <RouterView />
</template>

<style scoped>

</style>
