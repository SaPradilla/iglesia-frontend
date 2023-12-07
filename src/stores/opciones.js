import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useRouter} from 'vue-router'

export const useOpciones = defineStore('opciones', () => {

    // States
    const router = useRouter()
    const registroTemplo = ref(false)
    const temploInicio = ref(false)
    
    const usuarioInicio = ref(false)
    const registroUsuario = ref(false)

    // Metodos
    const handleRegistroTemplo = ()=>{
        registroTemplo.value = true
        temploInicio.value = false

    }
    const handleTemploInicio = ()=>{


        router.push({name:'Templos'})

        registroUsuario.value = false
        usuarioInicio.value = false
        registroTemplo.value = false
        temploInicio.value = true

    }

    const handleRegistroUsuario = ()=>{
        usuarioInicio.value = false
        registroUsuario.value = true

    }
    
    const handleInicioUsuario= ()=>{

        router.push({name:'Usuarios'})

        registroUsuario.value = false
        registroTemplo.value = false
        temploInicio.value = false
        
        usuarioInicio.value = true


    }
    return {
        registroTemplo,
        temploInicio,
        usuarioInicio,
        registroUsuario,


        handleRegistroTemplo,
        handleTemploInicio,
        handleRegistroUsuario,
        handleInicioUsuario

    }
})
