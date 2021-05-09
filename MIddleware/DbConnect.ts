import mongoose from 'mongoose';

import { Config } from "../Services/Config";

const connect = handler => async (req, res) => {
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