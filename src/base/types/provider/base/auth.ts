import {CommonResponse, ErrorResponse} from "../response";

// -----------------------------------------------Registration


export type PostAuthRegistrationReq = {
  username: string,
  email: string,
  password: string,
}

export type PostAuthRegistrationParams = {} & PostAuthRegistrationReq;

export type PostAuthRegistrationData = {}

export type PostAuthRegistrationResp = {
  data: PostAuthRegistrationData
} & CommonResponse | ErrorResponse

// -----------------------------------------------PostAuthLogin

export type PostAuthLoginReq = {
  email: string,
  password: string,
}

export type PostAuthLoginParams = {} & PostAuthLoginReq;

export type PostAuthLoginData = {
  token: string,
}

export type PostAuthLoginResp = {
  data: PostAuthLoginData
} & CommonResponse | ErrorResponse