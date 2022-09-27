import ApiProviderDefault from '../apiProviderDefault';
import {GetUserReq, GetUserResp} from "base/types/provider/base/user";


export class UserProvider extends ApiProviderDefault {
	// ----------------------------------------- GetUser
	static async getUser(parameters: {
    params: GetUserReq,
    headers: Headers,
  }) {
		let headers;
		const { params } = parameters;
		if (parameters.headers !== undefined) {
			headers = parameters.headers;
		}
		const path = `/users/${params.userId}`;
		return this.request<GetUserReq, GetUserResp>(path, 'GET', undefined, undefined, headers);
	}
}


