export class Config {
	public static readonly Options = {
		IS_PROD: process.env.NODE_ENV == "production",
		DEEPLORE_APPCODE: process.env.DEEPLORE_APPCODE,
		DEEPLORE_APPSUBSCRIPTION: process.env.DEEPLORE_APPSUBSCRIPTION,
		API_ENDPOINT: process.env.API_ENDPOINT,
		NEXT_PUBLIC_IS_PROD: process.env.NEXT_PUBLIC_IS_PROD
	}
}