export class ClientConfig {

	public static readonly Public = {
		NEXT_PUBLIC_IS_PROD: process.env.NEXT_PUBLIC_IS_PROD,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		NEXT_PUBLIC_CAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY
	}
}