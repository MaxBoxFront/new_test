import axios from 'axios';
import { ErrorResponse } from '../base/types/provider';

const requireCodes = [200, 201, 400, 401, 403, 404, 409, 422, 429, 500, 502, 504];

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API,
	validateStatus: (status) => requireCodes.includes(status),
	// withCredentials: false,
});

export default class ApiProviderDefault {
	static request<T, R>(
		url: string,
		method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH',
		params: any,
		data?: T,
		headers?: Headers,
	): Promise<R | ErrorResponse> {
		// @ts-ignore
		const result = axiosInstance({
			url,
			method,
			params,
			data,
			headers,
		})
			.then((response) => {
				const getError = () => {
					if (response.data.error) return response.data.error;
					if (response.data.Key) return response.data.Key;
					if (response.data.key) return response.data.key;
					if (response.data.info && response.data.info.key) return response.data.info.key;
					return response.statusText;
				};

				switch (response.status) {
					case 400:
					case 401:
					case 403:
					case 404:
					case 409:
					case 422:
					case 429:
					case 500:
					case 502:
						return {
							status: response.status,
							headers: { etag: response.headers.etag },
							error: getError(),
							success: false,
						};
					case 504:
						return {
							status: response.status,
							headers: { etag: response.headers.etag },
							error: 'TIME_OUT',
							success: false,
						};
					default:
						return {
							data: response.data,
							headers: { etag: response.headers.etag },
							status: response.status,
							success: true,
						};
				}
			})
			.catch((error) => ({
				success: false,
				error: error.message,
			}));

		// @ts-ignore
		return result;
	}
}
