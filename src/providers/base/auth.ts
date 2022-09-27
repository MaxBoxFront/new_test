import ApiProviderDefault from '../apiProviderDefault';
import {
	PostAuthLoginReq,
	PostAuthLoginResp,
	PostAuthRegistrationReq,
	PostAuthRegistrationResp
} from "base/types/provider/base/auth";

export default class AuthProvider extends ApiProviderDefault {
	static async postAuthRegistration(parameters: {
    body: PostAuthRegistrationReq,
    headers: Headers,
  }) {
		let headers;
		const { body } = parameters;
		if (parameters.headers !== undefined) {
			headers = parameters.headers;
		}
		const path = '/register';

		return this.request<PostAuthRegistrationReq, PostAuthRegistrationResp>(path, 'POST', undefined, body, headers);
	}

	static async postAuthLogin(parameters: {
		body: PostAuthLoginReq,
		headers: Headers,
	}) {
		console.log('postLogin, parameters', parameters);
		let headers;
		const { body } = parameters;
		if (parameters.headers !== undefined) {
			headers = parameters.headers;
		}
		const path = '/login';

		return this.request<PostAuthLoginReq, PostAuthLoginResp>(path, 'POST', undefined, body, headers);
	}

	static async postAuthLogout(parameters: {
		headers: Headers,
	}) {
		let headers;
		if (parameters.headers !== undefined) {
			headers = parameters.headers;
		}
		const path = '/logout';

		return this.request<PostAuthLoginReq, PostAuthLoginResp>(path, 'POST', undefined, undefined, headers);
	}

}
