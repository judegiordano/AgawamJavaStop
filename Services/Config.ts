import * as dotenv from "dotenv";

dotenv.config();

export const Config = {
    CONNECTION_STRING: process.env.CONNECTION_STRING
}