import api from "../lib/axios";

export default {
    loguearUsuario(data) {
        return api.post('/usuarios/login', data)
    }
        
}