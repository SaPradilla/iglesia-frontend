import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAuth = defineStore('auth', () => {

    // States
    const token = ref(null)

    return {
        token

    }
})
