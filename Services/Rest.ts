import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { Config } from "./Config";

export class Rest {
	private static readonly url = Config.Options.API_ENDPOINT
	private static readonly client = axios.create({
		baseURL: Rest.url,
		headers: {
			appcode: Config.Options.DEEPLORE_APPCODE,
			appsubscription: Config.Options.DEEPLORE_APPSUBSCRIPTION
		}
	})

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public static async Get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		try {
			return await Rest.client.get(url, config);
		} catch (error) {
			throw new Error(error);
		}
	}
}