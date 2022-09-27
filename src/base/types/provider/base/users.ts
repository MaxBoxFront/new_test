import { CommonResponse, ErrorResponse } from '../response';

// -------------------------- GetUsers

export interface GetUsersReq {}

export type GetUserParams = {} & GetUsersReq;

export type GetUsersData = {
  data: {}
}

export type GetUsersResp = {
  data: GetUsersData
} & CommonResponse | ErrorResponse

