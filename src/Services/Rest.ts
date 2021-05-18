import { AxiosRequestConfig } from "axios";
import { create, ApiResponse } from "apisauce";


import { Config } from "./Config";

export class Rest {

	private static readonly url = Config.Options.API_ENDPOINT;

	private static readonly client = create({
		baseURL: Rest.url,
		headers: {
			appcode: Config.Options.DEEPLORE_APPCODE,
			appsubscription: Config.Options.DEEPLORE_APPSUBSCRIPTION
		}
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public static async Get(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<any>> {
		try {
			return await Rest.client.get(url, config);
		} catch (error) {
			throw new Error(error);
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public static async Post(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<any>> {
		try {
			return await Rest.client.post(url, data, config);
		} catch (error) {
			throw new Error(error);
		}
	}
}

export class RestPublic {

	private static readonly Client = create({
		baseURL: "/api"
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public static async Post(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<any>> {
		try {
			return await RestPublic.Client.post(url, data, config);
		} catch (error) {
			throw new Error(error);
		}
	}
}

export class ServerSideClient {

	private static readonly Client = create({
		baseURL: Config.Options.HOST
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public static async Post(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<any>> {
		try {
			return await ServerSideClient.Client.post(url, data, config);
		} catch (error) {
			throw new Error(error);
		}
	}
}