import axios from 'axios'

export const sampleApi = axios.create({
  baseURL: 'https://api.publicapis.org/entries',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
