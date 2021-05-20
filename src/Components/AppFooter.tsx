import React from "react";

import { SocialBar } from "./SocialBar";

export const AppFooter: React.FC = (): JSX.Element => {
	return (
		<footer style={styles.footer}>
			<SocialBar />
			<div>
				developed by <a style={styles.link} target="_blank" href="https://www.facebook.com/jude.giordano.1" rel="noreferrer">Jude Giordano</a> &#169; {new Date().getFullYear()}
			</div>
		</footer>
	);
};

const styles = {
	footer: {
		width: "100%",
		height: "100px",
		borderTop: "1px solid #eaeaea",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center"	
	},
	link: {
		color: "royalblue"
	}
} as IStyles;