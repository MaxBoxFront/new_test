import ApiProviderDefault from '../apiProviderDefault';
import {GetUsersReq, GetUsersResp} from "base/types/provider/base/users";


export class UsersProvider extends ApiProviderDefault {
	// ----------------------------------------- GetUsers
	static async getUsers(parameters: {
    params: GetUsersReq,
    headers: Headers,
  }) {
		let headers;
		if (parameters.headers !== undefined) {
			headers = parameters.headers;
		}
		const path = `/users`;
		return this.request<GetUsersReq, GetUsersResp>(path, 'GET', undefined, undefined, headers);
	}
}


