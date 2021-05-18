import { NextApiRequest, NextApiResponse } from "next";

import { Cookie } from "../../Services/Cookie";
import { Rest } from "../../Services/Rest";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		if (req.method != "POST") throw "method not allowed";

		const { username, password } = req.body;
		if (!username || !password) throw "invalid request body";

		const response = await Rest.Post("admin/login", { username, password });
		const { data } = response;

		if (!data.ok) throw data.message || "internal error";

		Cookie.SetCookie(res, data.token);
		res.status(200).json({ ok: true, user: data.admin });
	} catch (error) {
		res.status(500).json({ ok: false, error });
	}
};