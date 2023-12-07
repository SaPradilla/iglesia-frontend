import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {toast} from 'vue3-toastify'

export const useAuth = defineStore('auth', () => {

    // States
    const token = ref(null)
    // toast.error('Loguese primero',{
    //     position: toast.POSITION.TOP_CENTER,
    // });

    const ObtenerToken = () => {
        if (localStorage.getItem('token')) {
          token.value = localStorage.getItem('token')
          return
        }
    }
    const logout = ()=>{
        toast.success('Sesion Cerrada Correctamente',{
            position: toast.POSITION.TOP_CENTER,
        });
        localStorage.clear()
        token.value = null
    }
    return {
        token,
        logout,
        ObtenerToken

    }
})
