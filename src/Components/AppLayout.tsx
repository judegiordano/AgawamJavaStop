import React, { ReactNode } from "react";
import { AppFooter } from "./AppFooter";
import { AppHead } from "./AppHead";

interface IAppLayout {
	children: ReactNode
}

import styles from "../styles/Home.module.css";
import { NavBar } from "./NavBar";

export const AppLayout: React.FC<IAppLayout> = ({ children }: IAppLayout): JSX.Element => {
	return (
		<>
			<NavBar />
			<div className={styles.container} style={{paddingTop: "50px"}}>
				<AppHead title="Agawam Java Stop" />
				{children}
				<AppFooter />
			</div>
		</>
	);
};