import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://financial-control-react.herokuapp.com/api',
})