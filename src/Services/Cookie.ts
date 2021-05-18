/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serialize, CookieSerializeOptions } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

import { Config } from "./Config";

export class Cookie {

	public static SetCookie(res: NextApiResponse, value: string): void {
		try {
			res.setHeader("Set-Cookie", serialize("jid", value, {
				httpOnly: true,
				path: "/",
				maxAge: 60 * 60 * 24, // 1 day
				secure: Config.Options.IS_PROD,
				signed: false,
				sameSite: true
			} as CookieSerializeOptions));
		} catch (error) {
			throw new Error(error);
		}
	}


	public static SetCtxCookie(res: any, value: string): void {
		try {
			res.setHeader("Set-Cookie", serialize("jid", value, {
				httpOnly: true,
				path: "/",
				maxAge: 60 * 60 * 24, // 1 day
				secure: Config.Options.IS_PROD,
				signed: false,
				sameSite: true
			} as CookieSerializeOptions));
		} catch (error) {
			throw new Error(error);
		}
	}

	public static GetCookie(req: NextApiRequest): unknown {
		try {
			return req.cookies["jid"];
		} catch (error) {
			throw new Error(error);
		}
	}

	public static DestroyCookie(res: NextApiResponse): void {
		try {
			res.setHeader("Set-Cookie", serialize("jid", "", {
				httpOnly: true,
				path: "/",
				maxAge: 0,
				secure: Config.Options.IS_PROD,
				signed: false,
				sameSite: true
			} as CookieSerializeOptions));
		} catch (error) {
			throw new Error(error);
		}
	}
}