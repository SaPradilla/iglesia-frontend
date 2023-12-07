import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import usuarioService from '../service/usuarioService'
import {toast} from 'vue3-toastify'
import { useAuth } from './auth'
import { useRouter } from 'vue-router'
import { useOpciones } from './opciones'

export const useUsuario = defineStore('usuario', () => {

    const router = useRouter()
    const Auth = useAuth()
    const opciones = useOpciones()

    const usuario = ref({
        nombre: '',
        edad: '',
        tipo_documento: '',
        documento: '',
        contrasena: '',
    })

    const usuarios = ref([])




    const loginUsuario = async(data)=>{
        try{
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


    const verUsuarios = async()=>{
        try {
        
            const Usuarios = await usuarioService.obtenerUsuario()
            
            console.log(Usuarios)
            usuarios.value = Usuarios.data.data
        
        } catch (error) {
            toast.error(err.response.data.errorMensaje,{
                position: toast.POSITION.TOP_CENTER,
            });
            console.log(err)
        }
    }
    
    const registrarUsuario = async(data)=>{
        try{
            const registerRes = await usuarioService.registrarUsuario(data)
            console.log(registerRes.data)

            toast.success(registerRes.data.message,{
                position: toast.POSITION.TOP_CENTER,
            });
            opciones.handleInicioUsuario()

        }catch(err){
            toast.error('Documento Ya Registrado',{
                position: toast.POSITION.TOP_CENTER,
            });
            console.log(err)
        }
    }
    return {
        usuario,
        usuarios,

        loginUsuario,
        verUsuarios,
        registrarUsuario
    }
})
