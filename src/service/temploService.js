import api from "../lib/axios";

export default {
    registrarTemplo(data) {
        return api.post('/templos/register', data)
    },
    obtenerTemplos(){
        return api.get('/templos/listar')
    }
        
}
