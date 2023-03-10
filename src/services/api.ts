import axios from 'axios'

export const apu = axios.create({
baseURL: '/api'
})