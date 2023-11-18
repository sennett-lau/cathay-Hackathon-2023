import { IHTTPHeaders } from '../types'

export const getHeaders: IHTTPHeaders = {
  'Access-Control-Allow-Headers': 'Content-Type,X-Forwarded-For',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,GET',
}

export const postHeaders: IHTTPHeaders = {
  'Access-Control-Allow-Headers': 'Content-Type,X-Forwarded-For',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
}

export const putHeaders: IHTTPHeaders = {
  'Access-Control-Allow-Headers': 'Content-Type,X-Forwarded-For',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,PUT',
}

export const deleteHeaders: IHTTPHeaders = {
  'Access-Control-Allow-Headers': 'Content-Type,X-Forwarded-For',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS,DELETE',
}
