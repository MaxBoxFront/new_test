import { CommonResponse, ErrorResponse } from '../response';

export interface UserType {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

// -------------------------- GetUser

export interface GetUserReq {
  userId: number,
}

export type GetUserParams = {} & GetUserReq;

export type GetUserData = {
  data: UserType
}

export type GetUserResp = {
  data: GetUserData
} & CommonResponse | ErrorResponse

