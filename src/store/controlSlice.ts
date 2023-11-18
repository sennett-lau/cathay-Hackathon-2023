import {
  IControlSetImageModalOpenAction,
  IControlSetRecommendationModalOpenAction,
  IControlState,
  ISetClaimedRecordAction,
} from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IControlState = {
  isImageModalOpen: false,
  imageModalSrc: '',
  isRecommendationModalOpen: false,
  clockTid: null,
  targetFlightWithin: 0,
  claimedRecord: null,
}

const slice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    setImageModalOpen(state, action: IControlSetImageModalOpenAction) {
      state.isImageModalOpen = action.payload.isImageModalOpen
      state.imageModalSrc = action.payload.imageModalSrc || ''
    },
    setRecommendationModalOpen(
      state,
      action: IControlSetRecommendationModalOpenAction,
    ) {
      state.isRecommendationModalOpen = action.payload.isRecommendationModalOpen
    },
    setClockTid(state, action) {
      if (state.clockTid) {
        clearInterval(state.clockTid)
      }
      state.clockTid = action.payload.clockTid
    },
    setTargetFlightWithin(state, action) {
      state.targetFlightWithin = action.payload.targetFlightWithin
    },
    setClaimedRecord(state, action: ISetClaimedRecordAction) {
      state.claimedRecord = action.payload.claimedRecord
    },
  },
})

export const {
  setImageModalOpen,
  setRecommendationModalOpen,
  setClockTid,
  setTargetFlightWithin,
  setClaimedRecord,
} = slice.actions

export default slice
