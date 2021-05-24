import { NextApiRequest, NextApiResponse } from "next";

import { Mailer } from "../../Services/Email";
import { Utility } from "../../Services/Utility";
import { Config } from "../../Services/Config";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		if (req.method != "POST") throw "method not allowed";

		const { email, name, message, token } = req.body;

		const isHuman = await Utility.ValidateCaptcha(token);
		if (!isHuman) throw "captcha failed";

		const mail = await Mailer.SendEmail({
			to: Config.Mail.DEV_EMAIL,
			subject: `Bug Reported By ${email}`,
			html: `<h4>new bug reported from <bold>${email}</bold></h4><br>Name: ${name}<br><br>${message}`
		});

		res.status(200).json({ ok: true, data: mail });
	} catch (error) {
		res.status(500).json({ ok: false, error });
	}
};
