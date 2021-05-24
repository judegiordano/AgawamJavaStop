import mail, { TransportOptions } from "nodemailer";

import { Config } from "./Config";

interface IMailAuth {
	user: string,
	pass: string
}
export interface ImailTransporter extends TransportOptions {
	service: string,
	auth: IMailAuth
}

export interface IMailOptions {
	to: string,
	from?: string,
	subject: string,
	html?: string
	text?: string,
}

export interface IDevMail {
	preview: string | false,
	raw: unknown
}

export class Mailer {

	private static readonly transporter = mail.createTransport(Config.Mail.MAIL_TRANSPORTER);

	private static async DevMailer(options: IMailOptions): Promise<IDevMail> {

		const testAccount = await mail.createTestAccount();

		const temp = mail.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth: {
				user: testAccount.user,
				pass: testAccount.pass
			}
		});

		return new Promise((resolve, reject) => {
			temp.sendMail(options, (error, info) => {
				if (error) return reject(error);

				return resolve({
					preview: mail.getTestMessageUrl(info),
					raw: info
				});
			});
		});
	}

	public static async SendEmail(options: IMailOptions): Promise<IDevMail | boolean> {
		if (!Config.Options.IS_PROD) return await Mailer.DevMailer(options);

		return new Promise((resolve, reject) => {
			Mailer.transporter.sendMail(options, (error, info) => {
				if (error) {
					console.log(error);
					return reject(error);
				}
				console.log(info);
				return resolve(true);
			});
		});
	}
}