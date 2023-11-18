import { IMemberSetMemberIdAction, IMemberState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IMemberState = {
  memberId: '',
}

const slice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMemberId(state, action: IMemberSetMemberIdAction) {
      state.memberId = action.payload.memberId
    },
  },
})

export const { setMemberId } = slice.actions

export default slice
