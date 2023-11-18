import { Action } from 'redux'
import { OfferItem } from './control'

export interface IMemberState {
  memberId: string
  offerItems: OfferItem[]
}

export interface IMemberSetMemberIdAction extends Action {
  payload: {
    memberId: string
  }
}

export interface IMemberSetOfferItemsAction extends Action {
  payload: {
    offerItems: OfferItem[]
  }
}

