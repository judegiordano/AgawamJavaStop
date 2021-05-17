import React, { ReactNode } from "react";
import { AppFooter } from "./AppFooter";
import { AppHead } from "./AppHead";

interface IAppLayout {
	children: ReactNode
}

import styles from "../styles/Home.module.css";

export const AppLayout: React.FC<IAppLayout> = ({ children }: IAppLayout): JSX.Element => {
	return (
		<>
			<div className={styles.container}>
				<AppHead title="Agawam Java Stop" />
				{ children }
				<AppFooter />
			</div>
		</>
	);
};