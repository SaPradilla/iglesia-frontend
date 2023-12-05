import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import usuarioService from '../service/usuarioService'
import {toast} from 'vue3-toastify'
import { useAuth } from './auth'
import { useRouter } from 'vue-router'

export const useUsuario = defineStore('usuario', () => {

    const router = useRouter()

    const usuario = ref({
        nombre: '',
        edad: '',
        tipo_documento: '',
        documento: '',
        contrasena: '',
    })

    const Auth = useAuth()

    const loginUsuario = async(data)=>{
        try{
            // console.log(data)
            const loginRes = await usuarioService.loguearUsuario(data)
            console.log(loginRes.data.data.token)
            toast.success(loginRes.data.msg,{
                position: toast.POSITION.TOP_CENTER,
            });

            Auth.token = loginRes.data.data.token

            localStorage.setItem('token', loginRes.data.data.token)

            router.push({name:'Templos'})

        }catch(err){
            toast.error(err.response.data.errorMensaje,{
                position: toast.POSITION.TOP_CENTER,
            });
            console.log(err)
        }
    }

    const ObtenerToken = () => {
        if (localStorage.getItem('token')) {
          token.value = localStorage.getItem('token')
        }
        toast.error('Loguese primero',{
            position: toast.POSITION.TOP_CENTER,
        });
        return
    }
    // usuario,
    return {
        usuario,

        loginUsuario
    }
})
