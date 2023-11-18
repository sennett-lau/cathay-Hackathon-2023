import { DynamoDB } from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { IOfferItem } from '../types'

const OFFER_TABLE = process.env.OFFER_TABLE || ''

const docClient: DocumentClient = new DynamoDB.DocumentClient()

export const getOffersByMemberId = async (memberId: string, limit: number) => {
  // query by memberId-index
  const params = {
    TableName: OFFER_TABLE,
    IndexName: 'memberId-index',
    KeyConditionExpression: 'memberId = :memberId',
    ExpressionAttributeValues: {
      ':memberId': memberId,
    },
    Limit: limit,
  }

  const data = await docClient.query(params).promise()

  return data.Items as IOfferItem[]
}
