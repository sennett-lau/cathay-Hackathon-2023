import { IMemberSetMemberIdAction, IMemberSetOfferItemsAction, IMemberState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IMemberState = {
  memberId: '',
  offerItems: [
    {
      image:
        'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      off: '20',
      destination: 'Tokyo',
      code: 'CATHAY2023',
      date: '2 FEBRUARY 2024',
      claimWithin: new Date().getTime() + 60 * 60 * 24 * 1000,
      destinationCode: 'HND',
    },
    {
      image:
        'https://images.unsplash.com/photo-1601534622119-e9b3aa7c7bdf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      off: '20',
      destination: 'Taipei',
      code: 'CWWWAY2023',
      date: '24 MARCH 2024',
      claimWithin: new Date().getTime() + 60 * 60 * 36 * 1000,
      destinationCode: 'TPE',
    },
    {
      image:
        'https://images.unsplash.com/photo-1570191913384-7b4ff11716e7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      off: '20',
      destination: 'Korea',
      code: 'CHDJCS2023',
      date: '12 MAY 2024',
      claimWithin: new Date().getTime() + 60 * 60 * 48 * 1000,
      destinationCode: 'ICN',
    },
  ],
}

const slice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMemberId(state, action: IMemberSetMemberIdAction) {
      state.memberId = action.payload.memberId
    },
    setOfferItems(state, action: IMemberSetOfferItemsAction) {
      state.offerItems = action.payload.offerItems
    }
  },
})

export const { setMemberId, setOfferItems } = slice.actions

export default slice
