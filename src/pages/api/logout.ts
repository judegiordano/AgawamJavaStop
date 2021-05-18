import { NextApiRequest, NextApiResponse } from "next";

import { Cookie } from "../../Services/Cookie";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		if (req.method != "POST") throw "method not allowed";
		Cookie.DestroyCookie(res);
		res.status(200).json({ ok: true, done: true });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
};