import axios from 'axios'

export const userApi = axios.create({
  baseURL: `${process.env.NEXT_USER_API_URL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const offerApi = axios.create({
  baseURL: `${process.env.NEXT_OFFER_API_URL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
