import { IHTTPHeaders, IHTTPResponse } from '../types'
import { IHTTPResponseBody } from '../types/http'

export class UnauthorizedError extends Error {}
export class NotFoundError extends Error {}
export class BadRequestError extends Error {}

export const errorHandlingResponse = (error: Error, headers: IHTTPHeaders): IHTTPResponse => {
  let response: IHTTPResponse
  let respBody: IHTTPResponseBody

  if (error instanceof NotFoundError) {
    respBody = {
      message: 'Not Found',
    }

    response = {
      statusCode: 404,
      body: JSON.stringify(respBody),
      headers,
    }
  } else if (error instanceof UnauthorizedError) {
    respBody = {
      message: 'Unauthorized',
    }

    response = {
      statusCode: 401,
      body: JSON.stringify(respBody),
      headers,
    }
  } else if (error instanceof BadRequestError) {
    respBody = {
      message: error.message,
    }

    response = {
      statusCode: 400,
      body: JSON.stringify(respBody),
      headers,
    }
  } else {
    respBody = {
      message: 'Internal Server Error',
    }

    response = {
      statusCode: 500,
      body: JSON.stringify(respBody),
      headers,
    }
  }

  return response
}
