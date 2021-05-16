import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import LogRocket from "logrocket";
LogRocket.init("nwnxka/agawam-java-stop");

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <Component {...pageProps} />;
};

export default MyApp;