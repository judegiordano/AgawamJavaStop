export class Config {

	public static readonly Options = {
		NODE_ENV: process.env.NODE_ENV,
		IS_PROD: process.env.NODE_ENV == "production" ? true : false,
		HOST: process.env.HOST,
		DEEPLORE_APPCODE: process.env.DEEPLORE_APPCODE,
		DEEPLORE_APPSUBSCRIPTION: process.env.DEEPLORE_APPSUBSCRIPTION,
		API_ENDPOINT: process.env.API_ENDPOINT,
		CAPTCHA_SECRET_KEY: process.env.CAPTCHA_SECRET_KEY,
	}

	public static readonly Mail = {
		DEV_EMAIL: process.env.DEV_EMAIL,
		MAIL_TRANSPORTER: {
			service: process.env.SMTP_SERVICE,
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASSWORD
			}
		}
	}
}