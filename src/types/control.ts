import { Action } from 'redux'

export interface IControlState {
  isImageModalOpen: boolean
  imageModalSrc: string
  isRecommendationModalOpen: boolean
  clockTid: NodeJS.Timer | null
  targetFlightWithin: number
  claimedRecord: any
}

export interface IControlSetImageModalOpenAction extends Action {
  payload: {
    isImageModalOpen: boolean
    imageModalSrc?: string
  }
}

export interface IControlSetRecommendationModalOpenAction extends Action {
  payload: {
    isRecommendationModalOpen: boolean
  }
}

export interface ISetClaimedRecordAction extends Action {
  payload: {
    claimedRecord: OfferItem
  }
}

export type OfferItem = {
  image: string,
  off: string,
  destination: string,
  date: string,
  claimWithin: number,
  code: string,
  destinationCode: string,
}

export type FlightItem = {
  destinationCode: string,
  memberId: string,
  flights: Flight[],
}

export type Flight = {
  flightNumber: string,
  fromTime: string,
  toTime: string,
  duration: string,
  prices: {
    economy: number,
    business: number,
  }
}
