import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import LogRocket from "logrocket";

import { ClientConfig } from "../Services/ClientConfig";

if(ClientConfig.Public.NEXT_PUBLIC_IS_PROD)
	LogRocket.init("nwnxka/agawam-java-stop");
else LogRocket.init("nwnxka/agawam-java-stop-dev");

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <Component {...pageProps} />;
};

export default MyApp;