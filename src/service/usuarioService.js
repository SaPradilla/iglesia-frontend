import api from "../lib/axios";

export default {
    loguearUsuario(data) {
        return api.post('/usuarios/login', data)
    },
    obtenerUsuario(){
        return api.get('/usuarios/listar')
    },
    registrarUsuario(data){
        return api.post('/usuarios/register',data)
    }
        
}
