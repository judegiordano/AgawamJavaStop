import { Config } from "./Config";
import { RestGeneric } from "./Rest";

export class Utility {

	public static async ValidateCaptcha(token: string): Promise<boolean> {
		try {
			const { CAPTCHA_SECRET_KEY } = Config.Options;
			const response = await RestGeneric.Post(`https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET_KEY}&response=${token}`);
			return response.data.success as boolean;
		} catch (error) {
			throw new Error(error);
		}
	}
}