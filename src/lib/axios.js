import axios from 'axios'

// baseURL: 'http://localhost:6969/api'
const api = axios.create({
    baseURL:'https://iglesia-backend-production.up.railway.app/api'
})

export default api