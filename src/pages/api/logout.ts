import { NextApiRequest, NextApiResponse } from "next";

import { Cookie } from "../../Services/Cookie";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		Cookie.DestroyCookie(res);
		res.status(200).json({ done: true });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
};