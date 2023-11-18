import { APIGatewayProxyEventBase } from 'aws-lambda'
import { getOffersController } from '../controllers/offer'
import { IAuthorizerRequest, IHTTPResponse, IHTTPResponseBody } from '../types'
import { BadRequestError, errorHandlingResponse, getHeaders } from '../utils'

export const getOffersHandler = async (event: APIGatewayProxyEventBase<IAuthorizerRequest>): Promise<IHTTPResponse> => {
  const method = 'GET'

  if (event.httpMethod !== method) {
    throw new Error(`getOffers only accept ${method} method, you tried: ${event.httpMethod}`)
  }

  let response: IHTTPResponse
  let respBody: IHTTPResponseBody

  const memberId = event.pathParameters?.memberId
  const num = event.queryStringParameters?.n

  try {
    if (!memberId) {
      throw new BadRequestError('Missing memberId')
    }

    const data = await getOffersController(memberId, num ? parseInt(num) : 3)

    respBody = {
      message: 'Done',
      data: data,
    }

    response = {
      statusCode: 200,
      body: JSON.stringify(respBody),
      headers: getHeaders,
    }
  } catch (error: any) {
    response = errorHandlingResponse(error, getHeaders)
  }

  return response
}
