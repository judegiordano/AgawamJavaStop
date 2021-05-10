import React from "react";

import styles from "../styles/Home.module.css";

export const AppFooter: React.FC = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			developed by <a target="_blank" href="https://www.facebook.com/jude.giordano.1" rel="noreferrer">Jude Giordano</a> &#169; {new Date().getFullYear()}
		</footer>
	);
};