import { Action } from 'redux'

export interface IMemberState {
  memberId: string
}

export interface IMemberSetMemberIdAction extends Action {
  payload: {
    memberId: string
  }
}
