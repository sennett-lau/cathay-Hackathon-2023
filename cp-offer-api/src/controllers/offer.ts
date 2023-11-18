import { getOffersByMemberId } from '../models/offer'

export const getOffersController = async (memberId: string, limit: number) => {
  const offers = await getOffersByMemberId(memberId, limit)

  return offers
}
