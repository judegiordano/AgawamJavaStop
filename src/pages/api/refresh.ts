import { NextApiRequest, NextApiResponse } from "next";

import { Cookie } from "../../Services/Cookie";
import { Rest } from "../../Services/Rest";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		if (req.method != "POST") throw "method not allowed";

		const token = Cookie.GetCookie(req);
		console.log(token);

		const response = await Rest.Post("admin/refresh", {}, { headers: { Authorization: `Bearer ${token}` } });
		const { data } = response;

		if (!data.ok) throw data.data || "internal error";

		Cookie.SetCookie(res, data.token);
		res.status(200).json({ ok: true, user: data.admin });
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
};
