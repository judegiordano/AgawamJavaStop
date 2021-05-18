export class Config {

	public static readonly Options = {
		IS_PROD: process.env.NODE_ENV == "production" ? true : false,
		HOST: process.env.HOST,
		DEEPLORE_APPCODE: process.env.DEEPLORE_APPCODE,
		DEEPLORE_APPSUBSCRIPTION: process.env.DEEPLORE_APPSUBSCRIPTION,
		API_ENDPOINT: process.env.API_ENDPOINT,
	}

	public static readonly Public = {
		NEXT_PUBLIC_IS_PROD: process.env.NEXT_PUBLIC_IS_PROD,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
	}
}