export interface IHTTPHeaders {
  'Access-Control-Allow-Headers': string
  'Access-Control-Allow-Origin': string
  'Access-Control-Allow-Methods': string
}

export interface IHTTPResponse {
  statusCode: number
  body: string
  headers: IHTTPHeaders
}

export interface IHTTPResponseBody {
  message?: string
  data?: any
}
