import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import temploService from '../service/temploService'
import {toast} from 'vue3-toastify'
import { useRouter } from 'vue-router'
import { useOpciones } from './opciones'

export const useTemplos = defineStore('templos', () => {

    const router = useRouter()
    const opciones = useOpciones()

    const templos = ref([])

    const registrarTemplo = (data)=>{
        // console.log(data)
        temploService.registrarTemplo(data)
        .then(res =>{
            console.log(res)
            toast.success(res.data.message,{
                position: toast.POSITION.TOP_RIGHT,
            });
            
            opciones.handleTemploInicio()
        })
        .catch(err =>{
            toast.error(err.response.data.errorMensaje,{
                position: toast.POSITION.TOP_CENTER,
            });
            console.log(err)
        })
    }

    const verTemplos = () =>{
        temploService.obtenerTemplos()
        .then(res=>{
            console.log(res)
            templos.value = res.data.data
        })
    }

    return {
        templos,
        registrarTemplo,
        verTemplos
    }
})