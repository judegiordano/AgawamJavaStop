/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

import { Config } from "../Services/Config";

const connect = (handler: any) => async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	if (mongoose.connections[0].readyState) {
		return handler(req, res);
	}

	await mongoose.connect(Config.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
		poolSize: 10,
		serverSelectionTimeoutMS: 5000,
		socketTimeoutMS: 45000
	});

	return handler(req, res);
};

export default connect;